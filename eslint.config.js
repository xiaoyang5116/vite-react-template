import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'

// 使用 defineConfig 定义并导出 ESLint 配置数组
export default defineConfig([
  // 全局忽略 dist 目录（构建输出目录）
  globalIgnores(['dist']),
  {
    // 仅对 TypeScript 和 TSX 文件应用此配置
    files: ['**/*.{ts,tsx}'],
    // 扩展多个配置集
    extends: [
      // JavaScript 推荐规则
      js.configs.recommended,
      // TypeScript 推荐规则
      tseslint.configs.recommended,
      // React Hooks 推荐规则（检查依赖数组、调用顺序等）
      reactHooks.configs.flat.recommended,
      // Vite 的 React Refresh 规则（确保组件可热更新）
      reactRefresh.configs.vite,
      // Prettier 配置，禁用冲突的格式化规则
      eslintConfigPrettier,
    ],
    // 语言选项配置
    languageOptions: {
      // ECMAScript 版本设置为 2020
      ecmaVersion: 2020,
      // 全局变量设置为浏览器环境（如 window、document、console 等）
      globals: globals.browser,
    },
  },
])
