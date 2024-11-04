import{aF as s,e as i,f as a,V as n}from"./chunks/framework.54wzUQT-.js";const c=JSON.parse('{"title":"接口数据的大数字问题","description":"","frontmatter":{},"headers":[],"relativePath":"docs/fe/js/big-data.md","filePath":"docs/fe/js/big-data.md","lastUpdated":1716277301000}'),t={name:"docs/fe/js/big-data.md"},l=n(`<h1 id="接口数据的大数字问题" tabindex="-1">接口数据的大数字问题 <a class="header-anchor" href="#接口数据的大数字问题" aria-label="Permalink to &quot;接口数据的大数字问题&quot;">​</a></h1><h2 id="在解决这个问题之前需要先明白这几个方法和概念" tabindex="-1">在解决这个问题之前需要先明白这几个方法和概念 <a class="header-anchor" href="#在解决这个问题之前需要先明白这几个方法和概念" aria-label="Permalink to &quot;在解决这个问题之前需要先明白这几个方法和概念&quot;">​</a></h2><ol><li><p>transformRequest： 允许你在将请求数据发送到服务器之前对其进行修改，这只适用于请求方法 put、post 和 patch，而且在 transform 过程中可以修改 headers 对象。</p></li><li><p>transformResponse ： 允许你在把响应数据传递给 then 或者 catch 之前对它们进行修改。</p></li><li><p>在js中，所有的数值（整数和浮点数）都是number类型，他的数据范围为-2的53次方到2的53次方。</p></li><li><p>整数溢出：当整数值超出其数据类型的范围时，会发生整数溢出。例如，如果你尝试将一个很大的整数赋值给一个较小的整数类型，会导致精度丢失，因为超出范围的部分将被丢弃。</p></li></ol><h2 id="使用transformresponse-json-bigint解决" tabindex="-1">使用transformResponse + json-bigint解决 <a class="header-anchor" href="#使用transformresponse-json-bigint解决" aria-label="Permalink to &quot;使用transformResponse + json-bigint解决&quot;">​</a></h2><ul><li>先安装json-bigint</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn add json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bigint</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">或</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bigint</span></span></code></pre></div><ul><li>在请求响应之前将数据进行修改</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSONBig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;json-bigint&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)({ storeAsString: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建axios实例，并配置序列化器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> instance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  transformResponse: [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JSONBig.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,8),h=[l];function e(p,k,r,d,E,o){return i(),a("div",null,h)}const y=s(t,[["render",e]]);export{c as __pageData,y as default};
