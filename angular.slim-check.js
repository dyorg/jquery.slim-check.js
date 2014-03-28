var module = angular.module('app');

module.directive('slimCheck', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).slimCheck();
        }
    };
});