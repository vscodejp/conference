if(!self.define){let e,c={};const n=(n,s)=>(n=new URL(n+".js",s).href,c[n]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=c,document.head.appendChild(e)}else e=n,importScripts(n),c()})).then((()=>{let e=c[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(c[t])return;let i={};const r=e=>n(e,t),o={module:{uri:t},exports:i,require:r};c[t]=Promise.all(s.map((e=>o[e]||r(e)))).then((e=>(a(...e),i)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/conference/2022-2023/_next/static/chunks/143-c2e90d55249ab686.js",revision:"c2e90d55249ab686"},{url:"/conference/2022-2023/_next/static/chunks/280-90c9af11ca72a3db.js",revision:"90c9af11ca72a3db"},{url:"/conference/2022-2023/_next/static/chunks/372.8e1940b37dca7114.js",revision:"8e1940b37dca7114"},{url:"/conference/2022-2023/_next/static/chunks/4c744e84-0e901c0105c4c6bd.js",revision:"0e901c0105c4c6bd"},{url:"/conference/2022-2023/_next/static/chunks/752-724f22a1a23b4b4a.js",revision:"724f22a1a23b4b4a"},{url:"/conference/2022-2023/_next/static/chunks/framework-57a52fb8e19bc586.js",revision:"57a52fb8e19bc586"},{url:"/conference/2022-2023/_next/static/chunks/main-1cb4e7a888445c2e.js",revision:"1cb4e7a888445c2e"},{url:"/conference/2022-2023/_next/static/chunks/pages/%5Blang%5D-585831d155992b17.js",revision:"585831d155992b17"},{url:"/conference/2022-2023/_next/static/chunks/pages/%5Blang%5D/code-for-conduct-cc9f092748701e3c.js",revision:"cc9f092748701e3c"},{url:"/conference/2022-2023/_next/static/chunks/pages/%5Blang%5D/contact-6f3800f6361714b3.js",revision:"6f3800f6361714b3"},{url:"/conference/2022-2023/_next/static/chunks/pages/%5Blang%5D/privacy-policy-4fca266b1cdc384b.js",revision:"4fca266b1cdc384b"},{url:"/conference/2022-2023/_next/static/chunks/pages/_app-e94f1042b1e96e08.js",revision:"e94f1042b1e96e08"},{url:"/conference/2022-2023/_next/static/chunks/pages/_error-ec76108ee1ddf888.js",revision:"ec76108ee1ddf888"},{url:"/conference/2022-2023/_next/static/chunks/pages/index-f3b5f5a7063ea132.js",revision:"f3b5f5a7063ea132"},{url:"/conference/2022-2023/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/conference/2022-2023/_next/static/chunks/reactPlayerDailyMotion.2515fa44c4a384fa.js",revision:"2515fa44c4a384fa"},{url:"/conference/2022-2023/_next/static/chunks/reactPlayerFacebook.30acdda010281f87.js",revision:"30acdda010281f87"},{url:"/conference/2022-2023/_next/static/chunks/reactPlayerFilePlayer.f78f145e63348952.js",revision:"f78f145e63348952"},{url:"/conference/2022-2023/_next/static/chunks/reactPlayerKaltura.98d019806426e401.js",revision:"98d019806426e401"},{url:"/conference/2022-2023/_next/static/chunks/reactPlayerMixcloud.aa504b3f27bfb62c.js",revision:"aa504b3f27bfb62c"},{url:"/conference/2022-2023/_next/static/chunks/reactPlayerPreview.af56ef4efaaa1a7b.js",revision:"af56ef4efaaa1a7b"},{url:"/conference/2022-2023/_next/static/chunks/reactPlayerSoundCloud.c8f57b61ef1b33b9.js",revision:"c8f57b61ef1b33b9"},{url:"/conference/2022-2023/_next/static/chunks/reactPlayerStreamable.fc8799dfc0a7017b.js",revision:"fc8799dfc0a7017b"},{url:"/conference/2022-2023/_next/static/chunks/reactPlayerTwitch.f38c3b1bb2dbd6be.js",revision:"f38c3b1bb2dbd6be"},{url:"/conference/2022-2023/_next/static/chunks/reactPlayerVidyard.cf77ef07026827f3.js",revision:"cf77ef07026827f3"},{url:"/conference/2022-2023/_next/static/chunks/reactPlayerVimeo.1d8aed584f963238.js",revision:"1d8aed584f963238"},{url:"/conference/2022-2023/_next/static/chunks/reactPlayerWistia.135cfe3d79b2d35c.js",revision:"135cfe3d79b2d35c"},{url:"/conference/2022-2023/_next/static/chunks/reactPlayerYouTube.512f571fffc812eb.js",revision:"512f571fffc812eb"},{url:"/conference/2022-2023/_next/static/chunks/webpack-b3965dddde4d9d4e.js",revision:"b3965dddde4d9d4e"},{url:"/conference/2022-2023/_next/static/css/3f27a443fadebb2a.css",revision:"3f27a443fadebb2a"},{url:"/conference/2022-2023/_next/static/css/50a4e4655f86309a.css",revision:"50a4e4655f86309a"},{url:"/conference/2022-2023/_next/static/css/78e519b65ec7c6ce.css",revision:"78e519b65ec7c6ce"},{url:"/conference/2022-2023/_next/static/w5TLalHjAPx8V72N-ozM-/_buildManifest.js",revision:"c1c5399773ab1a0f277899da1907b621"},{url:"/conference/2022-2023/_next/static/w5TLalHjAPx8V72N-ozM-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/conference/2022-2023",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:n,state:s})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const c=e.pathname;return!c.startsWith("/api/auth/")&&!!c.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
