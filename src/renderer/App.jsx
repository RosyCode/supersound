import React, { useState } from "react";
import DropZone from "./components/DropZone.jsx";

export default function App() {
  const [tracks, setTracks] = useState([]);
  const [log, setLog] = useState("");

  // receive logs from main
  window.electronAPI.onEnhanceLog((msg) => {
    setLog((p) => p + msg + "\n");
  });

  const onFiles = (files) => {
    const items = files.map((f) => ({
      name: f.name,
      path: f.path || f, // if drag-n-drop yields path or file object
      id: Math.random().toString(36).slice(2),
    }));
    setTracks((t) => [...t, ...items]);
  };

  const enhanceTrack = async (track) => {
    const out = track.path.replace(/(\.\w+)$/, "_enhanced$1");
    try {
      setLog((p) => p + `Starting enhance: ${track.name}\n`);
      const res = await window.electronAPI.enhanceAudio({
        inputPath: track.path,
        outputPath: out,
      });
      setLog((p) => p + `Enhance complete: ${res.outputPath}\n`);
      alert("Enhance done: " + res.outputPath);
    } catch (err) {
      setLog((p) => p + `Enhance error: ${JSON.stringify(err)}\n`);
      alert("Enhance failed. See log.");
    }
  };

  return (
    <div className="app">
      <h1>FOSS Podcast Editor</h1>
      <DropZone onFiles={onFiles} />
      <div className="track-list">
        {tracks.map((t) => (
          <div key={t.id} className="track">
            <span>{t.name}</span>
            <button onClick={() => enhanceTrack(t)}>Enhance</button>
          </div>
        ))}
        {tracks.length === 0 && (
          <p>No tracks. Drag audio files here or use Open.</p>
        )}
      </div>
      <pre className="log">{log}</pre>
    </div>
  );
}
