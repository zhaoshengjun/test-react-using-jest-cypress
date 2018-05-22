module.exports = {
  testEnvironment: "node",
  moduleNameMapper: {
    "\\.css": require.resolve("./src/test/style-mock")
  }
};
