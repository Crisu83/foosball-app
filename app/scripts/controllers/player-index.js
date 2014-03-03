'use strict';

angular.module('foosballApp')
  .controller('PlayerIndexCtrl', function ($scope, $location, PlayerProvider) {

    $scope.title = 'Players';
    $scope.rightButtons = [
      {
        type: 'button-royal',
        content: 'New',
        tap: function(e) {
          $location.path('/tab/player/new');
        }
      }
    ];

    $scope.players = PlayerProvider.all();

  });
