// eslint.config.js

import { FlatCompat } from "@eslint/eslintrc";
import babelParser from "@babel/eslint-parser";
import vuePlugin from "eslint-plugin-vue";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";

// Create an instance of FlatCompat
const compat = new FlatCompat();

export default [
  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        requireConfigFile: false,
      },
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    plugins: {
      vue: vuePlugin,
      "@typescript-eslint": typescriptPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      // Additional custom rules can be added here
    },
  },
  ...compat.config({
    extends: [
      "eslint:recommended",
      "plugin:vue/vue3-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
  }),
];
