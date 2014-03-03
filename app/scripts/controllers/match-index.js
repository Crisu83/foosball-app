'use strict';

angular.module('foosballApp')
  .controller('MatchIndexCtrl', function ($scope, $location, MatchProvider) {

    $scope.title = 'Matches';
    $scope.rightButtons = [
      {
        type: 'button-royal',
        content: 'New',
        tap: function(e) {
          $location.path('/tab/match/new');
        }
      }
    ];

    $scope.matches = MatchProvider.all();

  });
