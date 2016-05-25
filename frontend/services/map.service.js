/**
 * Created by alembers on 5/21/16.
 */
(function(heatMapModule){

    var MapService = function(){
        
        // var myMap = null
        // this.init = init;
        //
        // function init(){
        //     myMap = new ymaps.Map("map", {
        //         center: [55.76, 37.64],
        //         zoom: 7,
        //         controls: [new ymaps.control.ZoomControl()]
        //     });
        // }
    };

    //MapService.$inject = ['ymaps'];
    heatMapModule.service('MapService', MapService);

})(heatMapModule);