angular.module('myApp', [])

.directive('makeEditable', function () {
    return {
        restrict: 'E',
        scope: true,
        transclude: true,
        templateUrl: 'edit.html',
        link: function ($scope, element, attr) {
            $scope.editingMode = false;
            $scope.buttonText = 'Edit';
            $scope.toggleEdit = function () {
                if ($scope.editingMode == false) {
                    $scope.editingMode = true;
                    $scope.buttonText = 'Save';
                } else {
                    $scope.editingMode = false;
                    $scope.buttonText = 'Edit';
                }
            };
        }
    };

});
