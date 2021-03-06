/**
 * Created by alembers on 4/11/16.
 */
heatMapModule.controller('loginController',['$scope', '$state', '$window', 'HttpService', 'SharedService',
                         function ($scope, $state, $window, HttpService, SharedService) {

    $scope.email = '';
    $scope.password = '';

    $scope.checkUserCredentials = function() {


        console.log('user email: ' + $scope.email);
        console.log('user password: ' + $scope.password);

        HttpService.checkUserCredentials(
            {
                email: $scope.email,
                password: $scope.password
            },
            function (positiveResponse) {
                console.log('http call post user succeed');

                var Email = $scope.email;
                var Password = $scope.password;
                SharedService.data.user = $scope.email;

                $window.location = '#/dashboard';
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