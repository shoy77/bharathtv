const CACHE_NAME = 'bharathtv-cache-v1';
const urlsToCache = [
  '/bharathtv/',
  '/bharathtv/index.html',
  '/bharathtv/manifest.json',
  '/bharathtv/icons/icon-192x192.png',
  '/bharathtv/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app shell');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
