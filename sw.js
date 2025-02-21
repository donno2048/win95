self.addEventListener("install", e => e.waitUntil(caches.open("assets").then(cache => cache.addAll([
    "win95.zip",
    "bliss.png",
    "js-dos.js",
    "index.html",
    "wdosbox.js",
    "js-dos.js.map",
    "wdosbox.wasm.js",
]))));

self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(res => res || fetch(e.request))));
