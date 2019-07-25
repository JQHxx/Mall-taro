# Mall-taro
#### 一、安装和使用
```
# 全局安装 @tarojs/cli
$ npm install -g @tarojs/cli
# 创建 taro 项目
$ taro init myApp
# 进入项目目录
$ cd myApp
# 运行到微信小程序，调试模式
$ npm run dev:weapp
# 发行到微信小程序
$ npm run build:weapp
```

#### 二、遇到的坑
- 1、Api 支持不足
由于Taro 对微信的一些新api 并没有支持到，比如使用云开发时需要用到 wx.cloud ，Taro 并没有支持，但亲测是可以直接使用 wx 变量，但是会被eslint 提醒，看着十分不悦，可以在 .eslintrc 文件中增加以下代码；
```
"globals": {
  "wx": true
},
```
- 2、不能使用 Array#map 之外的方法操作 JSX 数组
- 3、不允许在 JSX 参数(props)中传入 JSX 元素(taro/no-jsx-in-props)

#### 三、小程序转换成taro的一些问题
- https://juejin.im/post/5b329436e51d4558ca67396d
- 仿网易云：https://www.jianshu.com/p/18a05fb8f526