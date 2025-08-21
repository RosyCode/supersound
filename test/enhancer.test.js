const { runEnhance } = require("../src/enhancer/enhance_stub.js");

test("enhance stub exports function", () => {
  expect(typeof runEnhance).toBe("function");
});
