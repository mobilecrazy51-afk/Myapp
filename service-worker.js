const CACHE_NAME = "g12-study-v1";
const urlsToCache = [
  "index.html",
  "exercise.html",
  "video.html",
  "policy.html",
  "terms.html",
  "assets/style.css",
  "assets/logo.png"
];

// Install event
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
const urlsToCache = [
  "index.html",
  "exercise.html",
  "video.html",
  "assets/style.css",
  "assets/videos/lesson1.mp4",
  "assets/pdfs/lesson1.pdf"
];