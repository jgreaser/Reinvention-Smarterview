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
})

//got this from where???? need to google it to source it properly
.directive('myYoutube', function($sce) {
   console.log("myVideo");
    return {
     restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        console.log('here');
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
        });
    }

    }
});
