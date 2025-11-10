self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('bharathtv-cache').then((cache) => {
      return cache.addAll([
        '/bharathtv/',
        '/bharathtv/index.html',
        '/bharathtv/manifest.json',
        '/bharathtv/icons/icon-192x192.png',
        '/bharathtv/icons/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
