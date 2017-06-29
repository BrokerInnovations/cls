(function() {
//    'use strict';

    angular
        .module('cls')
        .directive('tool', tool);

    /* @ngInject */
    function tool() {
        var directive = {
            bindToController: true,
            controller: toolController,
            controllerAs: 'toolVm',
            link: link,
            restrict: 'EA',
            templateUrl: '/src/client/app/tools/tool.directive.html',
            scope: {
                eventHandler: '&ngClick',
                name: '=',
                link: '='
            }
        };

        function link(scope, element, attrs) {}

        return directive;
    }

    function toolController() {
        var vm = this;

    }
})();
