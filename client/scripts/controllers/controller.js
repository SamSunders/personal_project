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
                    $scope.titleData.bookId = response.data.items[i].id;
                    $scope.newBook = {name: $scope.titleData.name, author: $scope.titleData.author, pubDate: $scope.titleData.pubDate, description: $scope.titleData.description, bookId : $scope.titleData.bookId};
                    $scope.isSelected = $scope.titleData.bookId;
                    console.log("New Book" + $scope.titleData.bookId);
                    $scope.allBookData.push($scope.newBook);
                    console.log($scope.allBookData);
                    console.log("Book Id" + $scope.titleData.bookId);
                    console.log($scope.allBookData.bookId + "Here");


                }
                //return $scope.allBookData;
            });
    };
    $scope.showInfo = false;
    $scope.showFunction = function(newBook){
        console.log("Clicky Button");
        $scope.selectedBook = newBook;
        $scope.showInfo = true;

    };

    $scope.idSelectedBook = null;
    $scope.setSelected = function (idSelectedBook) {
        $scope.idSelectedBook = idSelectedBook;
    };
    //$scope.setSelected = function(isSelected){
    //    console.log("show" , arguments, this);
    //    if($scope.isSelected = isSelected){
    //        $scope.showInfo = true;
    //        console.log("BOOYA THE ID!!!: " + $scope.titleData.id);
    //    } else {
    //        console.log("ID's don't match");
    //        console.log("Show info: " + $scope.showInfo);
    //        console.log("isSelected" + $scope.isSelected);
    //    }
    //};

}]);