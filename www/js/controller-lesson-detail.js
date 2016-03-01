

// factory
angular
    .module('smarterview')
    .controller('LessonDetailCtrl', LessonDetailCtrl);

LessonDetailCtrl.$inject = ['$scope', '$stateParams', 'Data'];

function LessonDetailCtrl($scope, $stateParams, Data) {
 
  $scope.lessonInfo = Data.get($stateParams.lessonID);

  $scope.lesson = Data.getLessonDetail($stateParams.lessonID).data;

  

}


