// Where the Magic Happens //

var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);
var appControllers = angular.module('appControllers',[]);

    myApp.config(['$routeProvider', function($routeProvider){
        $routeProvider. // this is method chaining
            when("/library", {
                templateUrl: "/views/library.html"
            }).
            when("/addbook", {
                templateUrl: "/views/addbook.html"
            }).
            otherwise({
                redirectTo: '/library'
            })
    }]);