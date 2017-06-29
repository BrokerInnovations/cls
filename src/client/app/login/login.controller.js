(function() {
    'use strict';

    angular
        .module('cls')
        .controller('LoginController', LoginController);

    //LoginController.$inject = ['$state'];

    /* @ngInject */
    function LoginController($state) {
        var vm = this;
        vm.login = login;

        function login() {
            console.log('login');
            $state.go('home');
        }
    }
})();
