const CACHE_NAME = 'red-green-flag-v1';
const ASSETS = [
  '/red-green-flag/',
  '/red-green-flag/index.html',
  '/red-green-flag/css/style.css',
  '/red-green-flag/js/app.js',
  '/red-green-flag/js/i18n.js',
  '/red-green-flag/js/locales/ko.json',
  '/red-green-flag/js/locales/en.json',
  '/red-green-flag/js/locales/ja.json',
  '/red-green-flag/js/locales/zh.json',
  '/red-green-flag/js/locales/hi.json',
  '/red-green-flag/js/locales/ru.json',
  '/red-green-flag/js/locales/es.json',
  '/red-green-flag/js/locales/pt.json',
  '/red-green-flag/js/locales/id.json',
  '/red-green-flag/js/locales/tr.json',
  '/red-green-flag/js/locales/de.json',
  '/red-green-flag/js/locales/fr.json',
  '/red-green-flag/manifest.json',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (!event.request.url.startsWith(self.location.origin)) return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetched = fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
