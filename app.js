angular.module('demoApp', ['ui.bootstrap', 'ui.utils', 'ui.router', 'customer']);

angular.module('demoApp').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.when('/','/customers');
    $urlRouterProvider.when('/customerAdd','customerAdd');
    $urlRouterProvider.otherwise('/');   

});

angular.module('demoApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
