import{aF as s,e as i,f as a,V as t}from"./chunks/framework.54wzUQT-.js";const F=JSON.parse('{"title":"C 语言概述","description":"","frontmatter":{},"headers":[],"relativePath":"docs/进阶/C语言/概述.md","filePath":"docs/进阶/C语言/概述.md","lastUpdated":1716277301000}'),n={name:"docs/进阶/C语言/概述.md"},l=t(`<h1 id="c-语言概述" tabindex="-1">C 语言概述 <a class="header-anchor" href="#c-语言概述" aria-label="Permalink to &quot;C 语言概述&quot;">​</a></h1><h2 id="第一个-c-程序" tabindex="-1">第一个 C 程序 <a class="header-anchor" href="#第一个-c-程序" aria-label="Permalink to &quot;第一个 C 程序&quot;">​</a></h2><p>#include 表示引入头文件，printf 是一个方法，引入 stdio.h 库才能使用 printf</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	//这是第一个C语言代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="通过-gcc-编译-c-代码" tabindex="-1">通过 GCC 编译 C 代码 <a class="header-anchor" href="#通过-gcc-编译-c-代码" aria-label="Permalink to &quot;通过 GCC 编译 C 代码&quot;">​</a></h2><h3 id="gcc-安装使用" tabindex="-1">gcc 安装使用 <a class="header-anchor" href="#gcc-安装使用" aria-label="Permalink to &quot;gcc 安装使用&quot;">​</a></h3><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h4><p><a href="https://sourceforge.net/projects/mingw-w64/" target="_blank" rel="noreferrer">下载 64 位</a></p><ul><li>运行 Download mingw-get-setup.exe，就注意下安装目录就好，其他就是 continue</li><li>选择计算机—属性---高级系统设置---环境变量，在系统变量中找到 Path 变量，在后面加入 min-gw 的安装目录，如 C:\\MinGw\\bin</li><li>win+r 打开 cmd，输入 mingw-get，此时会弹出 MinGw installation manager 的窗口，这时候证明 MinGW 的安装成功</li><li>mingw-get install gcc 来安装 gcc (需要关闭 MinGw installation manager 的窗口)</li><li>想安装 g++,gdb,只要输入命令 mingw-get install g++ 和 mingw-get install gdb</li><li>在 cmd 中输入 gcc -v 来查看 gcc 安装是否成功</li></ul><h4 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h4><ul><li>cmd 中运行</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># gcc -o [要编译成exe的位置，exe格式结尾] [c文件]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1-helloWorld.exe .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1-helloWorld.c</span></span></code></pre></div><h3 id="gcc-编译过程" tabindex="-1">gcc 编译过程 <a class="header-anchor" href="#gcc-编译过程" aria-label="Permalink to &quot;gcc 编译过程&quot;">​</a></h3><h4 id="分步编译" tabindex="-1">分步编译 <a class="header-anchor" href="#分步编译" aria-label="Permalink to &quot;分步编译&quot;">​</a></h4><p>预处理：gcc -E hello.c -o hello.i 编 译：gcc -S hello.i -o hello.s 汇 编：gcc -c hello.s -o hello.o 链 接：gcc hello.o -o hello</p><table><thead><tr><th>选项</th><th>含义</th></tr></thead><tbody><tr><td>-E</td><td>只进行预处理</td></tr><tr><td>-S(大写)</td><td>只进行预处理和编译</td></tr><tr><td>-c(小写)</td><td>只进行预处理、编译和汇编</td></tr><tr><td>-o file</td><td>指定生成的输出文件名为 file</td></tr></tbody></table><table><thead><tr><th>文件后缀</th><th>含义</th></tr></thead><tbody><tr><td>.c</td><td>C 语言文件</td></tr><tr><td>.i</td><td>预处理后的 C 语言文件</td></tr><tr><td>.s</td><td>编译后的汇编文件</td></tr><tr><td>.o</td><td>编译后的目标文件</td></tr></tbody></table><h2 id="system-函数" tabindex="-1">system 函数 <a class="header-anchor" href="#system-函数" aria-label="Permalink to &quot;system 函数&quot;">​</a></h2><p>功能：在已经运行的程序中执行另外一个外部程序</p><p>引入 stdlib.h 库以使用 system 方法</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdlib.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 system 调用 cmd 中的命令</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 相当于在 cmd 中输入 calc 打开计算器，notepad 记事本，mspaint 画图板</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// system(&quot;calc&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 启动某个程序</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// system(&quot;\\&quot;C:\\\\Program Files\\\\Microsoft VS Code\\\\Code.exe\\&quot;&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// system 有返回值，0 表示运行成功，1 表示失败</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> system</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Program Files</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Microsoft VS Code</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Code.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	//  %d 表示占位符，表示输出整型数据</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,21),h=[l];function e(p,k,d,r,c,o){return i(),a("div",null,h)}const y=s(n,[["render",e]]);export{F as __pageData,y as default};
