myApp.controller("StartController", ['$scope', '$http', function($scope, $http){
    $scope.heading = "Welcome to your Book Stack!";
    $scope.resultsHeading = "Here are your results!";
    //$scope.dataOutput = GetResultsFactory.booksArray;
    $scope.titleData = {};
    $scope.titleOutput = [];
    $scope.authorData = {};
    $scope.authorOutput = [];


    $scope.callFunctions = function(){
        $scope.getTitle();
    };

    $scope.getTitle = function() {

        $http.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + $scope.search)
            .then(function (response) {
                if(response.status !== 200){
                    throw new Error('Failed to fetch cats from the API');
                }
                $scope.titleObject = {};
                $scope.titleData = {};
                $scope.newBook = {};
                $scope.allBookData = [];
                //$scope.titleOutput = response.data;
                console.log(response.data);
                for (var i = 0; i < response.data.items.length; i++) {
                    $scope.titleData.name = response.data.items[i].volumeInfo.title;
                    $scope.titleData.author = response.data.items[i].volumeInfo.authors;
                    $scope.titleData.pubDate = response.data.items[i].volumeInfo.publishedDate;
                    $scope.titleData.description = response.data.items[i].volumeInfo.description;
                    $scope.newBook = {name: $scope.titleData.name, author: $scope.titleData.author, pubDate: $scope.titleData.pubDate, description: $scope.titleData.description};
                    $scope.allBookData.push($scope.newBook);
                    console.log($scope.allBookData);

                }
                //return $scope.allBookData;
            });
    };
    $scope.showInfo = false;
    $scope.showFunction = function(){
        $scope.showInfo = true;
    };

}]);