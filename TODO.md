# TODO — FOSS Podcast Editor

A structured checklist of all work to build the open-source podcast editor.  
Use checkboxes `[x]` for complete, `[ ]` for pending.

---

## 1. Project Setup

- [x] Initialize repository and folder structure
- [x] Create `package.json` with scripts and dependencies
- [x] Decide open-source license (MIT chosen)
- [x] Define high-level architecture and stack in plan
- [x] Write project plan (this TODO.md)

---

## 2. Electron + UI Scaffold

- [x] Setup Electron main process (`electron.main.js`)
- [x] Setup `preload.js` for IPC bridge
- [x] Add basic `index.html` and `main.jsx`
- [x] Create `App.jsx` scaffold
- [x] Add styles (`styles.css`)
- [x] Create `DropZone.jsx` for drag-and-drop + open dialog
- [x] Show file list in UI
- [ ] Add basic audio preview and playback (HTML5 audio element)
- [ ] Add trimming/cutting UI controls (integrate with FFmpeg)

---

## 3. Enhancement Workflow

- [x] Define IPC channel for "enhance-audio"
- [x] Create Python stub `enhance.py` (currently pass-through with FFmpeg)
- [x] Create Node helper `enhance_stub.js`
- [x] Connect UI "Enhance" button to stub
- [x] Display logs in UI
- [ ] Replace stub with real RNNoise integration
- [ ] Add DeepFilterNet option (Python integration)
- [ ] Add Demucs option (Python integration)
- [ ] Add ability to choose enhancement model in UI

---

## 4. File Handling

- [x] Drag-and-drop import for multiple formats
- [x] Open file dialog import
- [x] Show track list in UI
- [x] Generate output filenames automatically (`_enhanced`)
- [ ] Allow user to set export location via file dialog
- [ ] Support exporting multiple tracks at once (batch)
- [ ] Allow choosing export format (WAV/MP3/FLAC)

---

## 5. Testing & QA

- [x] Setup Jest for testing
- [x] Write simple test for enhance stub
- [ ] Write integration test for drag-and-drop
- [ ] Write integration test for "Enhance" IPC call
- [ ] Add CI workflow (GitHub Actions or similar)

---

## 6. Build & Packaging

- [ ] Add build instructions for Windows
- [ ] Add build instructions for macOS
- [ ] Add build instructions for Linux
- [ ] Create packaging scripts (Electron builder or Tauri equivalent)
- [ ] Test builds across platforms

---

## 7. Future Features (for later milestones)

- [ ] Plugin system for enhancements
- [ ] Batch processing of multiple files
- [ ] Mobile builds (Tauri/Rust + WASM models)
- [ ] Add GPU acceleration / ONNX runtime for heavy models
- [ ] Improve UI with waveform visualization
- [ ] Multi-track editing timeline
- [ ] Undo/redo editing
- [ ] Cloudless autosave project files

---
