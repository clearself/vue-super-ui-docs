## 1、同步与异步
```javascript
//同步代码
console.log(1)
console.log(2)
console.log(3)

//结果 123
```
```javascript
//异步代码
console.log(1)
setTimeout(()=>{
	console.log(2)
},1000)
setTimeout(()=>{
	console.log(3)
},100)
setTimeout(()=>{
	console.log(4)
},10)
console.log(5)
//结果 15432
```
##### 总结：同步程序执行完成后一次执行异步程序

## 2、单线程
```javascript
for(var i=0;i<2000;i++){ //会执行1~2s
	console.log(1)
}
setTimeout(()=>{
	console.log(2)
},0)
setTimeout(()=>{
	console.log(3)
},0)
setTimeout(()=>{
	console.log(4)
},0)
console.log(5)

//结果 111111...1115234
```
##### 总结：js是单线程的，一个任务完成之后才执行另一个任务

### 3、process.nexTick与setImmediate方法
##### 1、同步任务 2、process.nexTick 3、异步任务 4、setImmediate
##### process.nexTick是在同步任务执行结束后异步任务开始之前执行；（当前事件循环中）
##### setImmediate是在异步任务结束后执行（当前事件循环中的异步任务结束）
### 4、事件循环：
##### 1、运行栈中执行同步代码
##### 2、任务队列存放异步事件任务
##### 总结：循环执行任务队列中的任务事件
### 宏任务和微任务
##### 宏任务：计时器、ajax、读取文件
##### 微任务：promise.then
##### 执行顺序：
1、同步程序
2、process.nexTick
3、微任务
4、宏任务
5、setImmediate
## 3、async和await
```javascript
async function fun1(){
	return 1;
}
fun1().then(res=>{
	console.log(res)
})
// 打印出结果为 1
说明 async 函数返回值是Promise对象
可以写成 function fun1(){
	return new Promise(resolve=>{
		resolve(1)
	})
}
async function fun1(){
	console.log(100)
	return 200
}
async function fun2(){
	let data = await fun1
	console.log(data)
}
fun2()
// 打印出结果为 100 200
fun2()可以改写成 fun1().then(data=>{
	console.log(data)
})
// 同样打印出结果为 100 200
总结：fun2函数中的 console.log(data) 可以理解成是微任务 fun1.then

```



