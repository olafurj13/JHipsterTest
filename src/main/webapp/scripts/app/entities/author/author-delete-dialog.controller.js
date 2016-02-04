'use strict';

angular.module('app8App')
	.controller('AuthorDeleteController', function($scope, $uibModalInstance, entity, Author) {

        $scope.author = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Author.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
