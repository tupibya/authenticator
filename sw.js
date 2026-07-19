self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  self.skipWaiting(); // 即時有効化
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
});

self.addEventListener('fetch', (event) => {
});
