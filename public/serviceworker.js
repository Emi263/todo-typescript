//cache-storage of browser, fast, load images

const cacheName = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this; //refers to sw
//install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("Open chace"); //only first time opens, other time is already there

      return cache.addAll(urlsToCache);
    })
  );
});
//listen for request
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html")); //when no internet connection
    })
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(cacheName);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
