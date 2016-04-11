/**
 * Created by alembers on 4/11/16.
 */
heatMapModule.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/main");
    $stateProvider

        .state('main', {
            url: "/main",
            views:{
                'main':{
                    templateUrl: "./components/main/main.html",
                    controller: 'mainController'
                }
            }
        })

    //$locationProvider.html5Mode(true);
}]);