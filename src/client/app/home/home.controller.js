(function() {
    'use strict';

    angular
        .module('cls')
        .controller('HomeController', HomeController);

    //HomeController.$inject = ['$window', '$state'];

    /* @ngInject */
    function HomeController($window, $state) {
        var vm = this;
        vm.search = '';
        vm.redirect = redirect;
        vm.logout= logout;
        vm.tools = [
            {
            name: 'PO Queue',
            link: 'http://brokerinnovations.net/ticketgroup/poqueue.php',
            user: 'ticketgroup',
            password: 'Angels2002'
         },
        {
            name: 'Pricing Queue',
            link: 'http://brokerinnovations.net/ticketgroup/pricequeue.php',
            user: 'ticketgroup',
            password: 'Angels2002'
        },
        {
            name: 'Pricing Tool',
            link: 'http://starstrucktickets.info/cws_pricing/',
            user: 'ticketgroup',
            password: 'Angels2002'
        },
        {
            name: 'Live Order Queue',
            link: 'http://brokerinnovations.net/ticketgroup/liveorder/live_order.php',
            user: 'ticketgroup',
            password: 'Angels2002'
        },
        {
            name: 'Live Order Queue User Management',
            link: 'http://brokerinnovations.net/ticketgroup/liveorder/add_user.php',
            user: 'ticketgroup',
            password: 'Angels2002'
        },
        {
            name: 'SST Dropbox',
            link: 'www.dropbox.com',
            user: 'tickets@starstrucktickets.net',
            password: 'SST2TTG'
        },
        {
            name: 'Bitrix24 / Tech Backlog',
            link: 'http://brokerinnovations.bitrix24.com/workgroups/group/8/tasks/',
            user: 'marty@theticketgrp.com',
            password: 'Angels2002'
        }
    ];
        function redirect(link) {
            $window.open(link);
        }

        function logout() {
            $state.go('login');
        }
    }
})();
