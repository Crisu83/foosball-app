'use strict';

angular.module('foosballApp')
  .controller('PlayerEditCtrl', function ($scope, $stateParams, PlayerProvider) {

    $scope.player = PlayerProvider.get($stateParams.playerId);
    $scope.title = $scope.player.name || 'Unknown';

  });
