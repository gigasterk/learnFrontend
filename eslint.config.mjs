import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import {defineConfig} from "eslint/config";


export default defineConfig([
    js.configs.recommended, // базовые правила для JS
    ...tseslint.configs.recommended, // TS правила
    pluginReact.configs.flat.recommended, // React правила
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module"
            }
        },
        rules: {
            "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
            "react/jsx-indent": [2, 4],
            "import/no-unresolved": "off",
            "import/prefer-default-export": "off",
            "react/react-in-jsx-scope": "off",
        }
    }
]);
