

var app = angular.module('couponsApp', []);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/coupons',
            {
                controller: 'CouponsController',
                templateUrl: 'app/partials/coupons.html'
            })
        .otherwise({ redirectTo: '/coupons' });
});




