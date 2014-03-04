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
        for (var i = 0; i < players.length; i++) {
          if (players[i].id == id) {
            return players[i];
          }
        }
        return null;
      }
    };

  });
