if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const u=e=>l(e,r),o={module:{uri:r},exports:t,require:u};s[r]=Promise.all(i.map((e=>o[e]||u(e)))).then((e=>(n(...e),t)))}}define(["https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/./workbox-85077874"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"8e4c0bceb07b73031e330a2a821f4ca1"},{url:"assets/404.219e2f93.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/404.html.f166316b.js",revision:null},{url:"assets/app.3ea92d4f.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/help.html.4e848899.js",revision:null},{url:"assets/help.html.a7351281.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.03d19b6d.js",revision:null},{url:"assets/index.html.b41a092c.js",revision:null},{url:"assets/index.html.bb25d814.js",revision:null},{url:"assets/index.html.de8de356.js",revision:null},{url:"assets/Layout.ef78d2f6.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/style.f0d67481.css",revision:null},{url:"help.html",revision:"bda1287f78f41578ce9c5f7532117910"},{url:"index.html",revision:"1b59e1b16e7a22a15921c5f0e29342a4"},{url:"zh/index.html",revision:"505982f58b63ced9940e858a81c46316"}],{})}));
