// Where the Magic Happens //

var myApp = angular.module('myApp', []);
var apiKey = "0RWlm42WC55hsq6TnPQrA";

myApp.controller("StartController", ['$scope', function($scope){
    $scope.heading = "Welcome to your Book Stack!";
    $scope.resultsHeading = "Here are your results!";

}]);

myApp.controller("SearchController", ['$scope', '$http', 'GetResultsFactory', function($scope, $http, GetResultsFactory){

    $scope.fetch = function(){
        $http.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + $scope.search)
            .then(function(response){
                if(response.status !== 200){
                    console.log("Didn't work");
                    throw new Error(err);

                }
                GetResultsFactory.newData(response);

            });
        }
    }]);

myApp.controller('AppendController', function($scope, AddResults){
    $scope.addingW = AddResults.addingW;
});

myApp.factory('AddResults', function() {

    //Private
    var whichWords = function(){
        console.log("Cliced");
        return "Adding to DOM!";
    };

    //PUblic
    var publicApi = {
        addingW: whichWords(),
        otherWords: "Hi there"
    };
    return publicApi;
});

myApp.factory("GetResultsFactory", function(){
    var newData = function(response) {
        for (var i = 0; i < response.data.items.length; i++) {
            console.log("For Loop: ", response.data.items[i].volumeInfo.title);
            dataOutPut = response.data.items[i].volumeInfo.title;
            //newData = response.data.items[i].title;
        }
    };
    var publicData = {
        //theNewData: newData()
        newData: function(response){
            newData(response);
        }
    };
    return publicData;
});
