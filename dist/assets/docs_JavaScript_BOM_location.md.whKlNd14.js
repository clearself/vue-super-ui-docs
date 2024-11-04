import{aF as s,e as a,f as i,V as n}from"./chunks/framework.54wzUQT-.js";const g=JSON.parse('{"title":"JavaScript location URL 地址对象","description":"","frontmatter":{},"headers":[],"relativePath":"docs/JavaScript/BOM/location.md","filePath":"docs/JavaScript/BOM/location.md","lastUpdated":1716277301000}'),t={name:"docs/JavaScript/BOM/location.md"},l=n(`<h1 id="javascript-location-url-地址对象" tabindex="-1">JavaScript location URL 地址对象 <a class="header-anchor" href="#javascript-location-url-地址对象" aria-label="Permalink to &quot;JavaScript location URL 地址对象&quot;">​</a></h1><p>完整的 URL 地址：</p><p>协议：// 主机名：端口号 /路径/ ？查询字符串 #锚点</p><p>如：<a href="https://127.0.0.1:5500/javascript.html/?a=ssa&amp;bd=asd#aaa" target="_blank" rel="noreferrer">https://127.0.0.1:5500/javascript.html/?a=ssa&amp;bd=asd#aaa</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.hash </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// #aaa      哈希值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.host </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 127.0.0.1:5500 域名+端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.hostname </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 127.0.0.1  域名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.href </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// https:127.0.0.1:5500/?a=ssa&amp;bd=asd#aaa url 地址 toString() 也能返回这个值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.origin </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// https:127.0.0.1:5500 文件来源地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.pathname </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// /JavaScript.html 文件路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.port </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5500 端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.protocol </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// https: 协议</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.search </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ?a=ssa&amp;bd=asd 表单提交的数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.port </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可以用这样的方法修改上面的值，除了 hash 值外，页面都会以新的 URL 重新加载</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http:// www.163.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在当前窗口跳转到这个URL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http:// baidu.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在当前窗口替换成新的 URL 用户将不能回到前一个页面*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 重新加载（可能从缓存中加载）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 重新加载（从服务器重新加载）</span></span></code></pre></div>`,5),h=[l];function p(k,e,r,o,E,d){return a(),i("div",null,h)}const y=s(t,[["render",p]]);export{g as __pageData,y as default};
