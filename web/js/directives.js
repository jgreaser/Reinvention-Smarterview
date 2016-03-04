//Important Variables -> fillerVideo sets the ID of the filler video

angular.module('smarterview.directives', [])


//got this from where???? need to google it to source it properly
.directive('myYoutube', function($sce) {
   console.log("myVideo");
    return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        var fillerVideo = '0fYL_qiDYf0';//FILLER VIDEO - currently https://www.youtube.com/watch?v=0fYL_qiDYf0
        scope.$watch('code', function (newVal) {
           if (newVal != undefined) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
           else {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + fillerVideo);
           }
        });
    }

    }
});