# 🎙️ FOSS Podcast Editor

**A free and open-source desktop app for podcasters.**  
Drag-and-drop multi-track editing, one-click AI-powered audio enhancement, and cross-platform builds — without proprietary or paid APIs.

---

## ✨ Features

- 🎧 **Drag & Drop** — Import WAV, MP3, FLAC, and more.
- 🖱️ **Simple Editing** — Trim, cut, and split tracks (basic editing scaffold in place).
- 🎛️ **One-Click Enhance** — Apply AI speech enhancement:
  - Noise reduction (RNNoise / DeepFilterNet)
  - Equalization, compression, and normalization
  - De-reverberation and clarity boosts
- 🔊 **Preview & Playback** — Play tracks inside the editor.
- 💾 **Export** — Save to WAV/MP3 (FFmpeg powered).
- 🪟 **Cross-Platform** — Windows, macOS, and Linux support.

---

## 🏗️ Project Status

> This project is in early **scaffold stage**.  
> The Electron + React UI, drag-and-drop import, and enhancement stub are already working.  
> See [TODO.md](./TODO.md) for the roadmap.

✅ Completed so far:

- Electron app scaffold
- Drag-and-drop file import
- File list display
- One-click enhance button (stub: FFmpeg copy)
- Python stub ready for RNNoise/DeepFilterNet integration

🚧 In progress:

- Audio preview and trimming
- Real enhancement models (RNNoise, DeepFilterNet, Demucs)
- Export options and multi-track editing

---

## 📂 Folder Structure

```plaintext
foss-podcast-editor/
├─ package.json
├─ electron.main.js
├─ preload.js
├─ src/
│  ├─ renderer/           # React frontend
│  │  ├─ index.html
│  │  ├─ main.jsx
│  │  ├─ App.jsx
│  │  ├─ styles.css
│  │  └─ components/
│  │     └─ DropZone.jsx
│  └─ enhancer/           # Audio enhancement workers
│     ├─ enhance_stub.js
│     └─ python/
│        └─ enhance.py
├─ test/                  # Jest tests
│  └─ enhancer.test.js
└─ build/                 # Packaging scripts
```

---

## ⚙️ Tech Stack

- **Electron** — Desktop shell (cross-platform)
- **React + Vite** — Frontend framework
- **FFmpeg** — File conversion and export
- **AI Enhancement** (planned):

  - [RNNoise](https://github.com/xiph/rnnoise) (BSD-3)
  - [DeepFilterNet](https://github.com/Rikorose/DeepFilterNet) (MIT/Apache-2.0)
  - [Demucs](https://github.com/facebookresearch/demucs) (MIT)

- **Tests** — Jest
- **License** — MIT

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Python 3.8+
- [FFmpeg](https://ffmpeg.org/download.html) installed and available in `PATH`

### Install & Run

```bash
git clone https://github.com/yourusername/foss-podcast-editor.git
cd foss-podcast-editor
npm install
npm start
```

### Enhance Audio (Stub)

Drag in a file and press **Enhance**.
The stub script will copy/convert audio with FFmpeg.
Later versions will run RNNoise/DeepFilterNet for real enhancement.

---

## 🧪 Testing

Run Jest tests:

```bash
npm test
```

---

## 📦 Build & Packaging

_TODO: Add cross-platform build instructions (see [TODO.md](./TODO.md))._
Will use **Electron Builder** or equivalent to package for:

- Windows (`.exe`)
- macOS (`.dmg`)
- Linux (`.AppImage` / `.deb`)

---

## 🛣️ Roadmap

- [ ] Add audio playback and waveform preview
- [ ] Implement trimming/cutting via FFmpeg
- [ ] Integrate RNNoise (noise suppression)
- [ ] Add DeepFilterNet and Demucs as selectable models
- [ ] Export options and batch processing
- [ ] Cross-platform build pipelines
- [ ] Plugin system for enhancements

See [TODO.md](./TODO.md) for detailed tracking.

---

## 🤝 Contributing

Contributions are welcome!
Please fork the repo and submit a pull request.

1. Check open issues or TODO list
2. Create a feature branch
3. Add tests for your changes
4. Submit a PR

---

## 📜 License

This project is licensed under the **MIT License**.
See [LICENSE](./LICENSE) for details.

---

## 🙏 Acknowledgments

- [FFmpeg](https://ffmpeg.org)
- [RNNoise](https://github.com/xiph/rnnoise)
- [DeepFilterNet](https://github.com/Rikorose/DeepFilterNet)
- [Demucs](https://github.com/facebookresearch/demucs)
- The open-source audio community ❤️
