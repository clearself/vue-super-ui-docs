import { defineConfig, type DefaultTheme } from "vitepress"
import { resolve } from "path"

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

import vueJsx from "@vitejs/plugin-vue-jsx"
import svgLoader from "vite-svg-loader"
const isProduction = process.env.NODE_ENV === 'production';
const base = isProduction?'/vue-super-ui/':'/';
import {
  Guide,
  Utils,
  Fe,
  ES6,
  HTMLAndCSS,
  JavaScript
} from "./catalog"

const generateNav = (arr: DefaultTheme.SidebarItem[]) => 
  arr.map(i => ({
    ...i,
    items: i.items?.map(i => ({
      ...i,
      link: Array.isArray(i.items) ? i.items[0].link : i.link
    }))
  })) as (DefaultTheme.NavItemChildren | DefaultTheme.NavItemWithLink)[]

export default defineConfig({
  base:base,
  title: `Vue Super UI`,
  description: 'Super UI 组件库',
  lang: "zh-CN",
  lastUpdated: true,
  outDir: "../dist",
  head: [
    // 网站图标
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://cn.vitejs.dev/viteconf.svg' }],
    // vercel CSP 网络分析
    // [
    //   "meta",
    //   {
    //     "http-equiv": "Content-Security-Policy",
    //     content: "script-src 'unsafe-inline' vitals.vercel-insights.com",
    //   },
    // ],

    // 在 Chrome 85 版本中，为了保护用户的隐私，默认的 Referrer Policy 则变成了 strict-origin-when-cross-origin
    // 所以必须加入此部分代码，否则文章统计访问量的数据则不正确
    ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
    // 添加百度统计
    [
      "script",
      {},
      ` var _hmt = _hmt || [];
        (function() {
          if(location.hostname === 'localhost') return;
          var hm = window.document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?7158ef9941ad8c564e9ceddc4975fd8b";
          var s = window.document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })(); `,
    ],

    // 谷歌广告
    [
      "script",
      {
        "data-ad-client": "ca-pub-6209757986574246",
        async: "true",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
    ["meta", { name: "author", content: "tomiaa" }],
    // 百度
    ["meta", { name: "baidu-site-verification", content: "code-ElgEHVfH7I" }],
    // bing
    [
      "meta",
      { name: "msvalidate.01", content: "CD018AF52A6B027E21ED65922BB7531B" },
    ],
    // google
    [
      "meta",
      {
        name: "google-site-verification",
        content: "71K63A-IgfOHue0ZSCuhCEOhkxYGXB2HW5KZFuSIWek",
      },
    ],
    // 360搜索
    [
      "meta",
      {
        name: "360-site-verification",
        content: "5793ea2cdf94fe6b6406a2a3be4f47cb",
      },
    ],
    // 搜狗搜索
    ["meta", { name: "sogou_site_verification", content: "bkRsJwWIDT" }],
    // 头条搜索
    [
      "meta",
      { name: "bytedance-verification-code", content: "V6p4dafViZcR06HOkbec" },
    ],
    // 神马搜索
    [
      "meta",
      {
        name: "shenma-site-verification",
        content: "700e42cfb66469435b9439ad1550b66b_1632495428",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "Web前端，web，前端开发，html，css，JavaScript，vue，es6，nodejs，less，typescript，小程序，uniapp，网址导航，软件分享",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Web前端，web，前端开发，html，css，JavaScript，vue，es6，nodejs，less，typescript，小程序，uniapp，网址导航，软件分享",
      },
    ],
    // 移动端优化
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }],
    // 移动端优化
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "目录",
    darkModeSwitchLabel: "切换模式",
    externalLinkIcon: true,
    lightModeSwitchTitle: '切换到浅色',
    darkModeSwitchTitle: '切换到深色',
    search: {
      provider: "algolia",
      options: {
        appId: "1AS9BEA8JY",
        apiKey: "6564a713013f5f79664a8be62e7f3235",
        indexName: "kuangyx",
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },
    outlineTitle: "此页目录",
    lastUpdatedText: "最后更新时间",
    outline: [2, 6],
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    // footer: {
    //   message: '© <a href="https://kuangyx.cn">kuangyx.cn</a> @2021',
    //   copyright:
    //     '<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">湘ICP备2021013371号</a>',
    // },

    logo: '/amazing-icon.svg',

    // editLink: {
    //   pattern: 'https://github.com/themusecatcher/vue-amazing-ui/tree/master/docs/:path',
    //   text: 'Suggest changes to this page'
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/clearself/vue-super-ui-docs' },
      // {
      //   icon: {
      //     svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><title>Gitee</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"/></svg>`,
      //   },
      //   link: "https://gitee.com/tomiaa",
      // },
    ],
    nav: [
      { text: '组件', link: '/docs/guide/features', activeMatch: '/docs/guide/' },
      { text: '工具', link: '/docs/utils/started', activeMatch: '/docs/utils/' },
      {
        text: "ES6",
        items: ES6,
      },
        {
        text: "基础",
        items: HTMLAndCSS,
      },
      {
        text: "JavaScript",
        items: JavaScript,
      },
      { 
        text: '博客',
        items: [
          { text: '前端技术栈', link: '/docs/fe/html/standard' }
        ]
      },
      { text: 'BPMN工作流', link: 'https://rich.flypa.cn/bpmn' },
      { text: '微前端', link: 'https://clearself.github.io/' },
      { text: '易收藏', link: 'https://ysc.dnscn.site/#/login' },
      { 
        text: '工程模版',
        items: [
          { text: 'Vue2+Webpack PC', link: 'https://github.com/clearself/webpack-pc-vue2-template' },
          { text: 'Vue2+Vite4 PC', link: 'https://github.com/clearself/vite4.x-vue2-template' },
          { text: 'Vue2+Webpack Moble', link: 'https://github.com/clearself/moble-vue-template' },
          { text: '微前端 qiankun', link: 'https://github.com/clearself/qiankun' },
          { text: 'Vue3+Vite+TS', link: 'https://github.com/clearself/v3-admin-vite' }
        ]
      },
    ],
    sidebar: {
      '/docs/guide/': Guide,
      '/docs/utils/': Utils,
      '/docs/fe/':Fe,
      "/docs/ES6/": ES6,
      "/docs/HTML/": HTMLAndCSS,
      "/docs/CSS/": HTMLAndCSS,
      "/docs/JavaScript/": JavaScript,
    }
  },
  sitemap: {
    hostname: "https://flypa.cn/vue-super-ui",
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        "element-plus",
        "ol",
        "@tomiaa/vue3-components",
        "@tomiaa/live2d",
        "@tomiaa/comment",
        "@tomiaa/hitokoto",
        "@tomiaa/utils",
        "@tomiaa/canvas-graffiti",
        "@tomiaa/latex-template",
        "@wangeditor/editor-for-vue",
        // "@wangeditor/editor/dist/css/style.css",
        "three",
        "dat.gui",
      ],
    },
    ssr: {
      noExternal: [
        "element-plus",
        "ol",
        "@tomiaa/vue3-components",
        "@tomiaa/live2d",
        "@tomiaa/comment",
        "@tomiaa/hitokoto",
        "@tomiaa/utils",
        "@tomiaa/canvas-graffiti",
        "@tomiaa/latex-template",
        "@wangeditor/editor-for-vue",
        "@wangeditor/editor/dist/css/style.css",
        "three",
        "dat.gui",
      ],
    },
    plugins: [
      svgLoader(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      vueJsx(),
    ],
    server: {
      host: "0.0.0.0",
      // proxy: {
      //   "/api": 'http://localhost:3000'
      // }
    },
    resolve: {
      alias: {
        // 别名
        "@": resolve(__dirname, "../"),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      },
    },
    build: {
      chunkSizeWarningLimit: 3000,
    },
  },
})
