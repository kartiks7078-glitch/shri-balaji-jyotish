const CACHE = "balaji-jyotish-v4";
const FILES = ["./", "./index.html", "./styles.css", "./app.js", "./manifest.webmanifest", "./privacy.html", "./assets/icon.svg", "./assets/mehandipur-balaji.jpg", "./assets/rudraksha.jpg", "./assets/moti.jpg", "./assets/moonga.jpg", "./assets/heera.jpg", "./assets/panna.jpg", "./assets/manikya.jpg", "./assets/neelam.jpg", "./assets/pukhraj.jpg"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES))));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
