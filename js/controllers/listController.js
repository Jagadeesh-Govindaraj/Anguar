(function(){
	'use strict';
		
angular.module('app')
	.controller('listController',listController);
	
listController.$inject = ['photoFactory'];
	
function listController(photoFactory){
	var vm = this;
	
	vm.photos = [];

	vm.photos = photoFactory.Photos.query();
	
	

	// photoFactory.getPhotos().success(function(result){
	// 	vm.photos = result;
	// });
	
}	
	
	
})();
	



