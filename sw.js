self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("love-team").then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json"
            ]);
        })
    );
});