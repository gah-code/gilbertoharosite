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
  "react/destructuring-assignment": [
    "warn",
    "always",
    { ignoreSinglePropUse: true },
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
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/no-unused-modules": "off", // ⬅️ Disable the rule completely
    "react/prop-types": "off",
    "jsx-a11y/no-onchange": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
