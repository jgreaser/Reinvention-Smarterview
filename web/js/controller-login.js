// factory
angular
    .module('smarterview')
    .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$http', '$state', '$scope', '$q', 'BackendLessBind', '$location'];

function LoginCtrl($http, $state, $scope, $q, BackendLessBind, $location) {
    var vm = this;
    vm.message = '';
    vm.userName = '';
    vm.password = '';
    vm.loginAttempted = '';
    vm.isLoggedIn = false;

    vm.login = function() {
       $http({
                  method: 'POST',
                  url: 'https://api.backendless.com/v1/users/login',
                  headers: {
                    'application-id': 'A9058C57-61DE-A0EF-FF76-DB1711200A00',
                    'secret-key': 'D13D3E8C-2752-89EF-FF98-C0974A1EB000',
                    'Content-Type': 'application/json',
                    'application-type': 'REST'},
                  data: {
                     "login" : vm.userName,
                     "password" : vm.password
                    }

                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("success");
                    vm.message = 'success';
                    vm.isLoggedIn = true;

                   console.log(response.data['user-token']);

                   $state.transitionTo('tab.lessons', {
                            location: true,
                            inherit: true,
                            relative: $state.$current,
                            notify: false
                        })
                    //return response;


                  }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                   
                   console.log("fail");
                   vm.message = 'success';

                   console.log(response);
                    return response;
                  });
    
    };

    vm.logout = function() {
        BackendLessBind.logout(vm.userName, vm.password);

    };

    vm.checkstatus = function() {
       // console.log("Check status called!");
        vm.isLoggedIn = BackendLessBind.checkstatus();

    };

    vm.checkstatus();



}