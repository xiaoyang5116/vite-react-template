# Vite React Template

一个现代化的 React + TypeScript + Vite 项目模板，集成了 ESLint、Prettier 等开发工具。

## ✨ 特性

- ⚡️ **Vite 7** - 极速的开发体验和构建性能
- ⚛️ **React 19** - 最新版本的 React
- 🔷 **TypeScript** - 类型安全的开发体验
- 📦 **pnpm** - 快速、节省磁盘空间的包管理器
- 🔧 **ESLint** - 代码质量检查
- 💅 **Prettier** - 代码格式化
- 🎯 **React Hooks** - 遵循最佳实践

## 📦 技术栈

- React 19.2.0
- TypeScript 5.9.3
- Vite 7.2.4
- ESLint 9.39.1
- Prettier 3.8.1

## 🚀 快速开始

### 前置要求

- Node.js >= 18
- pnpm >= 8

### 安装依赖

```bash
pnpm install
```

### 开发

启动开发服务器：

```bash
pnpm dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看应用。

### 构建

构建生产版本：

```bash
pnpm build
```

构建产物将生成在 `dist` 目录下。

### 预览

预览生产构建：

```bash
pnpm preview
```

### 代码检查

运行 ESLint 检查：

```bash
pnpm lint
```

### 代码格式化

格式化代码：

```bash
pnpm format
```

## 📁 项目结构

```
vite-react-template/
├── public/              # 静态资源
├── src/                 # 源代码
│   ├── assets/         # 资源文件（图片、字体等）
│   ├── App.tsx         # 根组件
│   └── main.tsx        # 应用入口
├── eslint.config.js    # ESLint 配置
├── index.html          # HTML 模板
├── package.json        # 项目配置
├── tsconfig.json       # TypeScript 配置
├── vite.config.ts      # Vite 配置
└── README.md           # 项目说明
```

## 🛠️ 配置说明

### ESLint

项目使用 ESLint 9 配置，集成了以下插件：

- `@eslint/js` - JavaScript 基础规则
- `typescript-eslint` - TypeScript 支持
- `eslint-plugin-react` - React 规则
- `eslint-plugin-react-hooks` - React Hooks 规则
- `eslint-plugin-react-refresh` - React Fast Refresh 支持
- `@tanstack/eslint-plugin-query` - TanStack Query 规则
- `eslint-config-prettier` - 禁用与 Prettier 冲突的规则

### TypeScript

项目包含多个 TypeScript 配置文件：

- `tsconfig.json` - 基础配置
- `tsconfig.app.json` - 应用代码配置
- `tsconfig.node.json` - Node.js 配置（用于 Vite 配置等）

## 📝 开发建议

1. 在 `src/` 目录下组织你的组件和代码
2. 使用 TypeScript 进行类型安全开发
3. 遵循 ESLint 和 Prettier 的规则
4. 在提交代码前运行 `pnpm lint` 和 `pnpm format`

## 📄 许可

MIT

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
