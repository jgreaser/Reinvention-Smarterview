// factory
angular
    .module('smarterview')
    .factory('BackendLessBind', BackendLessBind);

BackendLessBind.$inject = [];

function BackendLessBind() {

    // ************* LOGOUT ****************
    function logoutResponder() {
        function handleResponse() {
            var isValidLogin = Backendless.UserService.isValidLogin();
            console.log("Is user logged in? - " + isValidLogin);
        }

        function handleFault() {
            console.log("Server reported an error " + backendlessFault.getMessage());
        }
    }

    // ************* CHECK STATUS ****************

    function checkLoginStatus() {
        //  console.log("checking status in services-backendless-bind...it says");
        //  console.log(Backendless.UserService.isValidLogin());
        var response = Backendless.UserService.isValidLogin();
        //console.log("response is " + response);
        return response;
    }

    return {
        login: function() {
        },
        logout: function() {
            Backendless.UserService.logout(logoutResponder);
            console.log("logged out!");
        },
        checkstatus: function() {
            return checkLoginStatus();
        }
    };
}