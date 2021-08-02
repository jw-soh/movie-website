// check if browser supports service worker
if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('service woker registered', reg))
    .catch((err) => console.log('service worker not registered', err))
}