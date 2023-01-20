const cacheName = 'hopmania';
const appShellFiles = [
];

const contentToCache = appShellFiles;

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
});