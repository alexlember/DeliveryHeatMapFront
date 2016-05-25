heatMapModule.directive('heatHeader', function() {
    return {
        restrict: 'AE',
        scope: {},
        templateUrl: '/directives/header/header.html',
        controller: function($scope, $window, SharedService) {

            $scope.shared = SharedService.data;

            $scope.logOut = function() {
                console.log('logging out...');
                $scope.shared.user = null;
                $window.location = '#/main';
            }

            // $scope.$watch(function () {
            //     return SharedService.user
            // }, function (user) {
            //     $scope.user = user;
            // });
        }
    };
});