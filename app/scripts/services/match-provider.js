'use strict';

angular.module('foosballApp')
  .service('MatchProvider', function MatchProvider() {

    var matches = [
      {id: 1, name: 'Match 1'},
      {id: 2, name: 'Match 2'},
      {id: 3, name: 'Match 3'}
    ];

    return {
      all: function () {
        return matches;
      },
      get: function(id) {
        return matches[id];
      }
    };

  });
