"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const electron = require("electron");
const node_child_process = require("node:child_process");
const fs = require("node:fs");
const node_os = require("node:os");
const path = require("node:path");
const require$$0 = require("child_process");
const customActionsChannels = {
  setCards: "customActions_setCards",
  getCards: "customActions_getCards",
  startExe: "customActions_startExe"
};
const storageKeys = {
  customActions: "customActions"
};
function getCards(storageManager) {
  return storageManager.getCustomData(storageKeys.customActions) || [];
}
function setCards(storageManager, cards) {
  storageManager.setCustomData(storageKeys.customActions, cards);
}
const ptyChannels = {
  stopProcess: "pty-stop-process",
  onData: "pty-on-data",
  onTitle: "pty-on-title",
  onExit: "pty-on-exit-code"
};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var treeKill$1;
var hasRequiredTreeKill;
function requireTreeKill() {
  if (hasRequiredTreeKill) return treeKill$1;
  hasRequiredTreeKill = 1;
  var childProcess = require$$0;
  var spawn = childProcess.spawn;
  var exec = childProcess.exec;
  treeKill$1 = function(pid, signal, callback) {
    if (typeof signal === "function" && callback === void 0) {
      callback = signal;
      signal = void 0;
    }
    pid = parseInt(pid);
    if (Number.isNaN(pid)) {
      if (callback) {
        return callback(new Error("pid must be a number"));
      } else {
        throw new Error("pid must be a number");
      }
    }
    var tree = {};
    var pidsToProcess = {};
    tree[pid] = [];
    pidsToProcess[pid] = 1;
    switch (process.platform) {
      case "win32":
        exec("taskkill /pid " + pid + " /T /F", callback);
        break;
      case "darwin":
        buildProcessTree(pid, tree, pidsToProcess, function(parentPid) {
          return spawn("pgrep", ["-P", parentPid]);
        }, function() {
          killAll(tree, signal, callback);
        });
        break;
      // case 'sunos':
      //     buildProcessTreeSunOS(pid, tree, pidsToProcess, function () {
      //         killAll(tree, signal, callback);
      //     });
      //     break;
      default:
        buildProcessTree(pid, tree, pidsToProcess, function(parentPid) {
          return spawn("ps", ["-o", "pid", "--no-headers", "--ppid", parentPid]);
        }, function() {
          killAll(tree, signal, callback);
        });
        break;
    }
  };
  function killAll(tree, signal, callback) {
    var killed = {};
    try {
      Object.keys(tree).forEach(function(pid) {
        tree[pid].forEach(function(pidpid) {
          if (!killed[pidpid]) {
            killPid(pidpid, signal);
            killed[pidpid] = 1;
          }
        });
        if (!killed[pid]) {
          killPid(pid, signal);
          killed[pid] = 1;
        }
      });
    } catch (err) {
      if (callback) {
        return callback(err);
      } else {
        throw err;
      }
    }
    if (callback) {
      return callback();
    }
  }
  function killPid(pid, signal) {
    try {
      process.kill(parseInt(pid, 10), signal);
    } catch (err) {
      if (err.code !== "ESRCH") throw err;
    }
  }
  function buildProcessTree(parentPid, tree, pidsToProcess, spawnChildProcessesList, cb) {
    var ps = spawnChildProcessesList(parentPid);
    var allData = "";
    ps.stdout.on("data", function(data) {
      var data = data.toString("ascii");
      allData += data;
    });
    var onClose = function(code) {
      delete pidsToProcess[parentPid];
      if (code != 0) {
        if (Object.keys(pidsToProcess).length == 0) {
          cb();
        }
        return;
      }
      allData.match(/\d+/g).forEach(function(pid) {
        pid = parseInt(pid, 10);
        tree[parentPid].push(pid);
        tree[pid] = [];
        pidsToProcess[pid] = 1;
        buildProcessTree(pid, tree, pidsToProcess, spawnChildProcessesList, cb);
      });
    };
    ps.on("close", onClose);
  }
  return treeKill$1;
}
var treeKillExports = requireTreeKill();
const treeKill = /* @__PURE__ */ getDefaultExportFromCjs(treeKillExports);
class ExeManager {
  isRunning;
  process;
  id;
  constructor(id, exePath, appManager) {
    this.id = id;
    let validatedExe = void 0;
    if (exePath && exePath.length > 0) {
      try {
        fs.accessSync(exePath, fs.constants.R_OK);
        validatedExe = path.resolve(exePath);
      } catch (error) {
        console.warn(`Exe File ${exePath} is not accessible.`);
      }
    } else {
      console.warn(`Exe path is empty.`);
    }
    if (!validatedExe) {
      appManager?.getWebContent()?.send(ptyChannels.onExit, this.id);
      this.isRunning = false;
      return;
    }
    let commandToRun = validatedExe;
    if (commandToRun.includes(" ")) {
      commandToRun = `"${commandToRun}"`;
    }
    this.process = node_child_process.spawn(commandToRun, [], {
      env: process.env,
      shell: true,
      cwd: process.cwd()
    });
    this.isRunning = true;
    this.process.stdout?.on("data", (data) => {
      console.log("on stdout data", this.id);
      appManager?.getWebContent()?.send(ptyChannels.onData, this.id, data.toString());
    });
    this.process.stderr?.on("data", (data) => {
      console.error(`[${this.id}] stderr:`, data.toString());
      appManager?.getWebContent()?.send(ptyChannels.onData, this.id, data.toString());
    });
    appManager?.getWebContent()?.send(ptyChannels.onTitle, this.id, this.process?.spawnfile);
    this.process.on("error", (err) => {
      console.error(`Failed to start process for ${validatedExe}:`, err);
      appManager?.getWebContent()?.send(ptyChannels.onData, this.id, `\r
Error: Could not start process. ${err.message}\r
`);
      appManager?.getWebContent()?.send(ptyChannels.onExit, this.id);
      this.isRunning = false;
    });
    this.process.on("exit", () => {
      appManager?.getWebContent()?.send(ptyChannels.onExit, this.id);
      this.isRunning = false;
    });
  }
  async stopAsync() {
    return new Promise((resolve) => {
      if (this.isRunning && this.process) {
        this.process.once("exit", () => {
          this.process = void 0;
          resolve();
        });
        if (this.process.pid) {
          treeKill(this.process.pid);
        } else {
          this.process.kill();
        }
        this.isRunning = false;
      } else {
        resolve();
      }
    });
  }
  /**
   * Stops the current child process.
   */
  stop() {
    if (this.isRunning && this.process) {
      this.process.once("exit", () => {
        this.process = void 0;
      });
      if (this.process.pid) {
        treeKill(this.process.pid);
      } else {
        this.process.kill();
      }
      this.isRunning = false;
    }
  }
  // The 'resize' method was PTY-specific and has been removed as it's not applicable to a standard child process.
  /**
   * Clears the terminal by sending the appropriate command ('cls' or 'clear') to the process's input.
   */
  clear() {
    if (this.isRunning && this.process?.stdin) {
      const command = node_os.platform() === "win32" ? "cls" : "clear";
      const lineEnding = node_os.platform() === "win32" ? "\r\n" : "\n";
      this.write(`${command}${lineEnding}`);
    }
  }
  /**
   * Writes data to the child process's standard input.
   * @param data - The data to write, either a string or an array of strings.
   */
  write(data) {
    if (!this.isRunning || !this.process?.stdin) return;
    if (Array.isArray(data)) {
      data.forEach((text) => this.process?.stdin?.write(text));
    } else {
      this.process?.stdin?.write(data);
    }
  }
}
let ptyManager = void 0;
let targetID = void 0;
function startExecute(appManager) {
  electron.ipcMain.on(customActionsChannels.startExe, (_, id, exePath) => {
    targetID = id;
    ptyManager = new ExeManager(id, exePath, appManager);
  });
  electron.ipcMain.on(ptyChannels.stopProcess, (_, id) => {
    if (ptyManager && targetID && id === targetID) {
      ptyManager.stop();
      ptyManager = void 0;
      targetID = void 0;
    }
  });
}
async function initialExtension(lynxApi, utils) {
  lynxApi.listenForChannels(() => {
    utils.getStorageManager().then((storageManager) => {
      electron.ipcMain.handle(customActionsChannels.getCards, () => getCards(storageManager));
      electron.ipcMain.on(customActionsChannels.setCards, (_, cards) => setCards(storageManager, cards));
    });
    utils.getAppManager().then((appManager) => {
      startExecute(appManager);
    });
  });
}
exports.initialExtension = initialExtension;
