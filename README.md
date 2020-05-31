# Vue2.4中$attrs和$listeners的使用-学习笔记

A
  .child =B
B
  .child=C
例如：A:( B:(C:()))
现在我们来讨论一种情况，A组件与C组件怎么通信，我们有多少种解决方案？

1.我们使用VueX来进行数据管理，但是如果项目中多个组件共享状态比较少，项目比较小，并且全局状态比较少,那使用VueX来实现该功能，并没有发挥出VueX的威力。
2.使用B来做中转站，当A组件需要把信息传给C组件时，B接受A组件的信息，然后利用属性传给C组件，这是一种解决方案，但是如果嵌套的组件过多，会导致代码繁琐，代码维护比较困难;如果C中状态的改变需要传递给A, 使用事件系统一级级往上传递 。本来
3.自定义一个Vue 中央数据总线，这个情况适合碰到组件跨级传递消息，但是使用VueX感觉又有点浪费的项目中，但是缺点是，碰到多人合作时，代码的维护性较低，代码可读性低
在很多开发情况下，我们只是想把A组件的信息传递给C组件，如果使用props 绑定来进行信息的传递，虽然能够实现，但是代码并不美观。

在vue2.4中，为了解决该需求，引入了$attrs 和$listeners ， 新增了inheritAttrs 选项

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
