if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let i={};const r=e=>n(e,a),o={module:{uri:a},exports:i,require:r};s[a]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/conference/2022-2023/_next/static/DcDNOX8TpdZx3SH1m1KOj/_buildManifest.js",revision:"111999e053724058e399c9f7fc2fc78f"},{url:"/conference/2022-2023/_next/static/DcDNOX8TpdZx3SH1m1KOj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/conference/2022-2023/_next/static/chunks/4c744e84-0e901c0105c4c6bd.js",revision:"0e901c0105c4c6bd"},{url:"/conference/2022-2023/_next/static/chunks/505-9161970d1b2303cc.js",revision:"9161970d1b2303cc"},{url:"/conference/2022-2023/_next/static/chunks/565-a83308c684a6ecfa.js",revision:"a83308c684a6ecfa"},{url:"/conference/2022-2023/_next/static/chunks/945-73076df16a7b1934.js",revision:"73076df16a7b1934"},{url:"/conference/2022-2023/_next/static/chunks/main-64bb7f3b870e0c64.js",revision:"64bb7f3b870e0c64"},{url:"/conference/2022-2023/_next/static/chunks/pages/%5Blang%5D-a3a3448bac231c02.js",revision:"a3a3448bac231c02"},{url:"/conference/2022-2023/_next/static/chunks/pages/%5Blang%5D/code-for-conduct-ad4bdc37e86746b7.js",revision:"ad4bdc37e86746b7"},{url:"/conference/2022-2023/_next/static/chunks/pages/_app-06d9ec3fca3c38f1.js",revision:"06d9ec3fca3c38f1"},{url:"/conference/2022-2023/_next/static/chunks/pages/_error-b46846edaa4557cf.js",revision:"b46846edaa4557cf"},{url:"/conference/2022-2023/_next/static/chunks/pages/index-8c221f28bc984a49.js",revision:"8c221f28bc984a49"},{url:"/conference/2022-2023/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/conference/2022-2023/_next/static/chunks/webpack-25bc889edbb00327.js",revision:"25bc889edbb00327"},{url:"/conference/2022-2023/_next/static/css/3f27a443fadebb2a.css",revision:"3f27a443fadebb2a"},{url:"/conference/2022-2023/_next/static/css/97f344c811968dd1.css",revision:"97f344c811968dd1"},{url:"/conference/2022-2023/_next/static/css/f3d97644c7836ac1.css",revision:"f3d97644c7836ac1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/conference/2022-2023",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
