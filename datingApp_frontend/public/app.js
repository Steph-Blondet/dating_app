console.log('dating app working');

var app = angular.module('dating_app', []);

app.controller('mainController', ['$http', function($http){
    this.message = "dating app ready to go";
    this.daters = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/users'
    }).then(function(response) {
        console.log(response);
        this.daters = response.data;
        console.log(this.daters);

        var datersLeft = response.data.slice(0,3);
        this.datersLeft = datersLeft;
        console.log(datersLeft);

        var datersRight = response.data.slice(3);
        this.datersRight = datersRight;
        console.log(datersRight);
    }.bind(this));

}])
