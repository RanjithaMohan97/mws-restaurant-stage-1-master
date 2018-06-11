navigator.serviceWorker.register('/sw1.js').then(function (reg) {
    console.log('Service worker registered.');
}).catch(function(err){
	console.log("registration failed");

});