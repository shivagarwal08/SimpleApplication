angular.module('customer', ['ui.bootstrap','ui.utils','ui.router','LocalStorageModule']);

angular.module('customer').config(function($stateProvider) {
    $stateProvider
        .state('customers',{
            url:'/customers',
            templateUrl:'customer/partial/customer-list/customer-list.html',
            controller:'CustomerListCtrl'
        })
        .state('customerAdd',{
            url:'/customerAdd',
            templateUrl:'customer/partial/customer-Add/customer-Add.html',
            controller:'CustomerAddCtrl'
        });
        /* Add New States Above */
});

