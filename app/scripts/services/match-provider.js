'use strict';

angular.module('foosballApp')
  .service('MatchProvider', function MatchProvider() {

    var matches = [
      {id: 1, name: 'Match 1', numHomeGoals: 6, numAwayGoals: 4, numGoalsToWin: 5},
      {id: 2, name: 'Match 2', numHomeGoals: 3, numAwayGoals: 5, numGoalsToWin: 5},
      {id: 3, name: 'Match 3', numHomeGoals: 9, numAwayGoals: 10, numGoalsToWin: 10}
    ];

    return {
      all: function () {
        return matches;
      },
      get: function(id) {
        for (var i = 0; i < matches.length; i++) {
          if (matches[i].id == id) {
            return matches[i];
          }
        }
        return null;
      }
    };

  });
