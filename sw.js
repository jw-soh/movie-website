const staticCacheName = 'site-static';
const assets = [
  '/',
  '/index.html',
  'js/app.js',
  'js/movie-notes.js',
  '/css/custom.css',
  '/img/brand-logo.png',
  'https://kit.fontawesome.com/9db8b166e2.js'
]

// install service worker
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('caching shell assets!');
      cache.addAll(assets);
    })
  )
})

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker has been activated');
})

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
})