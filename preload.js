const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  openFileDialog: () => ipcRenderer.invoke("open-file-dialog"),
  enhanceAudio: (opts) => ipcRenderer.invoke("enhance-audio", opts),
  onEnhanceLog: (cb) => ipcRenderer.on("enhance-log", (e, msg) => cb(msg)),
});
