# electron-app

electron 搭建的框架，集成了 react+ts，用了 electron-builder 去发布.exe 文件。

> 使用文档

使用:

- 首先 npm i ,然后 npm run quickstart
- npm run quickstart : 一键启动
- npm run build: 将 ts 编译成 js 文件
- npm run start: 启动 electron 程序
- npm run dist: 发布成.exe 文件

目录结构:

* 入口文件(主流程): `src/main/index.ts`
* 配置文件: `config/*.js`
