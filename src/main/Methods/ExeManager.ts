import {ChildProcess, spawn} from 'node:child_process';
import fs from 'node:fs';
import {platform} from 'node:os';
import path from 'node:path';

import treeKill from 'tree-kill';

import {ptyChannels} from '../../../../src/cross/IpcChannelAndTypes';
import ElectronAppManager from '../../../../src/main/Managements/ElectronAppManager';

/** Manages child processes for executables, using Node's built-in child_process module. */
export default class ExeManager {
  private isRunning: boolean;
  private process: ChildProcess | undefined;

  public id: string;

  constructor(id: string, exePath: string, appManager: ElectronAppManager) {
    this.id = id;

    let validatedExe: string | undefined = undefined;
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
    if (commandToRun.includes(' ')) {
      commandToRun = `"${commandToRun}"`;
    }

    // Spawn the process using Node's 'child_process' module.
    this.process = spawn(commandToRun, [], {
      env: process.env,
      shell: true,
      cwd: process.cwd(),
    });

    this.isRunning = true;

    // Listen for data on standard output.
    this.process.stdout?.on('data', (data: Buffer) => {
      console.log('on stdout data', this.id);
      appManager?.getWebContent()?.send(ptyChannels.onData, this.id, data.toString());
    });

    // Listen for data on standard error.
    this.process.stderr?.on('data', (data: Buffer) => {
      console.error(`[${this.id}] stderr:`, data.toString());
      // Send stderr to the same channel to display it in the terminal UI.
      appManager?.getWebContent()?.send(ptyChannels.onData, this.id, data.toString());
    });

    // Send the executable path as the title.
    appManager?.getWebContent()?.send(ptyChannels.onTitle, this.id, this.process?.spawnfile);

    // Handle process errors (e.g., command not found).
    this.process.on('error', err => {
      console.error(`Failed to start process for ${validatedExe}:`, err);
      appManager
        ?.getWebContent()
        ?.send(ptyChannels.onData, this.id, `\r\nError: Could not start process. ${err.message}\r\n`);
      appManager?.getWebContent()?.send(ptyChannels.onExit, this.id);
      this.isRunning = false;
    });

    // Listen for the process 'exit' event.
    this.process.on('exit', () => {
      appManager?.getWebContent()?.send(ptyChannels.onExit, this.id);
      this.isRunning = false;
    });
  }

  public async stopAsync(): Promise<void> {
    return new Promise<void>(resolve => {
      if (this.isRunning && this.process) {
        // Register a one-time listener for the 'exit' event to resolve the promise.
        this.process.once('exit', () => {
          this.process = undefined;
          resolve();
        });

        // Kill the process and its entire process tree.
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
  public stop(): void {
    if (this.isRunning && this.process) {
      // Register a one-time listener to clean up the process reference upon exit.
      this.process.once('exit', () => {
        this.process = undefined;
      });

      if (this.process.pid) {
        treeKill(this.process.pid);
      } else {
        this.process.kill();
      }
      this.isRunning = false;
    }
  }

  /**
   * Clears the terminal by sending the appropriate command ('cls' or 'clear') to the process's input.
   */
  public clear(): void {
    if (this.isRunning && this.process?.stdin) {
      const command = platform() === 'win32' ? 'cls' : 'clear';
      const lineEnding = platform() === 'win32' ? '\r\n' : '\n';
      this.write(`${command}${lineEnding}`);
    }
  }

  /**
   * Writes data to the child process's standard input.
   * @param data - The data to write, either a string or an array of strings.
   */
  public write(data: string | string[]): void {
    if (!this.isRunning || !this.process?.stdin) return;

    if (Array.isArray(data)) {
      data.forEach(text => this.process?.stdin?.write(text));
    } else {
      this.process?.stdin?.write(data);
    }
  }
}
