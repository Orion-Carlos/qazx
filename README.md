## 安装环境
+ 从软件包中安装nodejs
+ 直接在项目文件夹中解压缩node-modules.rar
+ 如果无法链接外网环境，可以在相同的系统环境中将依赖包下载然后压缩node_modules文件夹并且拷贝值目标系统解压缩
+ 在项目路径执行命令`npm rubuild node-sass`

## 安装说明文档服务
+ 执行命令`npm install -g docsify`
+ 启动说明文档`docsify serve ./docs`

## 开发注意事项
+ vue template中不允许重复的html或者vue组件标签属性 例如`<img alt="" alt="" />`,这样会导致ie下无法加载项目。

## 安装环境备选方案(重新开始安装依赖)
+ 从nodejs官网下载lts合适版本的node环境包并默认安装：https://nodejs.org/zh-cn/download/
+ 安装python:https://www.python.org/download/releases/2.7/
+ 安装.net framework(win10不需要，win7需要):https://www.microsoft.com/zh-CN/download/details.aspx?id=40773
+ 安装 vc build tool :http://landinghub.visualstudio.com/visual-cpp-build-tools
+ 安装 vs 2015 自定义选择vc++公共工具 :http://dl.pconline.com.cn/download/361183.html
+ 指定vc工具链版本为2015:`npm config set msvs_version 2015`
+ 执行cnpm install

## 开发工具(vscode)

+ 官网下载最新版本的vscode:https://code.visualstudio.com/
+ 安装插件：Vetur,TSLint,REST Client
+ 打开vscode ->文件->打开文件夹  导入当前项目文件。

## 建立新项目

+ 覆盖`package-origin.json`内容至`package.json`中
+ 更改`package.json`name,author,describe节点

## 开发脚本

``` bash
# 安装依赖包（参考环境安装）
npm install

# 启动开发服务 http://localhost:8080
npm run serve

# 编译文件，（部署到测试/生产环境的服务器）
npm run build

# 代码风格检查
npm run lint

# 启动文档服务 或者将docs文件夹部署到任意服务器上
docsify serve ./docs
```

## 更新日志
+ 增加了babel-polyfill 项目可以在ie9+下运行

