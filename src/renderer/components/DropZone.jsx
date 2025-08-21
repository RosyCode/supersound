import React, { useRef } from "react";

/**
 * Simple dropzone. Also supports Open File Dialog via electron bridge.
 * onFiles receives an array of { name, path }
 */
export default function DropZone({ onFiles }) {
  const ref = useRef();

  const prevent = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDrop = (e) => {
    prevent(e);
    const dt = e.dataTransfer;
    const items = [];
    if (dt.files && dt.files.length) {
      for (let i = 0; i < dt.files.length; i++) {
        const f = dt.files[i];
        items.push({ name: f.name, path: f.path });
      }
      onFiles(items);
    }
  };

  const openDialog = async () => {
    const res = await window.electronAPI.openFileDialog();
    if (!res.canceled && res.filePaths.length) {
      const items = res.filePaths.map((p) => ({
        name: p.split("/").pop(),
        path: p,
      }));
      onFiles(items);
    }
  };

  return (
    <div
      ref={ref}
      onDragOver={prevent}
      onDragEnter={prevent}
      onDrop={onDrop}
      style={{
        border: "2px dashed #ccc",
        borderRadius: 8,
        padding: 20,
        background: "#fff",
      }}
    >
      <p>Drag audio files here (WAV/MP3/FLAC) or</p>
      <button onClick={openDialog}>Open Files</button>
    </div>
  );
}
