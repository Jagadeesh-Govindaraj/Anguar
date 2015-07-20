(function(){
	angular
		.module('app')
		.factory('photoFactory',photoFactory);
	
	photoFactory.$inject = ['$http','$resource'];
	
	function photoFactory($http,$resource){
		var factory = {
			getPhotosByHttp:getPhotosByHttp,
			Photos:Photos()
		}
		return factory;
		
		function getPhotosByHttp() {
			 return $http.get('http://jsonplaceholder.typicode.com/photos');
		}
		
		function Photos(){
			return $resource('http://jsonplaceholder.typicode.com/photos?albumId=1');
			
		};
		
	}
	
})();