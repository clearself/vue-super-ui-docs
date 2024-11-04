import{aF as s,e as i,f as a,V as n}from"./chunks/framework.54wzUQT-.js";const y=JSON.parse('{"title":"JavaScript 获取节点，操作节点","description":"","frontmatter":{},"headers":[],"relativePath":"docs/JavaScript/DOM/节点操作.md","filePath":"docs/JavaScript/DOM/节点操作.md","lastUpdated":1716277301000}'),l={name:"docs/JavaScript/DOM/节点操作.md"},p=n(`<h1 id="javascript-获取节点-操作节点" tabindex="-1">JavaScript 获取节点，操作节点 <a class="header-anchor" href="#javascript-获取节点-操作节点" aria-label="Permalink to &quot;JavaScript 获取节点，操作节点&quot;">​</a></h1><h2 id="获取节点" tabindex="-1">获取节点 <a class="header-anchor" href="#获取节点" aria-label="Permalink to &quot;获取节点&quot;">​</a></h2><p>父节点.childNodes 获取子节点（包含一切节点）</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p.nodeType </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true 判断是否存在节点 是不是一个元素 </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1 元素节点 2 属性节点 3 文本节点</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p.nodeName</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// #text 文本节点的名字</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// P  元素节点的元素名 大写</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// #comment 注释节点的名字</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p.nodeValue </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 文本节点的内容 </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 必须是文本节点，元素节点会返回 null</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">父元素.children 获取子节点 </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// IE9+ 正常</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// IE8-中 会获取 注释和元素节点</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 父节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p.parentNode;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取直系父元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p.offsetParent;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取上一个带有定位的父元素，position:stalic不算</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">兼容方法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  firstchild 都有值，firstElementChild IE 会 undefined</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  短路运算 </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  firstElementChild || firstchild;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 子节点 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p.firstChild;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 标准浏览器获取第一个 文本或换行 节点，IE 只获取第一个元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p.firstElementChild;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 标准浏览器只获取第一个元素，IE 为 undefined</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lastElementChild </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lastChild; 最后一个子节点</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 兄弟节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p.previousElementSibling </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p.previousSibling;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 上一个兄弟节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p.nextElementSibling </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p.nextSibling;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 下一个兄弟节点</span></span></code></pre></div><h2 id="操作节点" tabindex="-1">操作节点 <a class="header-anchor" href="#操作节点" aria-label="Permalink to &quot;操作节点&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 新建节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> li </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;p&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 新建li元素</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createTextNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wenben&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 新建文本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插入节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">父节点.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(li);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 父节点的末尾插入</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">父节点.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertBefore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(li,参照子节点);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在参照子节点前插入</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 替换节点 </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 替换之前的文本依然还在 ，但它在文档中已经没了自己的位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">父节点.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(新节点,被替换的子节点);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 替换</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除节点 </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 移除的节点仍然为文档所有，只不过没有了自己的位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">父节点.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(子节点);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除子节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">节点.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remove</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 自己删除自己</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 克隆节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">节点.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cloneNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认：只复制本身空标签</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">节点.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cloneNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 本身与所有子节点都复制</span></span></code></pre></div>`,6),h=[p];function t(k,e,d,r,E,c){return i(),a("div",null,h)}const D=s(l,[["render",t]]);export{y as __pageData,D as default};
