# Chemistry Game

一个教育化学游戏项目，帮助学生学习化学元素和化学式。

## 功能特性

- 化学元素学习
- 化学式规则讲解
- 化合价信息
- 互动游戏模式
- 错题记录功能

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Zustand

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览生产版本
pnpm run preview

# 代码检查
pnpm run lint
```

## 项目结构

```
src/
├── components/     # 组件
├── hooks/          # 自定义 Hooks
├── lib/            # 工具库
├── pages/          # 页面组件
├── store/          # 状态管理
├── utils/          # 工具函数
├── App.tsx         # 应用入口
├── main.tsx        # 主入口
└── index.css       # 全局样式
```

## 部署

项目已配置 GitHub Actions 自动部署到 GitHub Pages。

每次推送到 `main` 分支时，会自动执行构建和部署。

## License

MIT
