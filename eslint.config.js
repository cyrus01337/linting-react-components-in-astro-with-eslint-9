import { fixupPluginRules } from "@eslint/compat";
import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import typescriptESLint from "typescript-eslint";

export default typescriptESLint.config(
    eslint.configs.recommended,
    ...typescriptESLint.configs.recommended,
    eslintPluginPrettier,
    ...eslintPluginAstro.configs.recommended,
    {
        files: ["**/*.{astro,js,mjs,cjs,ts,jsx,tsx}"],
    },
    {
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
            },
        },
    },
    {
        plugins: {
            react: eslintPluginReact,
            "react-hooks": fixupPluginRules(eslintPluginReactHooks),
        },
    },
    {
        rules: {
            ...eslintPluginReactHooks.configs.recommended.rules,
        },
    },
);
