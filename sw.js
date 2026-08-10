// sw.js — GitHub Pages 用の最小構成

const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",            // index.html
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
];

// インストール時にキャッシュ
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// 有効化
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// キャッシュ優先の fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
