/**
 * Created by alembers on 5/21/16.
 */
(function(heatMapModule){

    var HttpService = function($http){

        //this.getUsers = getUsers;
        this.addUser = addUser;
        this.checkUserCredentials = checkUserCredentials;
        //this.delUser = delUser;
        

        // function getUsers(successCbk, errorCbk){
        //
        //     $http({
        //         method: 'GET',
        //         url: 'http://localhost:8000/internet_store/user/'
        //     }).then(successCbk, errorCbk);
        // }

        function addUser(config, successCbk, errorCbk){

            $http({
                method: 'POST',
                url: 'http://localhost:8500/dhm/user/',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    'password': config.password,
                    'email': config.email,
                    'userName': config.userName
                }
            }).then(successCbk, errorCbk);
        }

        function checkUserCredentials(config, successCbk, errorCbk){

            $http({
                method: 'POST',
                url: 'http://localhost:8500/dhm/check_user/',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    'password': config.password,
                    'email': config.email
                }
            }).then(successCbk, errorCbk);
        }

        // function delUser($scope, successCbk, errorCbk){
        //
        //     $http({
        //         method: 'DELETE',
        //         url: 'http://localhost:8000/internet_store/user/',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         data: {
        //             'email': $scope.userToDelete
        //         }
        //     }).then(successCbk, errorCbk);
        // }

    };

    HttpService.$inject = ['$http'];
    heatMapModule.service('HttpService', HttpService);

})(heatMapModule);