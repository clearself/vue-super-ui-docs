import{aF as i,e,f as s,V as l}from"./chunks/framework.54wzUQT-.js";const v=JSON.parse('{"title":"JavaScript event 事件对象","description":"","frontmatter":{},"headers":[],"relativePath":"docs/JavaScript/事件/event事件对象.md","filePath":"docs/JavaScript/事件/event事件对象.md","lastUpdated":1716277301000}'),a={name:"docs/JavaScript/事件/event事件对象.md"},t=l(`<h1 id="javascript-event-事件对象" tabindex="-1">JavaScript event 事件对象 <a class="header-anchor" href="#javascript-event-事件对象" aria-label="Permalink to &quot;JavaScript event 事件对象&quot;">​</a></h1><p>早期火狐不兼容 event 需要传参 ev</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event;</span></span></code></pre></div><ul><li>鼠标按下/单击：mousedown，支持 <ul><li>e.button：0 左键 1 滚轮 2 右键</li></ul></li><li>鼠标位置：鼠标事件支持 <ul><li>e.offsetX/Y：距离当前触发元素的 left/top 值</li><li>e.clientX/Y：可视区 left/top 值</li><li>e.pageX/Y：页面文档的 top/left 值</li><li>e.screenX/Y：屏幕左上角 left/top 值</li></ul></li><li>热键：keydown 支持，按下为 true <ul><li>e.shiftkey：Boolean</li><li>e.altKey：Boolean</li><li>e.ctrlKey：Boolean</li><li>e.metakey：windows ---&gt; windows键，macos ---&gt; command键</li></ul></li><li>键盘按下：keydown/keyup 支持 <ul><li>e.which/e.keycode：返回按下的ascll码值，不区分大小写</li><li>enter：13</li><li>shift：16</li><li>ctrl：17</li><li>alt：18</li><li>a：65</li><li>上下左右：37 38 39 40</li></ul></li><li>键盘按下：keypress 仅支持字符键（DOM3 被弃用） <ul><li>e.which/e.charCode：返回按下的 ascll 码值，区分大小写</li></ul></li><li>滚动 <ul><li>e.wheelDelta：chrome IE 向下 -120 向上 120</li><li>e.datail：firefox 向下 3 向上 -3</li></ul></li></ul><p>兼容:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e.wheelDalta </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.wheelDalta </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.datail </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// chrome是否存在 ? chrome &lt; 0 是否向下为true : firefox &lt; 0 是否向下</span></span></code></pre></div>`,6),n=[t];function h(p,o,r,k,c,d){return e(),s("div",null,n)}const g=i(a,[["render",h]]);export{v as __pageData,g as default};
