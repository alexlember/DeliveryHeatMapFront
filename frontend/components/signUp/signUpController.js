/**
 * Created by alembers on 5/23/16.
 */
heatMapModule.controller('signUpController',['$scope', '$state', '$window', 'HttpService', function ($scope, $state, $window, HttpService) {

    $scope.email = '';
    $scope.userName = '';
    $scope.password= '';
    $scope.repeatPassword = '';

    $scope.addUser = function() {


        console.log('new user email: ' + $scope.email);
        console.log('new user name: ' + $scope.userName);
        console.log('user password: ' + $scope.password);
        console.log('user repeat password: ' + $scope.repeatPassword);

        HttpService.addUser(
            {
                email: $scope.email,
                userName: $scope.userName,
                password: $scope.password

            },
            function (positiveResponse) {
                console.log('http call post user succeed');

                $window.location = '#/main';
            },
            function (negativeResponse) {
                console.log('http call post user failed');
                if (negativeResponse.status === 400) {
                    //$scope.response = negativeResponse.statusText ;
                } else if (negativeResponse.status === 401) {
                    //$scope.response = negativeResponse.statusText ;
                } else if (negativeResponse.status === 404) {
                    //$scope.response = 'internal server error, status 500';
                } else if (negativeResponse.status === 500) {
                    //$scope.response = 'internal server error, status 500';
                }
            }
        );
    };
    
}]);