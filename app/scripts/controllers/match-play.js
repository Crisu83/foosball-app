'use strict';

angular.module('foosballApp')
  .controller('MatchPlayCtrl', function ($scope, $stateParams, MatchProvider) {

    $scope.match = MatchProvider.get($stateParams.matchId);
    $scope.title = 'Play match';

  });
