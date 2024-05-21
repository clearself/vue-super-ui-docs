# 接口数据的大数字问题

## 在解决这个问题之前需要先明白这几个方法和概念

1. transformRequest： 允许你在将请求数据发送到服务器之前对其进行修改，这只适用于请求方法 put、post 和 patch，而且在 transform 过程中可以修改 headers 对象。

2. transformResponse ： 允许你在把响应数据传递给 then 或者 catch 之前对它们进行修改。

3. 在js中，所有的数值（整数和浮点数）都是number类型，他的数据范围为-2的53次方到2的53次方。

4. 整数溢出：当整数值超出其数据类型的范围时，会发生整数溢出。例如，如果你尝试将一个很大的整数赋值给一个较小的整数类型，会导致精度丢失，因为超出范围的部分将被丢弃。

## 使用transformResponse + json-bigint解决

- 先安装json-bigint

```ts
yarn add json-bigint
或
npm install json-bigint
```

- 在请求响应之前将数据进行修改

```js
const JSONBig = require('json-bigint')({ storeAsString: true });
// 创建axios实例，并配置序列化器
const instance = axios.create({
  transformResponse: [function (data) {
    try {
      return JSONBig.parse(data);
    } catch (e) {
      return JSON.parse(data)
    }
  }]
});
```
