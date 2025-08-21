const { spawn } = require("child_process");
const path = require("path");

function runEnhance(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const py = path.join(__dirname, "python", "enhance.py");
    const proc = spawn("python3", [
      py,
      "--input",
      inputPath,
      "--output",
      outputPath,
    ]);

    proc.stdout.on("data", (d) => process.stdout.write(d.toString()));
    proc.stderr.on("data", (d) => process.stderr.write(d.toString()));

    proc.on("close", (code) => {
      if (code === 0) resolve(outputPath);
      else reject(new Error("Enhancer failed: " + code));
    });
  });
}

module.exports = { runEnhance };
