'use strict';

angular.module('app8App')
    .controller('BookController', function ($scope, $state, Book) {

        $scope.books = [];
        $scope.loadAll = function() {
            Book.query(function(result) {
               $scope.books = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.book = {
                title: null,
                price: null,
                id: null
            };
        };
    });
