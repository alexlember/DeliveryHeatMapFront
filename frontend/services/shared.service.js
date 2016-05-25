/**
 * Created by alembers on 5/21/16.
 */
(function(heatMapModule){

    var SharedService = function(){

        this.data = {
            'user' : null
        };
        
        //this.setUser = addUser;

        // function getUser(){
        //     return user;
        // }
        // function setUser(data){
        //     user = data;
        // }
    };

    //SharedService.$inject = ['$http'];
    heatMapModule.service('SharedService', SharedService);

})(heatMapModule);