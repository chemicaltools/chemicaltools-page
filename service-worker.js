if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const u=e=>l(e,r),o={module:{uri:r},exports:t,require:u};s[r]=Promise.all(i.map((e=>o[e]||u(e)))).then((e=>(n(...e),t)))}}define(["https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"47d87b013be1601ec6ed190da7569698"},{url:"assets/404.857dc60c.js",revision:null},{url:"assets/404.html.beaa804c.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/app.49f27590.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/help.html.3ecf4d08.js",revision:null},{url:"assets/help.html.c2ed772e.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.104fdcfc.js",revision:null},{url:"assets/index.html.2e8a05fa.js",revision:null},{url:"assets/index.html.96217dba.js",revision:null},{url:"assets/index.html.e98bcc20.js",revision:null},{url:"assets/Layout.95fe61ce.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/style.2ff4df50.css",revision:null},{url:"help.html",revision:"f5c389ab07c846fc76c8593d0a657e16"},{url:"index.html",revision:"5c39ffdbb53766e09837ccab32df8ded"},{url:"zh/index.html",revision:"a3e11eaab614163af7996d384384e682"}],{})}));
