const CACHE_NAME = 'tadbir2025-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Qo'shimcha fayllar bo'lsa shu yerga qo'shing
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
