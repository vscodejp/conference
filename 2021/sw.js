if(!self.define){let e,c={};const n=(n,s)=>(n=new URL(n+".js",s).href,c[n]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=c,document.head.appendChild(e)}else e=n,importScripts(n),c()})).then((()=>{let e=c[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(c[t])return;let i={};const r=e=>n(e,t),o={module:{uri:t},exports:i,require:r};c[t]=Promise.all(s.map((e=>o[e]||r(e)))).then((e=>(a(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/conference/2021/_next/static/chunks/372.c0eb0e336b8658cd.js",revision:"c0eb0e336b8658cd"},{url:"/conference/2021/_next/static/chunks/498-e45834d64c8e8bfb.js",revision:"e45834d64c8e8bfb"},{url:"/conference/2021/_next/static/chunks/505-9161970d1b2303cc.js",revision:"9161970d1b2303cc"},{url:"/conference/2021/_next/static/chunks/701-a1da2fca1c99eeb4.js",revision:"a1da2fca1c99eeb4"},{url:"/conference/2021/_next/static/chunks/main-45469143101809de.js",revision:"45469143101809de"},{url:"/conference/2021/_next/static/chunks/pages/%5Blang%5D-f775c3bf8d48f351.js",revision:"f775c3bf8d48f351"},{url:"/conference/2021/_next/static/chunks/pages/%5Blang%5D/code-for-conduct-8616388487423338.js",revision:"8616388487423338"},{url:"/conference/2021/_next/static/chunks/pages/%5Blang%5D/contact-8d10d6dab229373c.js",revision:"8d10d6dab229373c"},{url:"/conference/2021/_next/static/chunks/pages/%5Blang%5D/pre-event-23a19ca39678bba1.js",revision:"23a19ca39678bba1"},{url:"/conference/2021/_next/static/chunks/pages/%5Blang%5D/privacy-policy-66c33be16398ac39.js",revision:"66c33be16398ac39"},{url:"/conference/2021/_next/static/chunks/pages/_app-1526e91232ee26dc.js",revision:"1526e91232ee26dc"},{url:"/conference/2021/_next/static/chunks/pages/_error-b46846edaa4557cf.js",revision:"b46846edaa4557cf"},{url:"/conference/2021/_next/static/chunks/pages/index-8c221f28bc984a49.js",revision:"8c221f28bc984a49"},{url:"/conference/2021/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/conference/2021/_next/static/chunks/reactPlayerDailyMotion.62a00e3ddcf1e543.js",revision:"62a00e3ddcf1e543"},{url:"/conference/2021/_next/static/chunks/reactPlayerFacebook.03d94361c02cf5f0.js",revision:"03d94361c02cf5f0"},{url:"/conference/2021/_next/static/chunks/reactPlayerFilePlayer.c2facc05997896ca.js",revision:"c2facc05997896ca"},{url:"/conference/2021/_next/static/chunks/reactPlayerKaltura.be2f1b2a1267d586.js",revision:"be2f1b2a1267d586"},{url:"/conference/2021/_next/static/chunks/reactPlayerMixcloud.ccf98b2945b48a7e.js",revision:"ccf98b2945b48a7e"},{url:"/conference/2021/_next/static/chunks/reactPlayerPreview.94cb716878055307.js",revision:"94cb716878055307"},{url:"/conference/2021/_next/static/chunks/reactPlayerSoundCloud.7eed8a9a11a51aba.js",revision:"7eed8a9a11a51aba"},{url:"/conference/2021/_next/static/chunks/reactPlayerStreamable.e41439c08984d8b1.js",revision:"e41439c08984d8b1"},{url:"/conference/2021/_next/static/chunks/reactPlayerTwitch.bb8ad63de9860b96.js",revision:"bb8ad63de9860b96"},{url:"/conference/2021/_next/static/chunks/reactPlayerVidyard.92e6bda74bbd35e1.js",revision:"92e6bda74bbd35e1"},{url:"/conference/2021/_next/static/chunks/reactPlayerVimeo.fc4774a52b7a59f9.js",revision:"fc4774a52b7a59f9"},{url:"/conference/2021/_next/static/chunks/reactPlayerWistia.b28807691b7dd0c5.js",revision:"b28807691b7dd0c5"},{url:"/conference/2021/_next/static/chunks/reactPlayerYouTube.d10400b0b0b67772.js",revision:"d10400b0b0b67772"},{url:"/conference/2021/_next/static/chunks/webpack-67922858eb932bb1.js",revision:"67922858eb932bb1"},{url:"/conference/2021/_next/static/css/877535e715d34d62.css",revision:"877535e715d34d62"},{url:"/conference/2021/_next/static/css/b99c89b1d7dbc871.css",revision:"b99c89b1d7dbc871"},{url:"/conference/2021/_next/static/css/d107e7910814055c.css",revision:"d107e7910814055c"},{url:"/conference/2021/_next/static/css/e5a14ace576663af.css",revision:"e5a14ace576663af"},{url:"/conference/2021/_next/static/zpncOpTNawAsQd_ZZWDP9/_buildManifest.js",revision:"cfd69a81c635ea2c1f74363213a04e7b"},{url:"/conference/2021/_next/static/zpncOpTNawAsQd_ZZWDP9/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/conference/2021",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:n,state:s})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const c=e.pathname;return!c.startsWith("/api/auth/")&&!!c.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
