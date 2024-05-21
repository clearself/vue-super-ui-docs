## URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串。
一个实现了 URLSearchParams 的对象可以直接用在 for...of 结构中，例如下面两行是相等的：
```javascript
for (const [key, value] of mySearchParams) {}
for (const [key, value] of mySearchParams.entries()) {}
```
Note: 此特性在 Web Worker 中可用

## 构造函数
#### URLSearchParams()
返回一个 URLSearchParams 对象。
示例：
```javascript
// Pass in a string literal
var url = new URL('https://example.com?foo=1&bar=2');
// Retrieve from window.location
var url2 = new URL(window.location);

// Retrieve params via url.search, passed into ctor
var params = new URLSearchParams(url.search);
var params2 = new URLSearchParams(url2.search);

// Pass in a sequence
var params3 = new URLSearchParams([["foo", 1],["bar", 2]]);

// Pass in a record
var params4 = new URLSearchParams({"foo" : 1 , "bar" : 2});
```
## 方法
该接口不继承任何属性。
## 1、URLSearchParams.append()
示例：
```javascript
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//添加第二个foo搜索参数。
params.append('foo', 4);
//查询字符串变成: 'foo=1&bar=2&foo=4'
```
 插入一个指定的键/值对作为新的搜索参数。
## 2、URLSearchParams.delete()
 从搜索参数列表里删除指定的搜索参数及其对应的值。
 示例：
```javascript
// name 键名
URLSearchParams.delete(name)
```
## 3、URLSearchParams.entries()
 返回一个iterator可以遍历所有键/值对的对象。示例：
```javascript
// 创建一个测试用 URLSearchParams 对象
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// 显示键/值对
for(var pair of searchParams.entries()) {
   console.log(pair[0]+ ', '+ pair[1]);
}
// 结果
key1, value1
key2, value2
```
## 4、URLSearchParams.get()
 获取指定搜索参数的第一个值。
 示例：
```javascript
let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("name"); // is the string "Jonathan"
let age = parseInt(params.get("age"), 10); // is the number 18
//查找一个不存在的键名则返回 null:
let address = params.get("address"); // null

```
## 5、URLSearchParams.getAll()
 获取指定搜索参数的所有值，返回是一个数组。示例：
```javascript
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//为foo参数添加第二个值
params.append('foo', 4);

console.log(params.getAll('foo')) //输出 ["1","4"].
```
## 6、URLSearchParams.has()
 返回 Boolean 判断是否存在此搜索参数。
 示例：
```javascript
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

params.has('bar') === true; //true
```
## 7、URLSearchParams.keys()
返回iterator 此对象包含了键/值对的所有键名。
示例：
```javascript
// 建立一个测试用URLSearchParams对象
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// 输出键值对
for(var key of searchParams.keys()) {
  console.log(key);
}
//结果
key1
key2
```
### 8、URLSearchParams.set()
 设置一个搜索参数的新值，假如原来有多个值将删除其他所有的值。
 示例：
```javascript
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//Add a third parameter.
params.set('baz', 3);
```
## 9、URLSearchParams.sort()
 按键名排序。
 示例：
```javascript
// Create a test URLSearchParams object
var searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");

// Sort the key/value pairs
searchParams.sort();

// Display the sorted query string
console.log(searchParams.toString());
// 结果
// a=2&a=1&b=3&c=4

```
## 10、URLSearchParams.toString()
 返回搜索参数组成的字符串，可直接使用在URL上。
 示例：
```javascript
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//Add a second foo parameter.
params.append('foo', 4);
console.log(params.toString());
//Prints 'foo=1&bar=2&foo=4'.
```
## 11、URLSearchParams.values()
 返回iterator 此对象包含了键/值对的所有值。
示例
```javascript
var paramsString = "q=URLUtils.searchParams&topic=api"
var searchParams = new URLSearchParams(paramsString);

for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
```
##### URLSearchParams 构造函数不会解析完整 URL，但是如果字符串起始位置有 ? 的话会被去除。
```javascript
var paramsString1 = "http://example.com/search?query=%40";
var searchParams1 = new URLSearchParams(paramsString1);

searchParams1.has("query"); // false
searchParams1.has("http://example.com/search?query"); // true

searchParams1.get("query"); // null
searchParams1.get("http://example.com/search?query"); // "@" (equivalent to decodeURIComponent('%40'))

var paramsString2 = "?query=value";
var searchParams2 = new URLSearchParams(paramsString2);
searchParams2.has("query"); // true

var url = new URL("http://example.com/search?query=%40");
var searchParams3 = new URLSearchParams(url.search);
searchParams3.has("query") // true
```
