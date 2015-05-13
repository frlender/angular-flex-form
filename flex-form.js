var __scripts = document.getElementsByTagName("script");
var __currentScriptPath = __scripts[__scripts.length-1].src;

angular.module('flexForm',[])
.directive('flexForm',function(){
   	var ctrl = ['$scope',function($scope){

         if($scope.data==undefined || $scope.data.constructor != Array || $scope.data.length==0){
            $scope.data = [
               {key:"",data:"",keyPlaceholder:"No key", dataPlaceholder:"No data"}
            ];
         }
   		$scope.data.forEach(function(e){
   				e._mouseover = false;
   		});
   	$scope.addItem = function(){
			$scope.data.push({key:"",data:"",_mouseover:false});	
		}
		$scope.removeItem = function(index){
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
.service('ffBuild',function(){
   // build data into one single object
   return function(data){
      var res = {};
      data.forEach(function(e){
         if(e.key&&e.value){
            res[e.key] = e.value;
         }
      });
      return res;
   }
})
.service('ffCollapse',function(){
   //collapse an object into an array in the format of data
   return function(obj){
      var data = [];
      for(key in obj){
         data.push({key:key,data:obj[key]});
      }
      return data;
   }
});