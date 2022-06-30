!function(){"use strict";var e={},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}},c=!0;try{e[n](a,a.exports,r),c=!1}finally{c&&delete t[n]}return a.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,a){if(!n){var c=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],a=e[l][2];for(var i=!0,u=0;u<n.length;u++)(!1&a||c>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(i=!1,a<c&&(c=a));if(i){e.splice(l--,1);var f=o();void 0!==f&&(t=f)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]}}(),r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))},r.u=function(e){return"static/chunks/"+{11:"reactPlayerFilePlayer",55:"reactPlayerWistia",121:"reactPlayerFacebook",125:"reactPlayerSoundCloud",216:"reactPlayerTwitch",261:"reactPlayerKaltura",439:"reactPlayerYouTube",546:"reactPlayerStreamable",596:"reactPlayerDailyMotion",664:"reactPlayerPreview",667:"reactPlayerMixcloud",743:"reactPlayerVimeo",965:"reactPlayerVidyard"}[e]+"."+{11:"f78f145e63348952",55:"135cfe3d79b2d35c",121:"30acdda010281f87",125:"c8f57b61ef1b33b9",216:"f38c3b1bb2dbd6be",261:"98d019806426e401",439:"512f571fffc812eb",546:"fc8799dfc0a7017b",596:"2515fa44c4a384fa",664:"af56ef4efaaa1a7b",667:"aa504b3f27bfb62c",743:"1d8aed584f963238",965:"cf77ef07026827f3"}[e]+".js"},r.miniCssF=function(e){return"static/css/"+{166:"28c42bb555b48081",355:"b04d82041d23249e",484:"56703c38bf570240",542:"b04d82041d23249e",839:"b04d82041d23249e",888:"d107e7910814055c"}[e]+".css"},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="_N_E:";r.l=function(n,o,a,c){if(e[n])e[n].push(o);else{var i,u;if(void 0!==a)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=r.tu(n)),e[n]=[o];var s=function(t,r){i.onerror=i.onload=null,clearTimeout(b);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;r.tt=function(){return void 0===e&&(e={createScriptURL:function(e){return e}},"undefined"!==typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("nextjs#bundler",e))),e}}(),r.tu=function(e){return r.tt().createScriptURL(e)},r.p="/conference/2021/_next/",function(){var e={272:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else if(272!=t){var a=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=a);var c=r.p+r.u(t),i=new Error;r.l(c,(function(n){if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",i.name="ChunkLoadError",i.type=a,i.request=c,o[1](i)}}),"chunk-"+t,t)}else e[t]=0},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,c=n[0],i=n[1],u=n[2],f=0;if(c.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(u)var l=u(r)}for(t&&t(n);f<c.length;f++)a=c[f],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self.webpackChunk_N_E=self.webpackChunk_N_E||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();