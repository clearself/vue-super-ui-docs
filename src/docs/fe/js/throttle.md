## 防抖：指在一段时间内最多触发一次事件，节流算法会在特定的时间间隔内判断是否触发事件
```js
 function debounce(fn, time) {
	 let timer = null
	 return () => {
		 if (timer) {
		 	clearTimeout(timer)
		 }
		 timer = setTimeout(() => {
		 	fn()
		 }, time);
	 }
}
```
## 节流：指在一段时间内只要有事件触发，就重新计算时间，直到这段时间内没有事件触发，才真正的执行事件
```js
 function throttle(fn, time) {
    let oldTime = 0;
	 return () => {
		 const nowTime = new Date()
		 if (nowTime - oldTime >= time) {
		 	fn()
		 	oldTime = nowTime
		 }
	 }
	 
 }
```
### 在这里throttle有一个严重的问题就是如果用户一直触发事件，用户会一直得不到响应，所以我们可以借助防抖的思路来优化节流。

```js
function throttle(fn, time) {
	let oldTime = 0,
	timer = null;
	return function () {
		const nowTime = new Date()
		// 保留调用时的this上下文
		let context = this
		// 保留调用时传入的参数
		let args = arguments
		if (nowTime - oldTime < time) {
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				oldTime = nowTime
				fn.apply(context, args)
			}, time);
		} else {
			// 用户重复触发，到达事件节点 还是会去执行事件 
			oldTime = nowTime
			fn.apply(context, args)
		}
	}
}
```

## vue中使用防抖和节流。
```js
//防抖
export const VueDebounce = (func, wait = 200, immediate = true) => {
    let timeout = null;  // 定时器
    return function () {
        let that = this, // this对象
            args = arguments; // 参数
        if (timeout) clearTimeout(timeout);
        if (immediate === true) { // 立即执行
            var callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) {
                // func.apply(that, args); // 普通用法
                that[func](...args); // vue用法
            }
        }
        else { // 非立即执行
            timeout = setTimeout(() => {
                // func.apply(this, args); // 普通用法
                that[func](...args); // vue用法
            }, wait);
        }
    }
}

//节流
export const VueThrottle = (func, wait=200)=>{
    let previous= 0;
    return function() {
        let that= this;
        let args = arguments;
        let now = Date.now();
        if (now - previous > wait) {
			that[func](...args); // vue用法
			previous = now;
        }
    }
}
//vue用法
import { VueDebounce } from '@/utils/index.js'

 methods:{
 	initZan: VueDebounce('changeZan', 200, false),
    changeZan() {
		console.log(1)
	}
 }
```
