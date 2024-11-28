import{_ as e,c as t,o as a,a4 as r}from"./chunks/framework.C66voXYi.js";const f=JSON.parse('{"title":"What is VitePress?","description":"","frontmatter":{},"headers":[],"relativePath":"guide/what-is-vitepress.md","filePath":"en/guide/what-is-vitepress.md","lastUpdated":1732780881000}'),i={name:"guide/what-is-vitepress.md"},s=r('<h1 id="what-is-vitepress" tabindex="-1">What is VitePress? <a class="header-anchor" href="#what-is-vitepress" aria-label="Permalink to &quot;What is VitePress?&quot;">​</a></h1><p>VitePress is a <a href="https://en.wikipedia.org/wiki/Static_site_generator" target="_blank" rel="noreferrer">Static Site Generator</a> (SSG) designed for building fast, content-centric websites. In a nutshell, VitePress takes your source content written in <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">Markdown</a>, applies a theme to it, and generates static HTML pages that can be easily deployed anywhere.</p><div class="tip custom-block" style="padding-top:8px;"><p>Just want to try it out? Skip to the <a href="./getting-started">Quickstart</a>.</p></div><h2 id="use-cases" tabindex="-1">Use Cases <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Use Cases&quot;">​</a></h2><ul><li><p><strong>Documentation</strong></p><p>VitePress ships with a default theme designed for technical documentation. It powers this page you are reading right now, along with the documentation for <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>, <a href="https://rollupjs.org/" target="_blank" rel="noreferrer">Rollup</a>, <a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">Pinia</a>, <a href="https://vueuse.org/" target="_blank" rel="noreferrer">VueUse</a>, <a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a>, <a href="https://d3js.org/" target="_blank" rel="noreferrer">D3</a>, <a href="https://unocss.dev/" target="_blank" rel="noreferrer">UnoCSS</a>, <a href="https://iconify.design/" target="_blank" rel="noreferrer">Iconify</a> and <a href="https://www.vuetelescope.com/explore?framework.slug=vitepress" target="_blank" rel="noreferrer">many more</a>.</p><p>The <a href="https://vuejs.org/" target="_blank" rel="noreferrer">official Vue.js documentation</a> is also based on VitePress, but uses a custom theme shared between multiple translations.</p></li><li><p><strong>Blogs, Portfolios, and Marketing Sites</strong></p><p>VitePress supports <a href="./custom-theme">fully customized themes</a>, with the developer experience of a standard Vite + Vue application. Being built on Vite also means you can directly leverage Vite plugins from its rich ecosystem. In addition, VitePress provides flexible APIs to <a href="./data-loading">load data</a> (local or remote) and <a href="./routing#dynamic-routes">dynamically generate routes</a>. You can use it to build almost anything as long as the data can be determined at build time.</p><p>The official <a href="https://blog.vuejs.org/" target="_blank" rel="noreferrer">Vue.js blog</a> is a simple blog that generates its index page based on local content.</p></li></ul><h2 id="developer-experience" tabindex="-1">Developer Experience <a class="header-anchor" href="#developer-experience" aria-label="Permalink to &quot;Developer Experience&quot;">​</a></h2><p>VitePress aims to provide a great Developer Experience (DX) when working with Markdown content.</p><ul><li><p><strong><a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite-Powered:</a></strong> instant server start, with edits always instantly reflected (&lt;100ms) without page reload.</p></li><li><p><strong><a href="./markdown">Built-in Markdown Extensions:</a></strong> Frontmatter, tables, syntax highlighting... you name it. Specifically, VitePress provides many advanced features for working with code blocks, making it ideal for highly technical documentation.</p></li><li><p><strong><a href="./using-vue">Vue-Enhanced Markdown:</a></strong> each Markdown page is also a Vue <a href="https://vuejs.org/guide/scaling-up/sfc.html" target="_blank" rel="noreferrer">Single-File Component</a>, thanks to Vue template&#39;s 100% syntax compatibility with HTML. You can embed interactivity in your static content using Vue templating features or imported Vue components.</p></li></ul><h2 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Performance&quot;">​</a></h2><p>Unlike many traditional SSGs where each navigation results in a full page reload, a website generated by VitePress serves static HTML on the initial visit, but becomes a <a href="https://en.wikipedia.org/wiki/Single-page_application" target="_blank" rel="noreferrer">Single Page Application</a> (SPA) for subsequent navigation within the site. This model, in our opinion, provides an optimal balance for performance:</p><ul><li><p><strong>Fast Initial Load</strong></p><p>The initial visit to any page will be served the static, pre-rendered HTML for fast loading speed and optimal SEO. The page then loads a JavaScript bundle that turns the page into a Vue SPA (&quot;hydration&quot;). Contrary to common assumptions of SPA hydration being slow, this process is actually extremely fast thanks to Vue 3&#39;s raw performance and compiler optimizations. On <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fvitepress.dev%2F" target="_blank" rel="noreferrer">PageSpeed Insights</a>, typical VitePress sites achieve near-perfect performance scores even on low-end mobile devices with a slow network.</p></li><li><p><strong>Fast Post-load Navigation</strong></p><p>More importantly, the SPA model leads to better user experience <strong>after</strong> the initial load. Subsequent navigation within the site will no longer cause a full page reload. Instead, the incoming page&#39;s content will be fetched and dynamically updated. VitePress also automatically pre-fetches page chunks for links that are within viewport. In most cases, post-load navigation will feel instant.</p></li><li><p><strong>Interactivity Without Penalty</strong></p><p>To be able to hydrate the dynamic Vue parts embedded inside static Markdown, each Markdown page is processed as a Vue component and compiled into JavaScript. This may sound inefficient, but the Vue compiler is smart enough to separate the static and dynamic parts, minimizing both the hydration cost and payload size. For the initial page load, the static parts are automatically eliminated from the JavaScript payload and skipped during hydration.</p></li></ul><h2 id="what-about-vuepress" tabindex="-1">What About VuePress? <a class="header-anchor" href="#what-about-vuepress" aria-label="Permalink to &quot;What About VuePress?&quot;">​</a></h2><p>VitePress is the spiritual successor of VuePress. The original VuePress was based on Vue 2 and webpack. With Vue 3 and Vite under the hood, VitePress provides significantly better DX, better production performance, a more polished default theme, and a more flexible customization API.</p><p>The API difference between VitePress and VuePress mostly lies in theming and customization. If you are using VuePress 1 with the default theme, it should be relatively straightforward to migrate to VitePress.</p><p>There has also been effort invested into VuePress 2, which also supports Vue 3 and Vite with more compatibility with VuePress 1. However, maintaining two SSGs in parallel isn&#39;t sustainable, so the Vue team has decided to focus on VitePress as the main recommended SSG in the long run.</p>',15),n=[s];function o(l,p,h,d,c,u){return a(),t("div",null,n)}const m=e(i,[["render",o]]);export{f as __pageData,m as default};
