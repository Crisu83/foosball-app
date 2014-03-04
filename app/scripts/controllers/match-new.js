'use strict';

angular.module('foosballApp')
  .controller('MatchNewCtrl', function ($scope, $location) {

    $scope.title = 'New match';
    $scope.rightButtons = [
      {
        type: 'button-royal',
        content: 'Start',
        tap: function(e) {
          $location.path('/tab/match/play');
        }
      }
    ];

  });
