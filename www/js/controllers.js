angular.module('smarterview.controllers', [])

.controller('DashCtrl', function($scope) {})

/*.controller('LessonsCtrl', function($scope, Data) {
  var vm = this;
  vm.message = "Big list of lessons here, you pick one from a drop-down, it shows up";
  vm.lessonDetail = Data.getLessonDetail(1)[0].data;
  console.log(vm.lessonDetail);
  Data.getLessons();

})
*/
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
