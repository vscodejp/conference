if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let i={};const r=e=>n(e,a),o={module:{uri:a},exports:i,require:r};s[a]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/conference/2022-2023/_next/static/0jDhmVI2D0amAcRvPZElx/_buildManifest.js",revision:"4dfe0dd8b9f862aa0e1197a9a155e36a"},{url:"/conference/2022-2023/_next/static/0jDhmVI2D0amAcRvPZElx/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/conference/2022-2023/_next/static/chunks/463-163517e7a85f361f.js",revision:"163517e7a85f361f"},{url:"/conference/2022-2023/_next/static/chunks/4c744e84-0e901c0105c4c6bd.js",revision:"0e901c0105c4c6bd"},{url:"/conference/2022-2023/_next/static/chunks/565-767c5753a913ed5d.js",revision:"767c5753a913ed5d"},{url:"/conference/2022-2023/_next/static/chunks/945-0dfba4ce84a85d8e.js",revision:"0dfba4ce84a85d8e"},{url:"/conference/2022-2023/_next/static/chunks/main-64bb7f3b870e0c64.js",revision:"64bb7f3b870e0c64"},{url:"/conference/2022-2023/_next/static/chunks/pages/%5Blang%5D-a362a67407925832.js",revision:"a362a67407925832"},{url:"/conference/2022-2023/_next/static/chunks/pages/%5Blang%5D/code-for-conduct-2ccd03961c0c61a3.js",revision:"2ccd03961c0c61a3"},{url:"/conference/2022-2023/_next/static/chunks/pages/_app-e3ef6c400762381d.js",revision:"e3ef6c400762381d"},{url:"/conference/2022-2023/_next/static/chunks/pages/_error-b46846edaa4557cf.js",revision:"b46846edaa4557cf"},{url:"/conference/2022-2023/_next/static/chunks/pages/index-3a302dd942f23388.js",revision:"3a302dd942f23388"},{url:"/conference/2022-2023/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/conference/2022-2023/_next/static/chunks/webpack-25bc889edbb00327.js",revision:"25bc889edbb00327"},{url:"/conference/2022-2023/_next/static/css/3f27a443fadebb2a.css",revision:"3f27a443fadebb2a"},{url:"/conference/2022-2023/_next/static/css/97f344c811968dd1.css",revision:"97f344c811968dd1"},{url:"/conference/2022-2023/_next/static/css/f3d97644c7836ac1.css",revision:"f3d97644c7836ac1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/conference/2022-2023",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
