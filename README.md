# ToyReact

课程为极客时间小课《winter 手把手带你实现 ToyReact框架》
实现react的最基础的功能
```
react = 组件化 + jsx + vdom
```

目标：
1. 通过React理解组件的基本概念
2. 学习vdom的实现思路
3. 编写突破自我的困难代码

## 第一节 React框架背后的核心机理-JSX的原理和关键实现

1. 创建项目，初始化项目，并配置webpack环境
2. webpack的loader的配置
3. babel是用来将高级js语法转换为普通语法
4. plugin来处理jsx语法，pragma配置来选择使用的语法，默认为React.createElement
5. 添加ToyReact的空结构，添加createElement的空方法，设置pramga为 ToyReact.createElement
6. jsx语法传入小写则会被作为字符串传入，大写开始则传入类型
7. 在jsx中添加子元素的效果
8. 在 ToyReact 的 createElement 中生成一个实Dom ，添加了attribute、children以及内部文本块的处理
9. 为了模式统一，添加一个 ``ToyReact.render`` 来进行渲染
10. 设计一个mountTo方法，使得 vdom 内部处理渲染
11. 【没太明白】MyComponent的render()，这个地方不能再是一个虚dom的行为，所以需要这个地方需要在createElement里面添加一个Wrapper统一操作，
12. Wrapper没有render，到了wrapper已经是一个真实的dom元素了
13. 将 MyComponent 中通用部分提取出来，在ToyReact中创建一个 Component 类
14. 解答：Wrapper 的目的是让我们的Component的行为和原生的DOM行为一致。
15. 自定义组件中添加子元素会报错，原因： ``Component`` 里面没有 ``appendChild`` 方法
16. ``{this.children}`` webpack 默认不会展开这个, 在ElementWrapper的方法里面，vchild是一个数组，需要递归处理
17. 自定义组件内部可以传js对象，最好是在child里面toString进行兜底操作，判断类型，对于不认识的类型，强制转换为String
18. 我们所有的组件都是为了处理：``setAttribute``,``mountTo``,``appendChild``三个方法

## 第二节 为toy-react添加生命周期

## 第三节 虚拟Dom的原理和关键实现