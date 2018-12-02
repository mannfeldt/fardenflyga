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

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can add to home screen
  let btnAdd = document.getElementById("install");
  btnAdd.style.display = 'block';
  btnAdd.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    
    btnAdd.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});

