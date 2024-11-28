import{_ as s,c as a,o as e,a4 as i}from"./chunks/framework.C66voXYi.js";const b=JSON.parse('{"title":"Carbon Ads","description":"","frontmatter":{},"headers":[],"relativePath":"zh/reference/default-theme-carbon-ads.md","filePath":"zh/reference/default-theme-carbon-ads.md","lastUpdated":1732780881000}'),n={name:"zh/reference/default-theme-carbon-ads.md"},t=i(`<h1 id="carbon-ads" tabindex="-1">Carbon Ads <a class="header-anchor" href="#carbon-ads" aria-label="Permalink to &quot;Carbon Ads {#carbon-ads}&quot;">​</a></h1><p>VitePress 内置了对 <a href="https://www.carbonads.net/" target="_blank" rel="noreferrer">Carbon Ads</a> 的原生支持。通过在配置中定义 Carbon Ads 凭据，VitePress 将在页面上显示广告。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    carbonAds: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;your-carbon-code&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      placement: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;your-carbon-placement&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这些值用于调用 carbon CDN 脚本，如下所示。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`//cdn.carbonads.com/carbon.js?serve=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&amp;placement=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">placement</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span></code></pre></div><p>要了解有关 Carbon Ads 配置的更多信息，请访问 <a href="https://www.carbonads.net/" target="_blank" rel="noreferrer">Carbon Ads 站点</a>。</p>`,6),p=[t];function l(r,h,d,o,c,k){return e(),a("div",null,p)}const g=s(n,[["render",l]]);export{b as __pageData,g as default};
