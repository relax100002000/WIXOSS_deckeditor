/* WIXOSS カード検索 service worker
 * 同網域檔案（頁面、card_info.js、price_info.js、圖示）採「網路優先、離線時用快取」，
 * 所以每次有網路開啟都會拿到最新卡表與卡價；卡圖（takaratomy 外連）交給瀏覽器快取，不經過這裡。 */
var CACHE = 'wxsearch-v2';
var PRECACHE = [
  './', './index.html', './app.js', './style.css', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png',
  '../js/card_info.js', '../js/price_info.js'
];
self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(PRECACHE); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k.indexOf('wxsearch-') == 0 && k != CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e){
  var req = e.request;
  if(req.method != 'GET' || new URL(req.url).origin != self.location.origin) return;
  e.respondWith(
    fetch(req, {cache: 'no-cache'}).then(function(res){
      if(res && res.ok){ var copy = res.clone(); caches.open(CACHE).then(function(c){ c.put(req, copy); }); }
      return res;
    }).catch(function(){
      return caches.match(req, {ignoreSearch: true}).then(function(r){
        return r || (req.mode == 'navigate' ? caches.match('./index.html') : Response.error());
      });
    })
  );
});
