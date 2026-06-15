---
trigger: always_on
---

# LynxHub Custom Actions Extension Rules & Architecture

This document provides a comprehensive overview of the **Custom Actions Extension** (`custom_actions`) for LynxHub. It explains what the extension does, its internal architecture, how its main and renderer processes communicate, and rules/guidelines for future development.

---

## 📖 Extension Overview

The **Custom Actions** extension is designed to allow users to create, configure, and execute custom interactive "Action Cards" within LynxHub.

- **Card Types**: Executable (`executable`), Browser (`browser`), Terminal (`terminal`), or hybrid (`terminal_browser`).
- **Chainable Actions**: Execution of shell scripts, executables, opening directories/files, and running custom terminal commands in sequence.
- **Dynamic Url Catching**: Ability to detect output in a spawned terminal (e.g. looking for a server URL or specific log) and open a corresponding Browser Tab immediately or after a timeout.
- **Integration**: Integrates seamlessly with LynxHub category pages (Pinned, Recently Used, All, Image, Text, Audio) and the Tools area.

---

## 📁 Directory Structure & Key Files

```
extension/
├── .agents/
│   └── rules.md                  # This file
├── electron.vite.config.ts        # Module Federation & packaging config
├── package.json                   # Metadata & versioning (runs as "custom_actions")
├── resources/                     # Image assets and screenshots
└── src/
    ├── cross/                     # Shared types and constants
    │   ├── CrossTypes.ts          # Type definitions for cards, actions, and categories
    │   └── CrossUtils.ts          # IPC channel names and storage keys
    ├── main/                      # Main process (Node/Electron context)
    │   ├── Methods/
    │   │   ├── CardsManager.ts    # Reads/writes card configs using host StorageManager
    │   │   ├── ExeManager.ts      # Spawns & manages processes via Node's `child_process`
    │   │   └── StartExecute.ts    # Handlers for start/stop process IPC channels
    │   └── lynxExtension.ts       # Entrypoint registering main IPC hooks & Managers
    └── renderer/                  # Renderer process (React / UI context)
        ├── Components/
        │   ├── ActionCard/
        │   │   ├── ActionCard.tsx # Visual representation and click-to-execute flow
        │   │   ├── ActionCard_TerminalUtils.ts
        │   │   └── ActionCard_Utils.tsx
        │   ├── Modal/             # Modals & forms for creating/editing cards
        │   ├── CardIcons.tsx      # Map of selectable icons for action cards
        │   ├── CardsContainer.tsx # Filtered lists of cards for different pages
        │   ├── CustomHooks.tsx    # Hooks to detect matched lines and trigger browser open
        │   └── ToolsPage.tsx      # Tools page registration component
        ├── Extension.tsx          # Renderer Entrypoint integrating Redux & Custom UI hooks
        ├── index.css              # Custom styling definitions
        ├── index.html             # Main HTML context for Dev Server / bundling
        └── reducer.ts             # Redux Slice managing application state
```

---

## ⚡ Architecture & IPC Communication Flow

The extension relies on LynxHub's plugin/extension runtime APIs:

- **Main Process API (`ExtensionMainApi`)**: Registered in `src/main/lynxExtension.ts`. Provides access to app managers and storage.
- **Renderer Process API (`ExtensionRendererApi`)**: Registered in `src/renderer/Extension.tsx`. Connects the extension Redux reducer, registers UI categories/modals, and registers global hooks.

### IPC Channels

All custom action IPC communication is prefixed to prevent namespace collision:

- **`customActions_getCards`**: Invoked by the renderer to load the saved JSON cards list from LynxHub's storage.
- **`customActions_setCards`**: Fired by the renderer to save the updated JSON cards list to storage.
- **`customActions_startExe`**: Fired to trigger spawning of a background executable process (`ExeManager`) from main.

---

## ⚙️ Main Process Details

- **Process Lifetime**:
  - Maintained in a process map: `processMap = new Map<string, ExeManager>()`.
  - Stiff control over duplicates: if a process is triggered with an existing ID, the old one is terminated.
- **`ExeManager`**:
  - Spawns using Node's `child_process.spawn`.
  - macOS platform checks: uses `open -W` for `.app` packages.
  - Channels used to stream terminal feedback back to LynxHub UI:
    - `ptyChannels.onData`: sends stdout/stderr chunk by chunk.
    - `ptyChannels.onTitle`: updates terminal window title.
    - `ptyChannels.onExit`: cleans up process state when child process exits.
  - Process tree killing: uses the `tree-kill` library to cleanly close processes and all their child processes.

---

## 🎨 Renderer Process & Redux Details

- **Redux Slice (`customActions`)**:
  - Manages the visual modal states (`modals`).
  - Manages the card configuration editor (`editingCard`).
  - Tracks line-watching browser flows via `urlCatchingSession`.
- **Action Execution Flow**:
  1. User clicks an action card.
  2. The action array (`card.actions`) is processed sequentially.
  3. Action types:
     - `script` / `command`: calls `session:createTerminal` (LynxHub terminal tab) and feeds input using `session:writeTerminal`.
     - `exe`: runs standard executable through the main process via `customActions_startExe`.
     - `open`: opens local directories or files via LynxHub APIs.
  4. If configured with a browser type or URL catching, the renderer monitors line output (via `CustomHook`) or sets a timer to spawn/switch to a browser tab with `tabs:createTab`.

---

## ⚠️ Development Rules & Guidelines

1. **Keep Imports Specific**:
   - Do NOT use wildcard imports (`import * as ...`). Import explicit submodules to optimize compiler builds.
   - Use path aliases: `@lynx_common`, `@lynx_main`, and `@lynx_extension` (mapped in `electron.vite.config.ts`).
2. **Main-Process Sandbox Constraints**:
   - Any main process files (`src/main/`) must run in a pure Node context. Avoid referencing any React or DOM API components.
   - External dependencies inside `src/main` must be declared in `electron.vite.config.ts`'s `externalizeDeps` if they should not be bundled, or bundled explicitly (like `tree-kill` which is excluded from externalization).
3. **Storage Handling**:
   - Always serialize and save card configurations using the registered storage API key `customActions`.
   - Before saving custom URLs, pass them through `formatWebAddress` utility to ensure protocols (`http://` / `https://`) are formatted correctly.
4. **IPC Cleanup**:
   - Ensure you clean up IPC listeners and process trees (`treeKill`) when the application closes or when process execution fails, preventing orphan process generation.
