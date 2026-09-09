(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		e.SENTRY_RELEASE = { id: "7e66a4581cd13b10744cfc717fce9cd99218f74a" };
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e789135e-ddef-4879-948f-f35011be0fd3", e._sentryDebugIdIdentifier = "sentry-dbid-e789135e-ddef-4879-948f-f35011be0fd3");
	} catch (e) {}
})();
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
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
//#region extension/src/common/consts/channels.ts
var customActionsChannels = {
	setCards: "customActions_setCards",
	getCards: "customActions_getCards",
	startExe: "customActions_startExe",
	exportToFile: "customActions_exportToFile",
	importFromFile: "customActions_importFromFile",
	getSystemPaths: "customActions_getSystemPaths"
};
var storageKeys = { customActions: "customActions" };
//#endregion
//#region extension/src/common/consts/sentry.ts
var SENTRY_DSN = "https://60228860c0bb09090539b7157812575c@o4509344104316928.ingest.us.sentry.io/4511891820380160";
//#endregion
//#region extension/src/common/utils/cardSanitizer.ts
var VALID_CARD_TYPES = [
	"executable",
	"browser",
	"terminal",
	"terminal_browser"
];
var VALID_URL_CONFIG_TYPES = [
	"custom",
	"findLine",
	"nothing",
	"htmlFile"
];
var VALID_ACTION_TYPES = [
	"script",
	"exe",
	"open",
	"command"
];
var VALID_CATEGORIES = [
	"pinned",
	"recentlyUsed",
	"all",
	"image",
	"text",
	"audio"
];
function generateUUID() {
	if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		const r = Math.random() * 16 | 0;
		return (c === "x" ? r : r & 3 | 8).toString(16);
	});
}
function sanitizeUrlConfig(raw) {
	const defaultConfig = {
		type: "nothing",
		openImmediately: true,
		timeout: 5
	};
	if (!raw || typeof raw !== "object" || Array.isArray(raw)) return defaultConfig;
	const obj = raw;
	const config = {
		type: VALID_URL_CONFIG_TYPES.includes(obj.type) ? obj.type : "nothing",
		openImmediately: typeof obj.openImmediately === "boolean" ? obj.openImmediately : true,
		timeout: typeof obj.timeout === "number" && Number.isFinite(obj.timeout) && obj.timeout >= 0 ? obj.timeout : 5
	};
	if (typeof obj.customUrl === "string" && obj.customUrl.trim()) config.customUrl = obj.customUrl.trim();
	if (typeof obj.findLine === "string" && obj.findLine.trim()) config.findLine = obj.findLine.trim();
	return config;
}
function sanitizeCategories(raw) {
	if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
	const obj = raw;
	const categories = {};
	for (const key of VALID_CATEGORIES) if (typeof obj[key] === "boolean") categories[key] = obj[key];
	return categories;
}
function sanitizeActions(raw) {
	if (!Array.isArray(raw)) return [];
	const actions = [];
	for (const item of raw) {
		if (!item || typeof item !== "object" || Array.isArray(item)) continue;
		const obj = item;
		const action = typeof obj.action === "string" ? obj.action : String(obj.action ?? "");
		const type = VALID_ACTION_TYPES.includes(obj.type) ? obj.type : "command";
		const id = typeof obj.id === "string" && obj.id.trim() ? obj.id.trim() : generateUUID();
		const disabled = typeof obj.disabled === "boolean" ? obj.disabled : void 0;
		const cwd = typeof obj.cwd === "string" && obj.cwd.trim() ? obj.cwd.trim() : void 0;
		actions.push({
			id,
			action,
			type,
			...cwd ? { cwd } : {},
			...disabled !== void 0 ? { disabled } : {}
		});
	}
	return actions;
}
function sanitizeEnv(raw) {
	if (!Array.isArray(raw)) return [];
	const env = [];
	for (const item of raw) {
		if (!item || typeof item !== "object" || Array.isArray(item)) continue;
		const obj = item;
		const key = typeof obj.key === "string" ? obj.key : String(obj.key ?? "");
		const value = typeof obj.value === "string" ? obj.value : String(obj.value ?? "");
		if (key.trim() || value.trim()) env.push({
			key,
			value
		});
	}
	return env;
}
function sanitizeCard(raw) {
	if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
	const obj = raw;
	return {
		id: typeof obj.id === "string" && obj.id.trim() ? obj.id.trim() : generateUUID(),
		title: typeof obj.title === "string" && obj.title.trim() ? obj.title.trim() : "Untitled Action",
		description: typeof obj.description === "string" ? obj.description : void 0,
		icon: typeof obj.icon === "string" && obj.icon.trim() ? obj.icon.trim() : "bot",
		cwd: typeof obj.cwd === "string" && obj.cwd.trim() ? obj.cwd.trim() : void 0,
		requireConfirmation: typeof obj.requireConfirmation === "boolean" ? obj.requireConfirmation : void 0,
		confirmationMessage: typeof obj.confirmationMessage === "string" && obj.confirmationMessage.trim() ? obj.confirmationMessage.trim() : void 0,
		cardType: VALID_CARD_TYPES.includes(obj.cardType) ? obj.cardType : "terminal_browser",
		urlConfig: sanitizeUrlConfig(obj.urlConfig),
		categories: sanitizeCategories(obj.categories),
		actions: sanitizeActions(obj.actions),
		env: sanitizeEnv(obj.env)
	};
}
function sanitizeCards(raw) {
	if (!raw) return [];
	const items = Array.isArray(raw) ? raw : [raw];
	const sanitized = [];
	for (const item of items) {
		const card = sanitizeCard(item);
		if (card) sanitized.push(card);
	}
	return sanitized;
}
//#endregion
//#region extension/src/main/services/cardsStorage.ts
function getCards(storageManager) {
	return sanitizeCards(storageManager.getCustomData(storageKeys.customActions));
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
		const sanitized = sanitizeCards(JSON.parse(content));
		if (sanitized.length === 0) throw new Error("No valid custom action cards found in file.");
		return sanitized;
	} catch (e) {
		console.error("Failed to parse custom actions file:", e);
		throw new Error(e.message || "Invalid file format. Expected a JSON array of custom cards.", { cause: e });
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
//#region extension/src/main/services/processManager.ts
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
		if (Number.isNaN(pid)) {
			if (callback) return callback(/* @__PURE__ */ new Error("pid must be a number"));
			else throw new Error("pid must be a number");
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
			default: buildProcessTree(pid, tree, pidsToProcess, function(parentPid) {
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
/**
* Manages child processes for executables, handling output streaming to PTY channels
* and clean process tree termination.
*/
var ProcessManager = class {
	isRunning;
	process;
	id;
	constructor(id, exePath, appManager, onExitCallback, env, cwd) {
		this.id = id;
		let validatedExe = void 0;
		if (exePath && exePath.length > 0) try {
			node_fs.default.accessSync(exePath, node_fs.default.constants.R_OK);
			validatedExe = node_path.default.resolve(exePath);
		} catch (error) {
			console.warn(`Exe file ${exePath} is not accessible.`);
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
		let workingDir = node_path.default.dirname(validatedExe);
		if (cwd && cwd.trim().length > 0) try {
			if (node_fs.default.existsSync(cwd.trim())) workingDir = node_path.default.resolve(cwd.trim());
		} catch (err) {
			console.warn(`Provided cwd "${cwd}" is invalid, defaulting to exe directory:`, err);
		}
		this.process = (0, node_child_process.spawn)(commandToRun, spawnArgs, {
			env: {
				...process.env,
				...env
			},
			shell: spawnArgs.length === 0,
			cwd: workingDir
		});
		this.isRunning = true;
		this.process.stdout?.on("data", (data) => {
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
	*/
	write(data) {
		if (!this.isRunning || !this.process?.stdin) return;
		if (Array.isArray(data)) data.forEach((text) => this.process?.stdin?.write(text));
		else this.process?.stdin?.write(data);
	}
};
//#endregion
//#region extension/src/main/services/executionService.ts
var processMap = /* @__PURE__ */ new Map();
function registerExecutionHandlers(appManager) {
	electron.ipcMain.on(customActionsChannels.startExe, (_, id, exePath, env, cwd) => {
		if (processMap.has(id)) {
			processMap.get(id)?.stop();
			processMap.delete(id);
		}
		const manager = new ProcessManager(id, exePath, appManager, (exitId) => {
			processMap.delete(exitId);
		}, env, cwd);
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
	lynxApi.initNodeSentry(SENTRY_DSN);
	lynxApi.listenForChannels(() => {
		utils.getStorageManager().then((storageManager) => {
			electron.ipcMain.handle(customActionsChannels.getCards, () => getCards(storageManager));
			electron.ipcMain.on(customActionsChannels.setCards, (_, cards) => setCards(storageManager, cards));
			electron.ipcMain.handle(customActionsChannels.exportToFile, (_, cards) => exportToFile(cards));
			electron.ipcMain.handle(customActionsChannels.importFromFile, () => importFromFile());
			electron.ipcMain.handle(customActionsChannels.getSystemPaths, async () => {
				const appDataDir = storageManager.getData("app").appDataDir || electron.app.getPath("userData");
				return {
					home: electron.app.getPath("home"),
					desktop: electron.app.getPath("desktop"),
					downloads: electron.app.getPath("downloads"),
					documents: electron.app.getPath("documents"),
					workspace: appDataDir,
					appData: electron.app.getPath("userData")
				};
			});
		});
		utils.getAppManager().then((appManager) => {
			registerExecutionHandlers(appManager);
		});
	});
}
//#endregion
exports.initialExtension = initialExtension;

//# sourceMappingURL=mainEntry.cjs.map