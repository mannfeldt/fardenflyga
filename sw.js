importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
//men sparas det till cachen automatiskt eller behöver jag sätta upp precaching?
workbox.routing.registerRoute(
  /.*\.(?:js|css|html|png)/,
  workbox.strategies.staleWhileRevalidate()
);



