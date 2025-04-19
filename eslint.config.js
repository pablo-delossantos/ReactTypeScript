import eslintPluginPrettier from "eslint-plugin-prettier"
import configPrettier from "eslint-config-prettier"

export default [
  {
    ignores: ["node_modules", "dist", "build"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },

    plugins: {
      prettier: eslintPluginPrettier,
    },

    rules: {
      quotes: ["off"], // ✅ Podés usar comillas simples o dobles
      semi: ["error", "never"], // ✅ No se permiten ;
      "prettier/prettier": [
        "error",
        {
          semi: false,
          trailingComma: "none", // ✅ No se agregan comas innecesarias
          endOfLine: "crlf", // ✅ Saltos de línea estilo Windows
        },
      ],
    },
  },
  configPrettier,
]
