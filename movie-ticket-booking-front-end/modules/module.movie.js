/**
 * Created by Dhanuka Perera on 6/25/2017.
 */
angular.module('ticketBookingApp').controller('movieController', MoviveCtrl);

MoviveCtrl.$inject = ['$http', '$scope'];


function MoviveCtrl($http, $scope){
    $scope.test = function () {
        console.log("I am movie controler");


    }
    $scope.test();

    $scope.getMovies = function () {
        $http.get('http://192.168.1.6:9763/MovieService_1.0.0/services/movie_service/movieservice/GetAllMovies').then(function (result) {
            var vm = this;
            vm.movieData = result.data;
            $scope.movies = vm.movieData;
            console.log($scope.movies);
        });
    }
    $scope.getMovies()
}