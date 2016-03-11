// factory
angular
    .module('smarterview')
    .controller('LessonDetailCtrl', LessonDetailCtrl);

LessonDetailCtrl.$inject = ['$scope','$state','$stateParams', 'Data'];

function LessonDetailCtrl($scope, $state,  $stateParams, Data) {
	var vm = this;
    $scope.lesson = Data.getLessonDetail($stateParams.lessonID).data; //sets lesson to the specific lesson for this ID
}