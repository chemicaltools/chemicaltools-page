if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return r[s]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=s,document.head.appendChild(r),r.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!r[s])throw new Error(`Module ${s} didn’t register its module`);return r[s]}))},e=(e,r)=>{Promise.all(e.map(s)).then((s=>r(1===s.length?s[0]:s)))},r={require:Promise.resolve(e)};self.define=(e,i,l)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return r;case"module":return n;default:return s(e)}}))).then((s=>{const e=l(...s);return r.default||(r.default=e),r}))})))}}define("./service-worker.js",["https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/./workbox-543be79b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"bc72fc8cc94f8f8e6c9356cae9df5852"},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/css/styles.1017adb4.css",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/img/back-to-top.8b37f773.svg",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/205.d73d41ae.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/293.8404e8da.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/491.59459829.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/540.8556069b.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/app.df4845f4.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/runtime~app.4b8f94d0.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-2d0ad528.97678d52.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-3706649a.01f04e0f.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-4911275f.2a45d770.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-8daa1a0e.422a79dc.js",revision:null},{url:"help.html",revision:"c690e0ecc1788e0fc48e0fa76b577a5b"},{url:"index.html",revision:"41e6da148e5a92d3262f6e49220193f0"},{url:"zh/index.html",revision:"df21d7f6514a233ed94abab723a5a2de"}],{})}));
