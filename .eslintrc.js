module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false, // ✅ Prevents the Babel config file error
    babelOptions: {
      presets: ["babel-preset-gatsby"],
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb",
    "prettier",
  ],
  plugins: ["react", "jsx-a11y", "import"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: [
    "public/~partytown/*.js", // ✅ Ignore Partytown debug files
    "public/~partytown/debug/*.js", // ✅ Ignore Partytown files
  ],

  rules: {
    "no-console": "warn",
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "import/no-unused-modules": ["warn", { unusedExports: true }],
    "react/prop-types": "off",
    "jsx-a11y/no-onchange": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
