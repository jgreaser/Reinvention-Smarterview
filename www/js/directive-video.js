angular
    .module('smarterview')
    .directive('myVideo', myVideo);

function myVideo() {
    console.log("myVideo");
    return {
    restrict: 'E',
    template: '<p>TEST</p>'
  };
}