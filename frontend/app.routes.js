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

        .state('login', {
            url: "/login",
            views:{
                'main':{
                    templateUrl: "./components/login/login.html",
                    controller: 'loginController'
                }
            }
        })

        .state('dashboard', {
            url: "/dashboard",
            views:{
                'main':{
                    templateUrl: "./components/dashboard/dashboard.html",
                    controller: 'dashboardController'
                }
            }
        })

    //$locationProvider.html5Mode(true);
}]);