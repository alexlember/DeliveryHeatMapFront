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

        .state('signup', {
            url: "/signup",
            views:{
                'main':{
                    templateUrl: "./components/signUp/signUp.html",
                    controller: 'signUpController'
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

        .state('about', {
            url: "/about",
            views:{
                'main':{
                    templateUrl: "./components/about/about.html",
                    controller: 'aboutController'
                }
            }
        })

    //$locationProvider.html5Mode(true);
}]);