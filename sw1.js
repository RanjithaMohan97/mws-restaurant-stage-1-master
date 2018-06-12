
let cacheName = 'res-v1';
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('Opened cache');
			return cache.addAll([
				'/',
				'index.html',
				'restaurant.html',
				'css/styles.css',
				'js/dbhelper.js',
				'js/main.js',
				'js/restaurant_info.js',
				'js/sw.js',
				'data/restaurants.json',
				'img/1.jpg',
 				 'img/2.jpg',
 				 'img/3.jpg',
  				'img/4.jpg',
  				'img/5.jpg',
  				'img/6.jpg',
  				'img/7.jpg',
  				'img/8.jpg',
  				'img/9.jpg',
  				'img/10.jpg',
			
			]);
		})
	);
});
self.addEventListener('activate',  function(event) {
  event.waitUntil(
  	caches.keys().then(function(cname){
  		return Promise.all(
  			cname.filter(function(cacheNames){
  				return cacheNames.startsWith('res-')&&cacheNames!=cacheName;
  			}).map(function(cacheNames){
  				return caches.delete(cacheNames);
  			})
  			);

  })
  );
});
self.addEventListener('fetch', function(event){
	
	event.respondWith(
		caches.match(event.request,{ignoreSearch:true}).then(function(response) {
			return response || fetch(event.request);
		})
		);
});