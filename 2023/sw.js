if(!self.define){let e,n={};const c=(c,s)=>(c=new URL(c+".js",s).href,n[c]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=n,document.head.appendChild(e)}else e=c,importScripts(c),n()})).then((()=>{let e=n[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let i={};const r=e=>c(e,t),o={module:{uri:t},exports:i,require:r};n[t]=Promise.all(s.map((e=>o[e]||r(e)))).then((e=>(a(...e),i)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/conference/2023/_next/static/aLMbEJLVhaKOy2eI0_T1P/_buildManifest.js",revision:"b679683c495a6aa974cf39bca5e85dc1"},{url:"/conference/2023/_next/static/aLMbEJLVhaKOy2eI0_T1P/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/conference/2023/_next/static/chunks/266-4d19b380ff8390cd.js",revision:"4d19b380ff8390cd"},{url:"/conference/2023/_next/static/chunks/372.8e1940b37dca7114.js",revision:"8e1940b37dca7114"},{url:"/conference/2023/_next/static/chunks/676-4523a82da8e20470.js",revision:"4523a82da8e20470"},{url:"/conference/2023/_next/static/chunks/752-724f22a1a23b4b4a.js",revision:"724f22a1a23b4b4a"},{url:"/conference/2023/_next/static/chunks/framework-57a52fb8e19bc586.js",revision:"57a52fb8e19bc586"},{url:"/conference/2023/_next/static/chunks/main-362db970adf0ce5b.js",revision:"362db970adf0ce5b"},{url:"/conference/2023/_next/static/chunks/pages/%5Blang%5D-535b42b3179a5070.js",revision:"535b42b3179a5070"},{url:"/conference/2023/_next/static/chunks/pages/%5Blang%5D/code-for-conduct-d68506d788d871e0.js",revision:"d68506d788d871e0"},{url:"/conference/2023/_next/static/chunks/pages/%5Blang%5D/contact-385d83834108caa3.js",revision:"385d83834108caa3"},{url:"/conference/2023/_next/static/chunks/pages/%5Blang%5D/privacy-policy-09af6f7c98b3a6e4.js",revision:"09af6f7c98b3a6e4"},{url:"/conference/2023/_next/static/chunks/pages/_app-253a2bd4640fb92f.js",revision:"253a2bd4640fb92f"},{url:"/conference/2023/_next/static/chunks/pages/_error-ec76108ee1ddf888.js",revision:"ec76108ee1ddf888"},{url:"/conference/2023/_next/static/chunks/pages/index-f3b5f5a7063ea132.js",revision:"f3b5f5a7063ea132"},{url:"/conference/2023/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/conference/2023/_next/static/chunks/reactPlayerDailyMotion.2515fa44c4a384fa.js",revision:"2515fa44c4a384fa"},{url:"/conference/2023/_next/static/chunks/reactPlayerFacebook.30acdda010281f87.js",revision:"30acdda010281f87"},{url:"/conference/2023/_next/static/chunks/reactPlayerFilePlayer.f78f145e63348952.js",revision:"f78f145e63348952"},{url:"/conference/2023/_next/static/chunks/reactPlayerKaltura.98d019806426e401.js",revision:"98d019806426e401"},{url:"/conference/2023/_next/static/chunks/reactPlayerMixcloud.aa504b3f27bfb62c.js",revision:"aa504b3f27bfb62c"},{url:"/conference/2023/_next/static/chunks/reactPlayerPreview.af56ef4efaaa1a7b.js",revision:"af56ef4efaaa1a7b"},{url:"/conference/2023/_next/static/chunks/reactPlayerSoundCloud.c8f57b61ef1b33b9.js",revision:"c8f57b61ef1b33b9"},{url:"/conference/2023/_next/static/chunks/reactPlayerStreamable.fc8799dfc0a7017b.js",revision:"fc8799dfc0a7017b"},{url:"/conference/2023/_next/static/chunks/reactPlayerTwitch.f38c3b1bb2dbd6be.js",revision:"f38c3b1bb2dbd6be"},{url:"/conference/2023/_next/static/chunks/reactPlayerVidyard.cf77ef07026827f3.js",revision:"cf77ef07026827f3"},{url:"/conference/2023/_next/static/chunks/reactPlayerVimeo.1d8aed584f963238.js",revision:"1d8aed584f963238"},{url:"/conference/2023/_next/static/chunks/reactPlayerWistia.135cfe3d79b2d35c.js",revision:"135cfe3d79b2d35c"},{url:"/conference/2023/_next/static/chunks/reactPlayerYouTube.512f571fffc812eb.js",revision:"512f571fffc812eb"},{url:"/conference/2023/_next/static/chunks/webpack-713bb26d6b7f7495.js",revision:"713bb26d6b7f7495"},{url:"/conference/2023/_next/static/css/2185dd89680f9d2e.css",revision:"2185dd89680f9d2e"},{url:"/conference/2023/_next/static/css/353950257f0fda77.css",revision:"353950257f0fda77"},{url:"/conference/2023/_next/static/css/3c949760283177c1.css",revision:"3c949760283177c1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/conference/2023",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:c,state:s})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));