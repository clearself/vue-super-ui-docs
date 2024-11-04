import{aF as s,e as i,f as a,V as n}from"./chunks/framework.54wzUQT-.js";const f=JSON.parse('{"title":"Node.js Buffer 缓冲区","description":"","frontmatter":{},"headers":[],"relativePath":"docs/服务端/Node.js/Buffer.md","filePath":"docs/服务端/Node.js/Buffer.md","lastUpdated":1716277301000}'),h={name:"docs/服务端/Node.js/Buffer.md"},k=n(`<h1 id="node-js-buffer-缓冲区" tabindex="-1">Node.js Buffer 缓冲区 <a class="header-anchor" href="#node-js-buffer-缓冲区" aria-label="Permalink to &quot;Node.js Buffer 缓冲区&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建一个 10 字节的 buffer,长度一旦确定不能更改</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> buf </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alloc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 转成 16 进制存入</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buf[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 88</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;Buffer 58 00 00 00 00 00 00 00 00 00&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buf[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0xaa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;Buffer 58 aa 00 00 00 00 00 00 00 00&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buf[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 没有第十位 设置没效果</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buf[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 00 </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 最大 255，255 转 16 进制是 ff; 256 二进制 1 后面八个 0,存的时候取二进制后 8位,二进制 8 个 0 还是 16 进制 00 */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buf[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 170 0xaa 控制台打印是 10 进制</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buf[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// aa 16 进制输出</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> buf1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">allocUnsafe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;Buffer 31 34 11 c9 bf 02 00 00 49 34&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// allocUnsafe 创建 10 字节,但是不清空内存,之前别的程序使用的内存信息在这里面.可能有敏感信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将字符串转换成 Buffer 储存</span></span></code></pre></div><p>base64 存储</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> buf </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;字符&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;base64&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 存储，转换成 base64</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buf);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5a2X56ym</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> buf1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buf,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;base64&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// buf 是字符串 第二个参数以 base64 存储 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buf1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 字符</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alloc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(size);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建一个指定大小的 Buffer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">allocUnsafe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(size);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建一个指定大小的 buffer，可能包含敏感数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buf.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将缓冲区的数据转换成字符串</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">allocUnsafeSlow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(size);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 慢，不安全的分配空间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byteLength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(string, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取一个字符串占用内存的大小，默认 utf-8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buf1, buf2);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 比较两个 Buffer 是否是同一个</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([buf1,buf2]);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 连接多个 Buffer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isBuffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否是一个 Buffer 返回 true/false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isEncoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(encoding);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 返回是否支持 encoding true/false </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isEncoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isEncoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf/8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Buffer.poolSize ;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 缓冲池的预分配的内部 Buffer 实例的大小（以字节为单位）可以修改</span></span></code></pre></div>`,4),l=[k];function p(t,e,E,r,d,g){return i(),a("div",null,l)}const F=s(h,[["render",p]]);export{f as __pageData,F as default};
