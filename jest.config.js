module.exports = {
  moduleFileExtensions: ["jsx", "js", "tsx", "ts", "json", "node", "mjs"],
  testEnvironment: "jest-environment-jsdom-global",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  rootDir: __dirname,
  testMatch: ["<rootDir>/src/**/*.spec.(ts|tsx|js|jsx)"],
  transform: {
    "^.+\\.m?jsx?$": "babel-jest",
  },

  transformIgnorePatterns: ["/node_modules"],
  verbose: true,
  collectCoverage: false,
};
