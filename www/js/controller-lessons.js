

// factory
angular
    .module('smarterview')
    .controller('LessonsCtrl', LessonsCtrl);

LessonsCtrl.$inject = ['Data'];

function LessonsCtrl(Data) {
  var vm = this;



  vm.message = "Big list of lessons here, you pick one from a drop-down, it shows up";

  vm.lessons = Data.getLessons();
  console.log(vm.lessons);




  

}

