var __scripts = document.getElementsByTagName("script");
var __currentScriptPath = __scripts[__scripts.length-1].src;

angular.module('flexForm',[])
.directive('flexForm',function(){
   	var ctrl = ['$scope',function($scope){
   		$scope.data.forEach(function(e){
   			if(!("_mouseover" in e)){
   				e._mouseover = false;
   			}
   		});
   		$scope.addMetaItem = function(){
			$scope.data.push({key:"No key",value:"No data",_mouseover:false});	
		}
		$scope.removeMetaItem = function(index){
			$scope.data.splice(index,1);
		}
   	}];
   	return{
   		restrict: 'E',
   		scope: {
   			data: '='
   		},
   		controller: ctrl,
   		templateUrl: __currentScriptPath.substring(0, __currentScriptPath.lastIndexOf('/') + 1) 
        + 'flex-form.html'
   	};
})