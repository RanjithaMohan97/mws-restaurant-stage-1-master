if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
		navigator.serviceWorker.register('/sw1.js').then(function (registration) {
    	console.log('Service worker registered.', registration.scope);
		}).catch(function(err){
		console.log("registration failed");
});
});
}