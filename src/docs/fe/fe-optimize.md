1. html内容从上到下解析，浏览器遇到body标签开始显示内容。CSS 不会阻塞 DOM 的解析，JS 会阻止DOM的解析。

2. 当文档加载过程中遇到JS文件，HTML文档会挂起渲染过程，不仅要等到文档中JS文件加载完毕还要等待解析执行完毕，才会继续HTML的渲染过程。

3. 现代浏览器都使用了预加载器，在js挂起DOM解析时，会继续解析后面的html，寻找需要下载的资源。预加载器下载这些资源，以减少JS阻塞带来的影响。

## 优化

  了解以上，我们就能知道以下这些前端优化点：

- http请求数减少，如：雪碧图、合并CSS/JS文件、缓存资源等（针对http1.1）
- http请求资源体积减少，如：启用gzip压缩、图片压缩、减少cookie、按需加载等
- css放在head中。由于同时具有 DOM 和 CSSOM 才能构建渲染树，所以HTML 和 CSS 都是阻塞渲染的资源，所以尽量精简CSS也是优化方式之一。
- js放在body底部，减少白屏时间。因为js会阻止浏览器解析。
- 减少回流和重绘制，比如不要一条一条修改DOM样式、使用documentFragment操作DOM等。

## 浏览器缓存机制

## 缓存位置

  浏览器缓存位置分为四种，其优先级顺序如下：

1. Service Workers （Application -> Service Workers）
2. Memory Cache	（内存中）
3. Disk Cache（磁盘中）
4. Push Cache（会话（Session）中存在）

## 缓存策略

  浏览器每次在向服务器发起 HTTP 请求获得资源后，可能会根据不同情况（可能是代码控制如 Service Worker、Push Cache，也可能是根据 HTTP Header 的缓存标识字段）将资源缓存起来。

  浏览器缓存策略分为强制缓存和协商缓存，其是通过设置 HTTP Header 来实现的。

## 强制缓存

  当浏览器发起 HTTP 请求时，会依次查找上述缓存位置中是否存在缓存资源并通过缓存标识字段 Expires 或 Cache-Control 来验证缓存资源是否过期。
  Expires 是服务器端在响应请求时用来规定资源的失效时间。
  Cache-Control 是服务器端在响应请求时用来规定资源是否需要被浏览器缓存以及缓存的有效时间等。
  Expires 是 HTTP 1.0 的字段，而 Cache-Control 是 HTTP 1.1 的字段，当 Expires 与 Cache-Control 同时存在时，Cache-Control 的优先级要高于 Expires。
  若是命中缓存（即存在缓存资源并且缓存资源未过期），则浏览器响应 HTTP Status Code 200，并直接使用缓存资源作为返回结果，不需要发起 HTTP 请求；若是存在缓存资源但缓存资源已过期，则进入协商缓存。
## 协商缓存
  Last-Modified 和 If-Modified-Since：
  Last-Modified 是服务器端在响应请求时用来说明资源的最后修改时间。与之对应的是 If-Modified-Since 字段，在协商缓存过程中，浏览器发送的 HTTP 请求中 Header 中会带上 If-Modified-Since 字段，值为缓存资源 Last-Modified 属性的值。
  当服务器端接收到带有 If-Modified-Since 的请求时，则会将 If-Modified-Since 的值与被请求资源的最后修改时间做对比。如果相同，说明资源没有新的修改，则响应 HTTP Status Code 304，浏览器会继续使用缓存资源；如果最后修改时间比较新，则说明资源被修改过，则响应 HTTP Status Code 200，并返回最新的资源。

  Etag 和 If-None-Match：
  Etag 是服务器端在响应请求时用来说明资源在服务器端的唯一标识。与之对应的是 If-None-Match 字段，在协商缓存过程中，浏览器发送的 HTTP 请求中 Header 中会带上 If-None-Match 字段，值为该缓存资源 Etag 属性的值。
  当服务器端接收到带有 If-None-Match 的请求时，则会将 If-None-Match 的值与被请求资源的唯一标识做对比。如果相同，说明资源没有新的修改，则响应 HTTP Status Code 304，浏览器会继续使用缓存资源；如果不同，则说明资源被修改过，则响应 HTTP Status Code 200，并返回最新的资源。
  Last-Modified 是 HTTP 1.0 的字段，而 Etag 是 HTTP 1.1 的字段，当 Last-Modified 与 Etag 同时存在时，Etag 的优先级要高于 Last-Modified。

  Etag 的出现主要是为了解决 Last-Modified 存在的问题：

  Last-Modified 标注的最后修改只能精确到秒级，如果某些文件在 1 秒钟以内被修改多次的话，它将不能准确标注文件的最后修改时间；
  如果本地打开缓存文件，即使没有对文件进行修改，但 Last-Modified 却改变了，导致文件没法使用缓存；

