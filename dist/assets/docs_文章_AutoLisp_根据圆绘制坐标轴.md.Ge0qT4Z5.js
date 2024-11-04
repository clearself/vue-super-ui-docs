import{aF as s,e as i,f as a,V as t}from"./chunks/framework.54wzUQT-.js";const F=JSON.parse('{"title":"CAD AutoLisp 根据圆绘制坐标轴","description":"","frontmatter":{},"headers":[],"relativePath":"docs/文章/AutoLisp/根据圆绘制坐标轴.md","filePath":"docs/文章/AutoLisp/根据圆绘制坐标轴.md","lastUpdated":1716277301000}'),h={name:"docs/文章/AutoLisp/根据圆绘制坐标轴.md"},n=t(`<h1 id="cad-autolisp-根据圆绘制坐标轴" tabindex="-1">CAD AutoLisp 根据圆绘制坐标轴 <a class="header-anchor" href="#cad-autolisp-根据圆绘制坐标轴" aria-label="Permalink to &quot;CAD AutoLisp 根据圆绘制坐标轴&quot;">​</a></h1><ul><li><code>(setq RR (* r 1.2));</code> 绘制线为半径的倍数</li><li><code>command &quot;chprop&quot;</code> 需要确定图层，示例中选择的是中心线图层</li></ul><div class="language-lisp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lisp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">defun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> C:TT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">setq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ss (ssget &#39;((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> . </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CIRCLE,ARC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">setq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	(repeat (sslength ss)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">setq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ent (entget (ssname ss i)))</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;获取组码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">setq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pt (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cdr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">assoc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ent)))</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;获取圆心坐标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">setq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> R (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cdr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">assoc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ent)))</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;获取半径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">setq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RR (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;系数1.2倍</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">setq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">car</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pt))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">setq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cadr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pt))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">setq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p1 (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x rr) y))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">setq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p2 (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x rr) y))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(command </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LINE&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;NON&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p1 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;NON&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p2 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(command </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;chprop&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;L&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;P&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;LA&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;中心线&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">setq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p3 (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y rr)))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">setq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p4 (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y rr)))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(command </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LINE&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;NON&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p3 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;NON&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p4 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(command </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;chprop&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;L&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;P&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;LA&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;中心线&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">setq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">1+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	(princ)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,3),k=[n];function p(l,E,e,r,d,g){return i(),a("div",null,k)}const o=s(h,[["render",p]]);export{F as __pageData,o as default};
