self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Erlaubt der App, Daten zu laden
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
