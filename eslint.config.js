import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import pluginQuery from "@tanstack/eslint-plugin-query";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier";

// 使用 defineConfig 定义并导出 ESLint 配置数组
export default defineConfig([
  // 全局忽略 dist 目录（构建输出目录）
  globalIgnores(["dist"]),
  {
    // 仅对 TypeScript 和 TSX 文件应用此配置
    files: ["**/*.{ts,tsx}"],
    // 扩展多个配置集
    extends: [
      // JavaScript 推荐规则
      js.configs.recommended,
      // TypeScript 推荐规则
      tseslint.configs.recommended,
      // React 推荐规则
      reactPlugin.configs.flat.recommended,
      // React JSX 运行时规则（自动导入 React）
      reactPlugin.configs.flat["jsx-runtime"],
      // React Hooks 推荐规则（检查依赖数组、调用顺序等）
      reactHooks.configs.flat.recommended,
      // Vite 的 React Refresh 规则（确保组件可热更新）
      reactRefresh.configs.vite,
      // TanStack Query 推荐规则
      ...pluginQuery.configs["flat/recommended"],
      // Prettier 配置，禁用冲突的格式化规则
      prettier,
    ],
    // 语言选项配置
    languageOptions: {
      // ECMAScript 版本设置为 2020
      ecmaVersion: 2020,
      // 全局变量设置为浏览器环境（如 window、document、console 等）
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        // 自动检测 React 版本
        version: "detect",
      },
    },
    rules: {
      // 关闭 React 中禁止使用未转义实体的规则
      "react/no-unescaped-entities": "off",
    }
  },
]);
