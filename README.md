# static server

一个基于 nodejs、express 的静态文件服务器。

- build.sh: 编译打包`./dist ./ecosystem.config.js ./package.json`
- ecosystem.config.js: pm2 的配置文件
- package.json: 依赖包

## 调试

```sh
yarn dev
```

## 编译

```sh
./build.sh
```

## 部署

拷贝编译打包产物，解压到 server 文件夹，新建 dist 文件夹放静态页面文件。

进入 server 文件夹，安装依赖，修改端口，pm2 守护启动。

```sh
yarn
pm2 start ecosystem.config.js
```
