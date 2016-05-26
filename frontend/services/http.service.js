/**
 * Created by alembers on 5/21/16.
 */
(function(heatMapModule){

    var HttpService = function($http){

        this.addUser = addUser;
        this.checkUserCredentials = checkUserCredentials;
        this.buildHeatMap = buildHeatMap;
        this.getFilters = getFilters;

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

        function buildHeatMap(config, successCbk, errorCbk){

            $http({
                method: 'POST',
                url: 'http://localhost:8500/dhm/heat_map/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    'fromDate': config.fromDate,
                    'toDate': config.toDate,
                    'reportType': config.reportType,
                    'marketingSource': config.marketingSource,
                    'productType': config.productType,
                    'polygonSize': config.polygonSize,
                    'user': config.user
                }
            }).then(successCbk, errorCbk);
        }

        function getFilters(config, successCbk, errorCbk){

            $http({
                method: 'POST',
                url: 'http://localhost:8500/dhm/filter_values/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    'email': config.email
                }
            }).then(successCbk, errorCbk);
        }
    };

    HttpService.$inject = ['$http'];
    heatMapModule.service('HttpService', HttpService);

})(heatMapModule);