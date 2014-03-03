'use strict';

angular.module('foosballApp')
  .service('PlayerProvider', function PlayerProvider() {

    var players = [
      {id: 1, name: 'Player 1'},
      {id: 2, name: 'Player 2'},
      {id: 3, name: 'Player 3'}
    ];

    return {
      all: function () {
        return players;
      },
      get: function(id) {
        return players[id];
      }
    };

  });
