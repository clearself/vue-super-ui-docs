# es6新增语法介绍 (ES6-ES10语法)

## ES6语法

## let const

1. let类似于var，用来定义变量，但是let没有变量提升，只在代码块内有效
2. 没有变量提升
3. 代码块内，可以创建私有变量

``` js
if(true){
    let a=12
}
console.log(a)//报错
```

4. 解决事件循环机制问题

``` js
for(let i=1; i<5;i++){
    setTimeout(function(){
        console.log(i)
    })
}
```

5. 暂时性死区

只要在块级作用中声明let，他就会绑定在这个区域，不再受外界影响

``` js
let a=1
function fun(){
    //暂时性死区
    a=2
    let a
    console.log(a)//报错，只找函数下的a 不去找全局的
}
```

6. 不允许重复声明

``` js
if(true){
    var a=12
    let a=55
    console.log(a)//报错，不能重复声明
}
```

## const命令

const声明常量，一旦声明，常量的值不能改变

1. const具有let的所有特点，没有变量提升，代码块内可以定义为私有变量，不能重复声明，存在暂时性死区

```js
var a=12
const a=55
console.log(a)//报错，不能重复声明
```

2. 一旦声明，值不能改变

```js
 const pi = 3.14
console.log(pi)
    // pi = 3.5
var num = pi * 3
console.log(pi)报错
```

3. 本质：如果是基本类型的值，保证的是值不能改变，如果哟是引用类型的值，保证对象的地址不能改变

```js
const arr=[1,2,3]
arr[0]=66
console.log(arr)//[66,2,3]
const arr={a:"zxc"}
console.log(arr)//报错
```

## 总结：面试题：var let和const区别

1. var有变量提升，let和const没有变量提升
2. var在函数下是私有变量，let const在代码块呢是私有变量
3. var可以重复定义，let constby不可以重复定义
4. var 没有暂时性死区，let const具有let的所有特点，没有变量提升，代码块内可以定义为私有变量，不能重复声明，存在暂时性死区
5. const定义的基本类型值保证值不能改变，引用类型值保证地址不能改变

## 声明方法

```js
// var let const function class import
// 解构赋值
let [a, b, c] = [1, 2, 3]
console.log(a)
console.log(b)
console.log(c)
```

## 数组结构赋值

1. 解构赋值可以为任何类型，只要结构相对应

```js
let[a,b,c]=[1,{name:"aa"},[22,33]]
```

2. 可以缺少变量和值，但是不能类型不对应

```js
let[a,b,c]=[1,2]//c是undefined
let[a,b,]=[1,2,3]//3没有赋给变量
let[a,b,c]=[1,,3]//b是undefined
let[a,b,c]={}//报错，数组结构对象
let[a,b,c]=22//报错，数组解构基本类型值
```

3. 可以与拓展运算符连用

```js
let [a, b, c, ...d] = [1, 2, 3, 45, 6, 89] //扩展运算符只能放置在最后一个变量
```

4. 可以设置模式

```js
let [a, b, c = 22] = [1, 2, undefined] //替代undefined
```

5. 对象结构赋值

```js
var obj={name:"list",age:23}
let {age，name}=obj
console.log(age)
console.log(name)
```
  
给属性重新命名，但是输出原属性名称，则报错

 ```js
var obj={name:"list",age:23}
let {age:a,name:b}=obj
console.log(a)
console.log(b)
console.log(age)
console.log(name)
```

## 字符串的扩展

1. includes(字符串，位置)是否找到了匹配值，返回布尔

```js
let str = 'aaabbccc'
const b1 = str.includes('aa',1)
console.log(b1) // true
```

2. startsWith()判断是否以某个字符串开头，返回布尔

```js
const str = 'aaabbccc'
const s1 = str.startsWith('aaa')
console.log(s1, 's1') //true
const s2 = str.startsWith('aaaa')
console.log(s2, 's2') //false
```

3. endsWith()判断是否以某个字符串结尾，返回布尔

```js
const str = 'aaabbccc'
const s1 = str.endsWith('ccc')
console.log(s1, 's1') //true
const s2 = str.endsWith('cccc')
console.log(s2, 's2') //false
```

4. repeat()把一个字符串重复n次

```js
const str = 'aaabbccc'
const s1 = str.repeat(2)
console.log(s1, 's1') 
```

5. padStart(长度，字符串)头补全字符串

```js
const str = '1234'
const s1 = str.padStart(8,'0')
console.log(s1, 's1') // '00001234'
```

6. padEnd(长度，字符串)尾部补全字符串

```js
const str = '1234'
const s1 = str.padEnd(8,'0')
console.log(s1, 's1') // '12340000'
```

## 数字的扩展

1. 二进制 用0b或0B开头
2. 八进制 用0o或0O开头
3. isNaN()判断是否为数字
4. parseInt()转换成整数
5. parseFloat()转换成浮点数
6. isFinite()是否为一个有限值
7. isInteger()判断是否是整数

## 数学的扩展

1. Math.trunc()去除一个数的小数部分

```js
const num = 10.23
const num1 = Math.trunc(num)
console.log(num1, 'num1') // 10
```

2. Math.sign()判断一个数是正数，负数，零，正数返回1，负数返回-1，零返回0

```js
const num1 = 10.23
const _num1 = Math.sign(num1)
console.log(_num1, '_num1') // 1
const num2 = -10.23
const _num2 = Math.sign(num2)
console.log(_num2, '_num2') // -1
const num3 = 0
const _num3 = Math.sign(num3)
console.log(_num3, '_num3') // 0
```

3. Math.cbrt()求立方根

```js
const num = 9
const num1 = Math.cbrt(num)
console.log(num1, 'num1') // 3
```

4. Math.imul()返回带符号整数的乘积，非数字返回0

5. Math.hypot()返回所有参数的平方和的平方根

6. 指数运算符 2**3 //2*2*2=8

## bigInt

js的数字类型存储长度有限，bigint存储长度无限制，所以计算时不用考虑数字的溢出问题，可以计算大数字加法，列如银行的钱数，但是只能存储整形数字

## 数据类型：number,string,boolean,null,undefined,bigInt,symbol,Object

## 数组下的扩展

## 扩展运算符

```js
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
// 数组合并
const arr3 = [...arr1, ...arr2]
console.log(arr3, 'arr3') // [1,2,3,4,5,6]
// 深拷贝
const arr4 = [...arr1]
console.log(arr4, 'arr4') // [1,2,3]
arr4.push(4)
console.log(arr4, arr1, 'arr4') // [1,2,3,4],[1,2,3]

const obj1 = {
    name:'李磊',
    age:12,
    sex:'男'
}
const obj2 = {
    from:'北京',
    to:'上海'
}
  // 对象合并
  const obj3 = {...obj1,...obj2}
   // 对象深拷贝
  const obj4 = {...obj1} 

```

## 属性和方法

1. from()将对象转换成数组

```js
const str = '123456'
const arr = Array.from(str)
console.log(arr,'arr') // [1,2,3,4,5,6]
```

2. Array.of() 可以把一组参数转换为数组

```js
Array.of((1,2,3,4,5)); //[1, 2, 3, 4, 5]
```

3. instanceof 在只有一个网页(因而只有一个全局作用域)的情况下，使用 instanceof 操作符足以

```js
value instanceof Array
```

4. Array.isArray() 如果网页由多个框架，则可能设计两个不同的全局执行上下文，因此会有两个不同版本的 Array 构造函数

```js
Array.isArray(value)
```

5. Array.isArray() 如果网页由多个框架，则可能设计两个不同的全局执行上下文，因此会有两个不同版本的 Array 构造函数

```js
Array.isArray(value)
```

## 迭代器方法 ES6

+ Array在原型上暴露了三个用于检索数组内容的方法：keys()、values()和entries()
+ 因为这些方法都是返回迭代器，所以可以将他们的内容用 Array.from() 转换为数组实例

```js
const lazy = ['one', 'two', 'three', 'four'];
```

1. keys()返回数组索引的迭代器

```js
Array.from(lazy.keys); //[0, 1, 2, 3]
```

2. values()返回数组元素的迭代器

```js
Array.from(lazy.values); //["one", "two", "three", "four"]
```

3. entries()返回数组元素的迭代器

```js
Array.from(lazy.entries());//[[0, "one"][1, "two"][2, "three"][3, "four"]]
```

## ES8新特性（2017

+ async/await
+ Object.values()
+ Object.entries()
+ String padding: padStart()和padEnd()，填充字符串达到当前长度
函数参数列表结尾允许逗号
+ Object.getOwnPropertyDescriptors()
+ ShareArrayBuffer和Atomics对象，用于从共享内存位置读取和写入

1. async/await
ES2018引入异步迭代器（asynchronous iterators），这就像常规迭代器，除了next()方法返回一个Promise。因此await可以和for...of循环一起使用，以串行的方式运行异步操作。例如：

```js
async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}
```

2. Object.values()

Object.values()是一个与Object.keys()类似的新函数，但返回的是Object自身属性的所有值，不包括继承的值。假设我们要遍历如下对象obj的所有值：

```js
const obj = {a: 1, b: 2, c: 3};
```

不使用Object.values() :ES7

```js
const vals=Object.keys(obj).map(key=>obj[key]);
console.log(vals);//[1, 2, 3]
```

使用Object.values() :ES8

```js
const values=Object.values(obj);
console.log(values);//[1, 2, 3]
```

从上述代码中可以看出Object.values()为我们省去了遍历key，并根据这些key获取value的步骤。

3. Object.entries()

Object.entries()函数返回一个给定对象自身可枚举属性的键值对的数组。接下来我们来遍历上文中的obj对象的所有属性的key和value：

不使用Object.entries() :ES7

```js
Object.keys(obj).forEach(key=>{
    console.log('key:'+key+' value:'+obj[key]);
})
//key:a value:1
//key:b value:2
//key:c value:3
```

使用Object.entries() :ES8

```js
for(let [key,value] of Object.entries(obj)){
    console.log(`key: ${key} value:${value}`)
}
//key:a value:1
//key:b value:2
//key:c value:3
```
