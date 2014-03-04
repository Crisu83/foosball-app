'use strict';

angular.module('foosballApp')
  .controller('MatchPlayCtrl', function ($scope, $stateParams, MatchProvider) {

    var match = MatchProvider.get($stateParams.matchId || 1),
      history = [];

    var Team = {
      HOME: 'home',
      AWAY: 'away'
    };

    $scope.title = 'Play match';
    $scope.rightButtons = [
      {
        type: 'button-royal',
        content: 'Undo',
        tap: function (e) {
          if (history.length) {
            removeGoal(history.pop());
          }
        }
      }
    ];

    $scope.goals = {
      home: 0,
      away: 0
    };
    $scope.ended = false;

    var addGoal = function (team) {
      if (!$scope.ended) {
        $scope.goals[team]++;
        history.push(team);
        if (hasTeamWon(team)) {
          $scope.ended = true;
          console.log('Team %s won!', team);
        }
      }
    };

    var removeGoal = function (team) {
      if (!$scope.ended) {
        $scope.goals[team]--;
      }
    };

    var hasTeamWon = function (team) {
      return $scope.goals[team] === match.numGoalsToWin;
    };

    $scope.addGoal = addGoal;

  });
