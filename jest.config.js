module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.css": require.resolve("./src/test/style-mock")
  }
};
