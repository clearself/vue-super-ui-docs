import{aF as s,e as i,f as a,V as n}from"./chunks/framework.54wzUQT-.js";const g=JSON.parse('{"title":"Win11 打开方式选择其他应用没反应","description":"","frontmatter":{},"headers":[],"relativePath":"docs/文章/系统软件相关/Win11打开方式选择其他应用没反应.md","filePath":"docs/文章/系统软件相关/Win11打开方式选择其他应用没反应.md","lastUpdated":1716277301000}'),t={name:"docs/文章/系统软件相关/Win11打开方式选择其他应用没反应.md"},l=n(`<h1 id="win11-打开方式选择其他应用没反应" tabindex="-1">Win11 打开方式选择其他应用没反应 <a class="header-anchor" href="#win11-打开方式选择其他应用没反应" aria-label="Permalink to &quot;Win11 打开方式选择其他应用没反应&quot;">​</a></h1><ol><li>复制以下内容</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Windows</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Registry Editor Version </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.00</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[HKEY_CLASSES_ROOT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\U</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nknown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hell</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\O</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">penWithSetDefaultOn]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;MultiSelectModel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;Single&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;ProgrammaticAccessOnly&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[HKEY_CLASSES_ROOT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\U</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nknown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hell</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\O</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">penWithSetDefaultOn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ommand]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=hex(2):25,00,53,00,79,00,73,00,74,00,65,00,6d,00,52,00,6f,00,6f,00,74,00,25,\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">00,5c,00,73,00,79,00,73,00,74,00,65,00,6d,00,33,00,32,00,5c,00,4f,00,70,00,\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">65,00,6e,00,57,00,69,00,74,00,68,00,2e,00,65,00,78,00,65,00,20,00,2d,00,6f,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">00,76,00,65,00,72,00,72,00,69,00,64,00,65,00,20,00,22,00,25,00,31,00,22,00,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">00,00</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;DelegateExecute&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;{e44e9428-bdbc-4987-a099-40dc8fd255e7}&quot;</span></span></code></pre></div><ol start="2"><li>新建一个 txt 文本粘贴</li><li>按键盘上的<code>Ctrl + Shift + S</code>另存为，另存为时文件名改成<code>.reg</code>结尾格式，保存类型为所以文件，编码为<code>ANSI</code>格式。</li><li>双击打开 reg 格式文件即可</li></ol>`,4),h=[l];function e(p,k,d,E,r,o){return i(),a("div",null,h)}const _=s(t,[["render",e]]);export{g as __pageData,_ as default};
