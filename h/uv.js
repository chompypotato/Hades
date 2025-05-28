importScripts('/h/uv/uv.bundle.js');
importScripts('/h/uv/uv.config.js');
importScripts('/h/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
