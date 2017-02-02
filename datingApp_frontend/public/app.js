console.log('dating app working');

var app = angular.module('dating_app', []);

app.controller('mainController', ['$http', function($http){
    this.message = "dating app ready to go";

    $http({
        method: 'GET',
        url: 'http://localhost:3000/users'
    }).then(function(response) {
        console.log(response);
    });

}])
