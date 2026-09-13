self.addEventListener('install', e=>{e.waitUntil(caches.open('lm-v1').then(c=>c.addAll(['./','./index.html','./style.css','./app.js','./quotes.js','./icon.png'])))});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
