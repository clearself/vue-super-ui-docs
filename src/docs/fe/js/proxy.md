### Proxy：字面意思是代理
是ES6提供的一个新的API，用于修改某些操作的默认行为，可以理解为在目标对象之前做一层拦截，外部所有的访问都必须通过这层拦截，通过这层拦截可以做很多事情，比如对数据进行过滤、修改或者收集信息之类。
##### ES6原生提供的Proxy构造函数，用法如下:
```javascript
var proxy = new Proxy(obj, handler)
```
其中obj为Proxy要拦截的对象，handler用来定制拦截的操作，返回一个新的代理对象proxy；Proxy代理特点：
- 直接代理整个对象而非对象属性
Proxy的代理针对的是整个对象，而不是像Object.defineProperty针对某个属性。只需做一层代理就可以监听同级结构下的所有属性变化，包括新增属性和删除属性
- 可以监听数组的变化
##### proxy代理实现

```javascript
let obj = {
    name:{name:'hhh'},
    arr: ['吃','喝','玩']
}
//proxy兼容性差 可以代理13种方法 get set
//defineProperty 只对特定 的属性进行拦截 
let handler = {
    get (target,key) { //target就是obj key就是要取obj里面的哪个属性
        console.log('收集依赖')
        if(typeof target[key] === 'object' && target[key] !== null){
            //递归代理，只有取到对应值的时候才会代理
            return new Proxy(target[key],handler)
        }
        // return target[key]
        //Reflect 反射 这个方法里面包含了很多api
        return Reflect.get(target,key)
    },
    set (target,key,value) {
        console.log('触发更新')
        // target[key] = value //这种写法设置时如果不成功也不会报错 比如这个对象默认不可配置
        return Reflect.set(target,key,value)
    }
}

let proxy = new Proxy(obj,handler)
//通过代理后的对象取值和设置值
// proxy.name.name = '123' //设置值，取一次，设置一次
proxy.arr.push(456)
```
### Object.defineProperty 实现数据响应式
通过设定对象属性getter/setter方法来监听数据的变化，同时getter也用于依赖收集，而setter在数据变更时通知订阅者更新视图。
### Object.defineProperty的缺陷
- 无法检测到对象属性的新增或删除
- 不能监听数组的变化
### Proxy的劣势
- 兼容性问题，无完全polyfill
由于ES5的限制，ES6的Proxy没办法被完全polyfill，所以babel没有提供对应的转换支持，Proxy的实现是需要JS引擎级别提供支持。
- 性能问题
Proxy的性能比Promise还差，这就要需要在性能和简单实用上进行权衡。

### 参考文献

[了解Proxy](https://www.cnblogs.com/wonyun/p/11699397.html)
[vue3中的双向绑定 proxy](https://www.cnblogs.com/lyt0207/p/12540091.html)
[Proxy 的巧用](https://juejin.im/post/6844904012790120462)
