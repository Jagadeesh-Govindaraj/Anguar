(function(){
	angular
		.module('app')
		.directive('bigPhoto',bigPhoto);
		
   
		
function bigPhoto(){
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: 'views/big-photo.html',
    link :function(scope,element,attrs, ctrl, transclude){
      scope.show = false;
      
      transclude(function(clone) {
        element.append(clone);
      });
      
      element.on('click',function(){
        scope.$apply(function(){
          scope.show = !scope.show;
        });
      });
    }
  };

}
	
})();