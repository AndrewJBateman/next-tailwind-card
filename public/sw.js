if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/4s27CqeB51e2FSHQjVf9S/_buildManifest.js",revision:"4s27CqeB51e2FSHQjVf9S"},{url:"/_next/static/4s27CqeB51e2FSHQjVf9S/_ssgManifest.js",revision:"4s27CqeB51e2FSHQjVf9S"},{url:"/_next/static/chunks/1bfc9850-5956746bf7f15d49f299.js",revision:"4s27CqeB51e2FSHQjVf9S"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"4s27CqeB51e2FSHQjVf9S"},{url:"/_next/static/chunks/main-dfa7defa2928ad2ecd0d.js",revision:"4s27CqeB51e2FSHQjVf9S"},{url:"/_next/static/chunks/pages/_app-f118d54cba0ebc4e6657.js",revision:"4s27CqeB51e2FSHQjVf9S"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"4s27CqeB51e2FSHQjVf9S"},{url:"/_next/static/chunks/pages/index-a7ef52e0f52eb038b0b6.js",revision:"4s27CqeB51e2FSHQjVf9S"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"4s27CqeB51e2FSHQjVf9S"},{url:"/_next/static/chunks/webpack-61f1b6d34e7ba415b8c1.js",revision:"4s27CqeB51e2FSHQjVf9S"},{url:"/_next/static/css/7139a80835ffa8fa6664.css",revision:"4s27CqeB51e2FSHQjVf9S"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/apple-icon-180.png",revision:"762231d142fc75a0c4d19cf50c6805a5"},{url:"/icons/apple-splash-1125-2436.jpg",revision:"5257eb5c82d9bac4c887695c3bb5c4d8"},{url:"/icons/apple-splash-1136-640.jpg",revision:"f96e8c6305a416a92514fbc83e17cc4c"},{url:"/icons/apple-splash-1170-2532.jpg",revision:"1f17b8ea7eee028f71c34fe02c41edd9"},{url:"/icons/apple-splash-1242-2208.jpg",revision:"3b490773f1b551aa7af087c1399ff568"},{url:"/icons/apple-splash-1242-2688.jpg",revision:"71eb4ceed4d83f88b35cd09497055a8e"},{url:"/icons/apple-splash-1284-2778.jpg",revision:"43c8de0806bfab4141a16a407f54ee41"},{url:"/icons/apple-splash-1334-750.jpg",revision:"f93fca84edd004bdab242a5d5fb6f723"},{url:"/icons/apple-splash-1536-2048.jpg",revision:"107f6e026cd51f0e71710d5b3df5838b"},{url:"/icons/apple-splash-1620-2160.jpg",revision:"85331e051ba5b990c8e45cbee4a82ac1"},{url:"/icons/apple-splash-1668-2224.jpg",revision:"6912229c2cda238aee07adf64ea7303e"},{url:"/icons/apple-splash-1668-2388.jpg",revision:"ca40054fc48d411482ebba6fe552549c"},{url:"/icons/apple-splash-1792-828.jpg",revision:"ed9b76476dac2a96133689cafdae6a6a"},{url:"/icons/apple-splash-2048-1536.jpg",revision:"816e18d0b1a3c321ebfec52d38e35eb4"},{url:"/icons/apple-splash-2048-2732.jpg",revision:"551c87340de69c00094484d23100272c"},{url:"/icons/apple-splash-2160-1620.jpg",revision:"04bfcac2672c9f5e04a8afdc1cf3c0c2"},{url:"/icons/apple-splash-2208-1242.jpg",revision:"8593cc2bd59decbad921de56a938641d"},{url:"/icons/apple-splash-2224-1668.jpg",revision:"49f1ca683392c72d9607b2783ec21910"},{url:"/icons/apple-splash-2388-1668.jpg",revision:"cdc9cc267601e9af2a653d38d32506a7"},{url:"/icons/apple-splash-2436-1125.jpg",revision:"6db2fd4fd97028723dcbc4d372c4eed0"},{url:"/icons/apple-splash-2532-1170.jpg",revision:"cc84a8a2bbe5a4d7296be11852f8a3b2"},{url:"/icons/apple-splash-2688-1242.jpg",revision:"cdba232b23f3214208d7337180f8329b"},{url:"/icons/apple-splash-2732-2048.jpg",revision:"e456dcd8db88a3df146b68b9c4a43255"},{url:"/icons/apple-splash-2778-1284.jpg",revision:"748d6c1e981de79cfdf5cf1dbde8ac9d"},{url:"/icons/apple-splash-640-1136.jpg",revision:"f176de206fd89923f66d8675554645f8"},{url:"/icons/apple-splash-750-1334.jpg",revision:"658160eecd3a363893dee864fe8caaa9"},{url:"/icons/apple-splash-828-1792.jpg",revision:"7d007a7789020c1e3eddc03a4d3b4a45"},{url:"/icons/manifest-icon-192.png",revision:"92ebdd71bee9b41450c97581eb653958"},{url:"/icons/manifest-icon-512.png",revision:"757ef0182d86438aa65355dd958d1844"},{url:"/manifest.json",revision:"174ff537074bb4f2f2d9642af300dce7"},{url:"/meter.png",revision:"e141def51b88d093ba708c74459fcfd2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
