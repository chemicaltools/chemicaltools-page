if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return r[s]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=s,document.head.appendChild(r),r.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!r[s])throw new Error(`Module ${s} didn’t register its module`);return r[s]}))},e=(e,r)=>{Promise.all(e.map(s)).then((s=>r(1===s.length?s[0]:s)))},r={require:Promise.resolve(e)};self.define=(e,i,l)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return r;case"module":return n;default:return s(e)}}))).then((s=>{const e=l(...s);return r.default||(r.default=e),r}))})))}}define("./service-worker.js",["https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/./workbox-2fdebd44"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"0412e4c643d92a40e0ad9092cc36cb5c"},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/css/styles.8dda1725.css",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/img/back-to-top.8b37f773.svg",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/205.d44060c0.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/293.21a4faa4.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/491.b7659ad0.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/540.81ffce42.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/app.510cb512.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/runtime~app.c315f8bf.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-2d0ad528.d89f7e62.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-3706649a.8ae1376d.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-4911275f.60146ce7.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-8daa1a0e.d33d7ccf.js",revision:null},{url:"help.html",revision:"f6114bb67c29528f0b62c5e8516aed78"},{url:"index.html",revision:"23fbc36d074ea3a896cbe0eaa5be74b6"},{url:"zh/index.html",revision:"3f459fc81d9849f09c129e8b2dd6d892"}],{})}));
