/**
 * Created by alembers on 4/11/16.
 */
heatMapModule.controller('dashboardController', ['$scope', '$state', 'HttpService', 'SharedService',
    function ($scope, $state, HttpService, SharedService) {

        var _map;

        $scope.afterMapInit = function (map) {
            _map = map;
        };

        $scope.reportsTypes = [];
        $scope.polygonSizes = [];
        $scope.productTypes = [];
        $scope.marketingSources = [];

        // initialization referring for page load
        $scope.init = init;
        $scope.getFilters = getFilters;
        $scope.init();

        // Function initialize user and courier dropdown lists.
        function init() {
            $scope.getFilters = getFilters();
        }

        function getFilters() {
            HttpService.getFilters(
                {
                    email: SharedService.data.user
                },
                function (positiveResponse) {
                    console.log('http call post filters succeed');

                    $scope.reportsTypes = [];
                    $scope.polygonSizes = [];
                    $scope.productTypes = [];
                    $scope.marketingSources = [];

                    positiveResponse.data.productTypes.forEach(extractProductTypes);
                    $scope.productType = $scope.productTypes[0];

                    positiveResponse.data.marketingSources.forEach(extractMarketingSources);
                    $scope.marketingSource = $scope.marketingSources[0];

                    $scope.polygonSizes = positiveResponse.data.polygonSizes;
                    $scope.polygonSize = $scope.polygonSizes[0];

                    $scope.reportsTypes = positiveResponse.data.reportTypes;
                    $scope.reportType = $scope.reportsTypes[0];

                    $scope.toDate = new Date();

                    $scope.fromDate = new Date(
                        $scope.toDate.getFullYear(),
                        $scope.toDate.getMonth() - 1,
                        $scope.toDate.getDate());


                    console.log('filter update finished');
                },
                function (negativeResponse) {
                    console.log('http call post filters failed');
                }
            );
        }



        $scope.buildHeatMap = function () {

            console.log('ready to mape post heat_map request');

            if (SharedService.data.user !== null) {
                HttpService.buildHeatMap(
                    {
                        fromDate: $scope.fromDate,
                        toDate: $scope.toDate,
                        reportType: $scope.reportType,
                        marketingSource: $scope.marketingSource,
                        productType: $scope.productType,
                        polygonSize: $scope.polygonSize,
                        user: SharedService.data.user
                    },
                    function (positiveResponse) {
                        console.log('http call post heat map succeed');

                        console.log('draw polygones');

                        console.log('draw legend');

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
            }
        }

        function extractProductTypes(productType, index, array) {
            $scope.productTypes.push(productType.ProductTypeName);
        }

        function extractMarketingSources(marketingSource, index, array) {
            $scope.marketingSources.push(marketingSource.MarketingSourceName);
        }


    }]);