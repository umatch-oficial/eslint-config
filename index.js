module.exports = {
  env: { es6: true, node: true, jest: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  extends: ["plugin:import/recommended", "prettier"],
  plugins: ["@typescript-eslint"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {},
      typescript: {
        alwaysTryTypes: true,
        project: "*tsconfig.json",
      },
      exports: {
        // resolves "exports" field for the import plugin
        // https://github.com/cyco130/eslint-import-resolver-exports
      },
    },
  },
  ignorePatterns: ["build", "dist", "lib", "node_modules", "*.lock"],
  rules: {
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    complexity: "error",
    eqeqeq: ["error", "smart"],
    "import/order": [
      "warn",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        groups: [
          ["builtin", "external", "unknown"],
          ["internal", "parent", "sibling", "index"],
          ["object", "type"],
        ],
        "newlines-between": "always",
      },
    ],
    "max-classes-per-file": ["error", 1],
    "new-cap": ["error", { capIsNew: false }],
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-nested-ternary": "off",
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: "*",
        next: ["const", "let", "var"],
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "prefer-const": "error",
    radix: "off",
    yoda: "off",
  },
};
