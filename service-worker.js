if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return r[s]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=s,document.head.appendChild(r),r.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!r[s])throw new Error(`Module ${s} didn’t register its module`);return r[s]}))},e=(e,r)=>{Promise.all(e.map(s)).then((s=>r(1===s.length?s[0]:s)))},r={require:Promise.resolve(e)};self.define=(e,i,l)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return r;case"module":return n;default:return s(e)}}))).then((s=>{const e=l(...s);return r.default||(r.default=e),r}))})))}}define("./service-worker.js",["https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/./workbox-cf684d81"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"69cfad8979eb438e5c68fa5dad3347cc"},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/css/styles.83a57c92.css",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/138.e2e4c490.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/205.9798da5e.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/287.b008e6bf.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/814.7adb3c35.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/app.07bcb4be.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/runtime~app.103e2843.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-2d0ad528.e6713894.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-3706649a.1db1a1ff.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-4911275f.c137d052.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-8daa1a0e.c6b587c2.js",revision:null},{url:"help.html",revision:"92cb04ec7665bfe4712b6bb3b2e338fc"},{url:"index.html",revision:"f83239c56ef44d68ee6a75acce43b61b"},{url:"zh/index.html",revision:"2a031ff00f9038849324104e41970561"}],{})}));
