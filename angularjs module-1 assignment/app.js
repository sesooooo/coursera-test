(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name;
  $scope.arrayOfStrings;
  $scope.messagetome;

  $scope.calculatenumber = function () {
    if ($scope.name) {
    $scope.arrayOfStrings = $scope.name.split(',');
    $scope.calulateanswer();
  }
  else{
    $scope.messagetome="Please enter data first";
  }
  };

  $scope.calulateanswer = function () {
    if ($scope.arrayOfStrings.length <= 3) {
      $scope.messagetome = "Enjoy!";
    }
    else 
    {
    $scope.messagetome ="Too much!";
    }
  };
}

})();
