// factory
angular
    .module('smarterview')
    .controller('LessonsCtrl', LessonsCtrl);

LessonsCtrl.$inject = ['Data'];

function LessonsCtrl(Data) {
    var vm = this;
    
    vm.lessons = Data.getLessons();

	vm.showAlert = function(heading){
		if (heading == true)
			{return false;}
		else {return true;}

	};

}