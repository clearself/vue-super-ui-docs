import{aF as s,e as i,f as a,V as n}from"./chunks/framework.54wzUQT-.js";const g=JSON.parse('{"title":"eslint 与 prettierrc 使用","description":"","frontmatter":{},"headers":[],"relativePath":"docs/文章/前端/eslint与prettierrc使用.md","filePath":"docs/文章/前端/eslint与prettierrc使用.md","lastUpdated":1716277301000}'),t={name:"docs/文章/前端/eslint与prettierrc使用.md"},e=n(`<h1 id="eslint-与-prettierrc-使用" tabindex="-1">eslint 与 prettierrc 使用 <a class="header-anchor" href="#eslint-与-prettierrc-使用" aria-label="Permalink to &quot;eslint 与 prettierrc 使用&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ol><li><code>vscode</code>搜索插件<code>eslint</code>安装</li><li>控制台运行<code>npx i eslint --init</code>安装并执行<code>eslint</code>初始化</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> How would you like to use ESLint? · problems # 是否安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> What type of modules does your project use? · esm # es 模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Which framework does your project use? · vue # vue 框架</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Does your project use TypeScript? · Yes # 使用 ts 语法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Where does your code run? · browser, node # 浏览器与 node 环境</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> What format do you want your config file to be in? · JavaScript # js 文件来配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Would you like to install them now? · Yes # 安装需要的插件</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><ul><li>依赖：<code>npm i @vue/eslint-config-typescript -D</code>.vue 文件的 ts 校验</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .eslintrc.js</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  env: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    browser: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    es2021: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    node: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;eslint:recommended&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// eslint 推荐规范</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;@vue/typescript/recommended&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 校验 .vue 文件的 ts，需要安装 npm i @vue/eslint-config-typescript -D</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;plugin:@typescript-eslint/recommended&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ts 语法插件</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;plugin:vue/vue3-recommended&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vue3解析 https://eslint.vuejs.org/</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;plugin:prettier/recommended&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使 eslint 使用 prettierrc 的规则来校验，避免两者之间的格式冲突，添加到数组的最后一个元素覆盖来去除不必要的规则冲突。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parserOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ecmaVersion: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;latest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    parser: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@typescript-eslint/parser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sourceType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@typescript-eslint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;vue/html-self-closing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;off&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 禁用强制将 &lt;MyComponent&gt;&lt;/MyComponent&gt; 必须使用 &lt;MyComponent/&gt; 的校验</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;vue/singleline-html-element-content-newline&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;off&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;vue/multi-word-component-names&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;off&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 禁用注册组件 name 不能使用 大写 的报错</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;vue/prefer-import-from-vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;off&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 禁用 import x from &#39;@vue/runtime-dom&#39; 包以 @/ 开头的报错</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;@typescript-eslint/no-non-null-assertion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;off&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 允许使用 ts 语法 obj!.a</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;vue/valid-v-for&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;off&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 禁用 v-for 语法校验， vue3 v-for 不需要绑定 :key，不禁用会报没有绑定 key 的警告</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="配置不要做格式校验的文件" tabindex="-1">配置不要做格式校验的文件 <a class="header-anchor" href="#配置不要做格式校验的文件" aria-label="Permalink to &quot;配置不要做格式校验的文件&quot;">​</a></h2><p>根目录<code>.eslintignore</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置不需要做代码格式校验的文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node_modules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dist</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.css</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.jpg</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.jpeg</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.png</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.gif</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.d.ts</span></span></code></pre></div><h2 id="代码格式化" tabindex="-1">代码格式化 <a class="header-anchor" href="#代码格式化" aria-label="Permalink to &quot;代码格式化&quot;">​</a></h2><ul><li><p><code>vscode</code>安装插件<code>Prettier - Code formatter</code></p></li><li><p>配置格式化规则</p></li></ul><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">// .prettierrc.yaml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">singleQuote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # false 不使用单引号</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">semi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # false 不使用分号</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trailingComma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;es5&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 在多行数组、对象的最后一项添加逗号，单行数组不会添加。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">arrowParens</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;avoid&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 箭头函数只有一个参数时省略括号</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">endOfLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;auto&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 结尾自动换行</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">singleAttributePerLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # true 标签属性使用单行</span></span></code></pre></div><ul><li>配置不需要格式化的文件</li></ul><p>根目录<code>.prettierignore</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置不需要格式化的文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node_modules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dist</span></span></code></pre></div><h2 id="配置prettier格式化与eslint一致" tabindex="-1">配置<code>prettier</code>格式化与<code>eslint</code>一致 <a class="header-anchor" href="#配置prettier格式化与eslint一致" aria-label="Permalink to &quot;配置\`prettier\`格式化与\`eslint\`一致&quot;">​</a></h2><ol><li>vscode 快捷键 <code>ctrl + ,</code> 打开设置</li><li>搜索<code>formatter</code></li><li><code>Editor:Default Formatter</code>设置为<code>Prettier - Code formatter</code></li><li>搜索<code>formatter on save</code>打钩，在报存是自动格式化</li></ol>`,18),l=[e];function p(h,k,r,d,o,E){return i(),a("div",null,l)}const y=s(t,[["render",p]]);export{g as __pageData,y as default};
