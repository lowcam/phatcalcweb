'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9a75b42b0ef46c1dbeaa484d7f2b4bb6",
"assets/FontManifest.json": "74e26574fdb9c6afe553ea318493d9bb",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/OverpassMono-SemiBold.ttf": "76548b7fb13d7a5ee82392c136bfeb24",
"assets/LICENSE": "82056b4c4eefa45d25a61abfe7a3a782",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "81e1592b25904354c9a21eb911e03fe8",
"/": "81e1592b25904354c9a21eb911e03fe8",
"main.dart.js": "9bc1945490ae9c5cd2e67ede2b7a5f32",
"manifest.json": "cf9db1f371be6e338c13eef88861d2b6"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
