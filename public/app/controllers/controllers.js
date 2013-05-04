﻿

//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is ultimately bound to the customers view
app.controller('CouponsController', function ($scope, couponsService) {
    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.coupons = couponsService.getCoupons();
        $scope.order = "name";
    }

    $scope.setOrder = function ($event, order) {
        var checkbox = $event.target;
        $scope.order = (checkbox.checked ? order : 'name');
        console.log($scope.order);

    };

    $scope.insertCoupon = function () {
        var name = $scope.newCoupon.name;
        var url = $scope.newCoupon.url;
        var discount = parseInt($scope.newCoupon.discount);
        var code = $scope.newCoupon.code;

        couponsService.insertCoupon(name, url, discount, code);
        $scope.newCoupon.name = '';
        $scope.newCoupon.url = '';
        $scope.newCoupon.discount = '';
        $scope.newCoupon.code = '';

    };

    $scope.deleteCoupon = function (id) {
        couponsService.deleteCoupon(id);
    };
});

app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});

