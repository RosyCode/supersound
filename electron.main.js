const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const { spawn } = require("child_process");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const indexHtml = `file://${path.join(__dirname, "src/renderer/index.html")}`;
  win.loadURL(indexHtml);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  // macOS keeps apps alive until user quits explicitly
  if (process.platform !== "darwin") app.quit();
});

// IPC: Run enhancement (spawns Python worker)
ipcMain.handle("enhance-audio", async (event, { inputPath, outputPath }) => {
  return new Promise((resolve, reject) => {
    // Path to our python script
    const py = path.join(__dirname, "src", "enhancer", "python", "enhance.py");

    // Spawn python (assumes python3 in PATH)
    const proc = spawn("python3", [
      py,
      "--input",
      inputPath,
      "--output",
      outputPath,
    ]);

    let stdout = "";
    let stderr = "";

    proc.stdout.on("data", (data) => {
      stdout += data.toString();
      // forward progress messages to renderer if needed
      event.sender.send("enhance-log", data.toString());
    });

    proc.stderr.on("data", (data) => {
      stderr += data.toString();
      event.sender.send("enhance-log", data.toString());
    });

    proc.on("close", (code) => {
      if (code === 0) {
        resolve({ success: true, outputPath });
      } else {
        reject({ success: false, code, stderr });
      }
    });
  });
});

// IPC: Open file dialog
ipcMain.handle("open-file-dialog", async () => {
  const res = await dialog.showOpenDialog({
    properties: ["openFile", "multiSelections"],
    filters: [
      { name: "Audio", extensions: ["wav", "mp3", "flac", "m4a", "aac"] },
    ],
  });
  return res;
});
