// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js





angular.module('smarterview', ['ionic',  'yaru22.md', 'ngCookies'])

.run(function(){
  var APPLICATION_ID = 'A9058C57-61DE-A0EF-FF76-DB1711200A00',
    SECRET_KEY = '5CBF309E-5227-9207-FF81-1A9B52D92F00',
    VERSION = 'v1'; //default application version;
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
    .state('tab.lessons', {
      url: '/lessons',
      views: {
        'tab-lessons': {
          templateUrl: 'templates/tab-lessons.html',
          controller: 'LessonsCtrl'
        }
      }
    })
    .state('tab.lesson-detail', {
      url: '/lessons/:lessonID',
      views: {
        'tab-lessons': {
          templateUrl: 'templates/tab-lesson-detail.html',
          controller: 'LessonDetailCtrl'
        }
      }
    })


  .state('login', {
    url: '/login',
        templateUrl: 'templates/tab-login.html',
        controller: 'LoginCtrl'
      
    
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
