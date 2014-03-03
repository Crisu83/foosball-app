'use strict';

angular.module('foosballApp')
  .controller('MatchSummaryCtrl', function ($scope, $stateParams, MatchProvider) {

    $scope.match = MatchProvider.get($stateParams.matchId);
    $scope.title = 'Match summary';

  });
