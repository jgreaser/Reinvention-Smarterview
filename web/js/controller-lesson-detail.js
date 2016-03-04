// factory
angular
    .module('smarterview')
    .controller('LessonDetailCtrl', LessonDetailCtrl);

LessonDetailCtrl.$inject = ['$scope', '$stateParams', 'Data'];

function LessonDetailCtrl($scope, $stateParams, Data) {

    $scope.lessonInfo = Data.get($stateParams.lessonID); //this get the lesson ID from the URL

    $scope.lesson = Data.getLessonDetail($stateParams.lessonID).data; //sets lesson to the specific lesson for this ID

}