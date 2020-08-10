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

P.S. 开课吧 - 《前段会客厅》，免费的。

1. 上节课的版本，仅仅一次渲染，不能更新。
2. 参考 [React的tutorial](https://reactjs.org/tutorial/tutorial.html),我们要用我们的代码实现react框架支撑tutorial的部分
3. [Tic Tac Toe](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)
4. 上节课没有涉及的部分：
    - ``props``
    - ``onClick``
    - ``setState``
    - ``reRender``
5. 添加Square和Board
6. 框架需要添加props的处理
7. Object.create(null), 创造出来的对象比较干净
8. 添加onClick事件
9. 处理onClick有两个思路：一个是在ToyReact.createElement的setAttribute中，addEventListener；第二个是在Component中setAttribute中处理，【实际是在Wrapper中的setAttribute】
10. 在Wrapper中的setAttribute中添加了对事件的处理。
11. 对className进行特殊处理，使css可以正常工作
12. 添加Square的constructor，onClick修改为setState
13. Component中实现setState，实现state的merge
14. range是html里面的一个范围，有了range可以按这个范围操作html元素。[相关资料](https://www.jianshu.com/p/ad2f818cc3b0)
15. 在update中deleteContents()会导致节点range的start/end变化，会产生一个奇怪的bug，目前暂时用一个placeholder来占位，暂时解决这个问题
16. 这一步核心思想：传一个range进来，range中的内容删除掉，vdom重新进行render，再由vdom重新mountTo(range)。range中的都是实dom。
17. 生命周期，参考react，willUpdate，didUpdate在update的开始和结束，willMount和didMount在mountTo的开始和结束


## 第三节 虚拟Dom的原理和关键实现

1. 将React版本的Tic Tak Toe代码main.js部分全部复制到项目中
2. 我们暂时不支持函数式的用法，需要将Square修改为Class声明的
3. ToyReact在insertChildren时，对null没做特殊处理，添加child不为空和undefined的判断
4. js中的坑，null也是object！
5. mergeState时，数组也做一下特殊处理。newState为array时，将oldState更新为array
6. 开始Vdom的改造
7. 在ElementWrapper中，不在构造的时候创建dom元素，而在渲染的时候创建dom元素
8. vdom比较，仅同层比较
9. 添加了sameNode和sameTree比较
10. 添加了replace方法，在方法中进行比较，若相同就不更新，replace不同的情况
11. 最后还是通过placeholder解决渲染问题