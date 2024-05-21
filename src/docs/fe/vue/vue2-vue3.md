## Vue2 和Vue 3的区别

## 1.双向数据绑定原理不同

- Vue2 的双向数据绑定是利用ES5的一个APIObject.definePropert() 对数据进行劫持，结合发布订阅模式的方式来实现的。

- Vue3 中使用ES6的Proxy API对数据代理。

## 2.是否支持碎片

- Vue2 不支持碎片。Vue3 支持碎片，就是说可以拥有多个根节点

## 3.API 类型不同

- Vue2 使用选项类型api,选项型api 在代码里分割了不同的属性：data,computed,method等。

- Vue3 使用合成型api,新的合成型api 能让我们使用方法来分割，相比于旧的api 使用属性来分组，这样代码会更加简便和整洁。

## 4.定义数据变量和方法不同

- Vue2是把数据放到了data 中，在 Vue2中 定义数据变量是data(){},创建的方法要在method:{}

- Vue3 就需要使用一个新的setup()方法，此方法在组件初始化构造的时候触发。使用以下三个步骤来建立反应性数据：

1）从vue 引入 reactive；

2）使用 reactive ()方法来声明数据为响应性数据；

3） 使用setup()方法来返回我们的响应性数据，从而template 可以获取这些响应性数据。

## 5.生命周期钩子函数不同

- Vue2 中的生命周期：beforeCreate 组件创建之前；created 组建创建之后；beforeMount 组件挂载到页面之前执行；Mounted 组件挂载到页面之后执行，beforeUpdate 组件更新之前；updated组件更新之后

- Vue3 中的生命周期：setup 开始创建组件；onBeforeMount 组件挂载到页面之前执行；onMounted 组件挂载到页面之后执行；onBeforeUpdate 组件更新之前；onUpdated 组件更新之后；

- 而且 Vue3 生命周期在调用前需要先进行引入。除了这些钩子函数外，Vue3 还增加了 onRenderTracked 和onRenderTriggered 函数。