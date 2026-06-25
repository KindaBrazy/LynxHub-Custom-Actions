Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let electron = require("electron");
let fs_promises = require("fs/promises");
fs_promises = __toESM(fs_promises, 1);
let node_child_process = require("node:child_process");
let node_fs = require("node:fs");
node_fs = __toESM(node_fs, 1);
let node_os = require("node:os");
let node_path = require("node:path");
node_path = __toESM(node_path, 1);
//#region extension/src/cross/CrossUtils.ts
var customActionsChannels = {
	setCards: "customActions_setCards",
	getCards: "customActions_getCards",
	startExe: "customActions_startExe",
	exportToFile: "customActions_exportToFile",
	importFromFile: "customActions_importFromFile"
};
var storageKeys = { customActions: "customActions" };
//#endregion
//#region extension/src/main/Methods/CardsManager.ts
function getCards(storageManager) {
	return storageManager.getCustomData(storageKeys.customActions) || [];
}
function setCards(storageManager, cards) {
	storageManager.setCustomData(storageKeys.customActions, cards);
}
async function exportToFile(cards) {
	const { canceled, filePath } = await electron.dialog.showSaveDialog({
		title: "Export Custom Actions",
		defaultPath: "custom_actions.json",
		filters: [{
			name: "JSON/Text Files",
			extensions: ["json", "txt"]
		}]
	});
	if (canceled || !filePath) return false;
	await fs_promises.writeFile(filePath, JSON.stringify(cards, null, 2), "utf-8");
	return true;
}
async function importFromFile() {
	const { canceled, filePaths } = await electron.dialog.showOpenDialog({
		title: "Import Custom Actions",
		properties: ["openFile"],
		filters: [{
			name: "JSON/Text Files",
			extensions: ["json", "txt"]
		}]
	});
	if (canceled || filePaths.length === 0) return null;
	const content = await fs_promises.readFile(filePaths[0], "utf-8");
	try {
		const parsed = JSON.parse(content);
		if (Array.isArray(parsed)) return parsed;
		throw new Error("File content is not an array");
	} catch (e) {
		console.error("Failed to parse custom actions file:", e);
		throw new Error("Invalid file format. Expected a JSON array of custom cards.", { cause: e });
	}
}
//#endregion
//#region src/common/consts/ipcChannels/pty.ts
/**
* IPC channels for PTY (Pseudo-Terminal) operations.
* Handles terminal process management, input/output, resizing, and custom commands.
*/
var ptyChannels = {
	process: "pty-process",
	customProcess: "pty-custom-process",
	emptyProcess: "pty-custom-process",
	stopProcess: "pty-stop-process",
	customCommands: "pty-custom-commands",
	write: "pty-write",
	clear: "pty-clear",
	resize: "pty-resize",
	onData: "pty-on-data",
	onTitle: "pty-on-title",
	onExit: "pty-on-exit-code",
	onProgress: "pty-on-progress"
};
//#endregion
//#region extension/src/main/Methods/ExeManager.ts
var import_tree_kill = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var childProcess = require("child_process");
	var spawn = childProcess.spawn;
	var exec = childProcess.exec;
	module.exports = function(pid, signal, callback) {
		if (typeof signal === "function" && callback === void 0) {
			callback = signal;
			signal = void 0;
		}
		pid = parseInt(pid);
		if (Number.isNaN(pid)) if (callback) return callback(/* @__PURE__ */ new Error("pid must be a number"));
		else throw new Error("pid must be a number");
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
			default:
				buildProcessTree(pid, tree, pidsToProcess, function(parentPid) {
					return spawn("ps", [
						"-o",
						"pid",
						"--no-headers",
						"--ppid",
						parentPid
					]);
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
			if (callback) return callback(err);
			else throw err;
		}
		if (callback) return callback();
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
				if (Object.keys(pidsToProcess).length == 0) cb();
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
})))(), 1);
/** Manages child processes for executables, using Node's built-in child_process module. */
var ExeManager = class {
	isRunning;
	process;
	id;
	constructor(id, exePath, appManager, onExitCallback, env) {
		this.id = id;
		let validatedExe = void 0;
		if (exePath && exePath.length > 0) try {
			node_fs.default.accessSync(exePath, node_fs.default.constants.R_OK);
			validatedExe = node_path.default.resolve(exePath);
		} catch (error) {
			console.warn(`Exe File ${exePath} is not accessible.`);
		}
		else console.warn(`Exe path is empty.`);
		if (!validatedExe) {
			appManager?.getWebContent()?.send(ptyChannels.onExit, this.id);
			this.isRunning = false;
			return;
		}
		const currentPlatform = (0, node_os.platform)();
		let commandToRun;
		let spawnArgs = [];
		if (currentPlatform === "darwin" && validatedExe.endsWith(".app")) {
			commandToRun = "open";
			spawnArgs = ["-W", validatedExe];
		} else {
			commandToRun = validatedExe;
			if (commandToRun.includes(" ")) commandToRun = `"${commandToRun}"`;
		}
		this.process = (0, node_child_process.spawn)(commandToRun, spawnArgs, {
			env: {
				...process.env,
				...env
			},
			shell: spawnArgs.length === 0,
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
			appManager?.getWebContent()?.send(ptyChannels.onData, this.id, `\r\nError: Could not start process. ${err.message}\r\n`);
			appManager?.getWebContent()?.send(ptyChannels.onExit, this.id);
			this.isRunning = false;
			if (onExitCallback) onExitCallback(this.id);
		});
		this.process.on("exit", () => {
			appManager?.getWebContent()?.send(ptyChannels.onExit, this.id);
			this.isRunning = false;
			if (onExitCallback) onExitCallback(this.id);
		});
	}
	async stopAsync() {
		return new Promise((resolve) => {
			if (this.isRunning && this.process) {
				this.process.once("exit", () => {
					this.process = void 0;
					resolve();
				});
				if (this.process.pid) (0, import_tree_kill.default)(this.process.pid);
				else this.process.kill();
				this.isRunning = false;
			} else resolve();
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
			if (this.process.pid) (0, import_tree_kill.default)(this.process.pid);
			else this.process.kill();
			this.isRunning = false;
		}
	}
	/**
	* Clears the terminal by sending the appropriate command ('cls' or 'clear') to the process's input.
	*/
	clear() {
		if (this.isRunning && this.process?.stdin) {
			const command = (0, node_os.platform)() === "win32" ? "cls" : "clear";
			const lineEnding = (0, node_os.platform)() === "win32" ? "\r\n" : "\n";
			this.write(`${command}${lineEnding}`);
		}
	}
	/**
	* Writes data to the child process's standard input.
	* @param data - The data to write, either a string or an array of strings.
	*/
	write(data) {
		if (!this.isRunning || !this.process?.stdin) return;
		if (Array.isArray(data)) data.forEach((text) => this.process?.stdin?.write(text));
		else this.process?.stdin?.write(data);
	}
};
//#endregion
//#region extension/src/main/Methods/StartExecute.ts
var processMap = /* @__PURE__ */ new Map();
function startExecute(appManager) {
	electron.ipcMain.on(customActionsChannels.startExe, (_, id, exePath, env) => {
		if (processMap.has(id)) {
			processMap.get(id)?.stop();
			processMap.delete(id);
		}
		const manager = new ExeManager(id, exePath, appManager, (exitId) => {
			processMap.delete(exitId);
		}, env);
		processMap.set(id, manager);
	});
	electron.ipcMain.on(ptyChannels.stopProcess, (_, id) => {
		const manager = processMap.get(id);
		if (manager) {
			manager.stop();
			processMap.delete(id);
		}
	});
}
//#endregion
//#region extension/src/main/lynxExtension.ts
async function initialExtension(lynxApi, utils) {
	lynxApi.listenForChannels(() => {
		utils.getStorageManager().then((storageManager) => {
			electron.ipcMain.handle(customActionsChannels.getCards, () => getCards(storageManager));
			electron.ipcMain.on(customActionsChannels.setCards, (_, cards) => setCards(storageManager, cards));
			electron.ipcMain.handle(customActionsChannels.exportToFile, (_, cards) => exportToFile(cards));
			electron.ipcMain.handle(customActionsChannels.importFromFile, () => importFromFile());
		});
		utils.getAppManager().then((appManager) => {
			startExecute(appManager);
		});
	});
}
//#endregion
exports.initialExtension = initialExtension;
