/**
 * Created by Dhanuka Perera on 6/8/2017.
 */

angular.module('ticketBookingApp').config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/movies.html"
        })
        .when("/buy", {
            templateUrl : "views/buyTickets.html",
            controller:'buyController'
        })
        .when("/view-tickets", {
            templateUrl : "views/view-tickets.html"
        })
        .when("/login", {
            templateUrl : "views/login.html"
        })
        .when("/register", {
            templateUrl : "views/register.html"
        })
        .otherwise({
            templateUrl : "index.html"
        });
});
