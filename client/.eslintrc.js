module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    indent: ["error", 2, { ignoredNodes: ["JSXElement"] }],
    "react/jsx-indent": ["error", 2],
    "linebreak-style": [0],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
