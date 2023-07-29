module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "import/export": "off",
    "no-underscore-dangle": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-unresolved": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "react/button-has-type": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/jsx-filename-extension": [2, { extensions: [".ts", ".tsx"] }],
  },
};
