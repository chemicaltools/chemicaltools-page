if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const u=e=>l(e,r),o={module:{uri:r},exports:t,require:u};s[r]=Promise.all(i.map((e=>o[e]||u(e)))).then((e=>(n(...e),t)))}}define(["https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"b2102fb0d0db71ef423318779eb7352a"},{url:"assets/404.eaaa7503.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/404.html.f166316b.js",revision:null},{url:"assets/app.4c07a230.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/help.html.a8e7df57.js",revision:null},{url:"assets/help.html.ff501f82.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.3c8d218f.js",revision:null},{url:"assets/index.html.460aef5f.js",revision:null},{url:"assets/index.html.79db8f26.js",revision:null},{url:"assets/index.html.cfbf5af0.js",revision:null},{url:"assets/Layout.52cef871.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/style.39d5bbe5.css",revision:null},{url:"help.html",revision:"39ef57e4ce8ef7ec0c4d16be5b9c00d5"},{url:"index.html",revision:"bfe3af7b7b566fa2f5b8aa01edf61ed5"},{url:"zh/index.html",revision:"591bfdb7fb6f61329abe5aa8c6645f97"}],{})}));
