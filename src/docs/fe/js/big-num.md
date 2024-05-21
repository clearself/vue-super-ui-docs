# 大数字加减乘除运算问题

+ 背景：JavaScript 中处理大整数时可能会遇到精确度问题，因为JavaScript 的 Number 类型只能安全地表示 -(-2^53 + 1) 和 2^53 - 1 之间的整数，超出这个范围的整数会失去精确度。解决方案通常包括使用字符串来表示大整数，或者使用专门的库，如 big.js 或 bignumber.js。

```ts
npm install bignumber.js
```

+ 新建bigNum.js文件

```js
// bigNum.js

import { BigNumber } from 'bignumber.js'
// 加法
export function add(a: any, b: any) {
  a = BigNumber(a)
  b = BigNumber(b)
  return a.plus(b).toString()
}
// 减法
export function minus(a: any, b: any) {
  a = BigNumber(a)
  b = BigNumber(b)
  return a.minus(b).toString()
}
// 乘法
export function mut(a: any, b: any) {
  a = BigNumber(a)
  b = BigNumber(b)
  return a.multipliedBy(b).toString()
}
// 除法
export function dev(a: any, b: any) {
  a = BigNumber(a)
  b = BigNumber(b)
  return a.dividedBy(b).toString()
}
```
