// factory
angular
    .module('smarterview')
    .controller('NavigationController', NavigationController);

NavigationController.$inject = ['$state', '$stateParams'];

function NavigationController($state, $stateParams) {
	
	 var vm = this;

	vm.showNav = true;

	vm.showBack = true;
  	vm.showNext = true;

	console.log("State is");
  	console.log($state.current);


  vm.setNavigation = function(val){
    if (val == true)
      {vm.showNavButtons = true;}
    else {vm.showNavButtons = false;}
  };


  vm.getNext = function(){

      console.log($stateParams.lessonID);

      var currentLessonID = $stateParams.lessonID;
      var definitelyANumber = parseInt(currentLessonID);
      definitelyANumber++;

      vm.showNext = true;
      vm.showBack = true;
      return definitelyANumber;
    };

     vm.getLast = function(){
      console.log($stateParams.lessonID);

      var currentLessonID = $stateParams.lessonID;
      var definitelyANumber = parseInt(currentLessonID);

      if (definitelyANumber >= 1){
        definitelyANumber--;
        vm.showBack = true;
        vm.showNext = true;
        return definitelyANumber;
      }
      else{
      vm.showNext = false;
      return definitelyANumber;};
      }




	}