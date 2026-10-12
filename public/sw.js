// Monetag service worker (must be served from the site root: /sw.js)
// NOTE: If Monetag's dashboard gives you an sw.js for this zone (291880),
// replace this file's contents with theirs.
self.options = {
  "domain": "quge5.com",
  "zoneId": 291880
};
self.lary = "";
importScripts('https://quge5.com/act/files/service-worker.min.js?r=sw');
