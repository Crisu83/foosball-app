'use strict';

angular.module('foosballApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ionic'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'views/tabs.html'
      })
      // Match stats
      .state('tab.match-index', {
        url: '/matches',
        views: {
          'match-tab': {
            templateUrl: 'views/match/index.html',
            controller: 'MatchIndexCtrl'
          }
        }
      })
      .state('tab.match-new', {
        url: '/match/new',
        views: {
          'match-tab': {
            templateUrl: 'views/match/new.html',
            controller: 'MatchNewCtrl'
          }
        }
      })
      .state('tab.match-play', {
        url: '/match/play',
        views: {
          'match-tab': {
            templateUrl: 'views/match/play.html',
            controller: 'MatchPlayCtrl'
          }
        }
      })
      .state('tab.match-summary', {
        url: '/match/summary/:matchId',
        views: {
          'match-tab': {
            templateUrl: 'views/match/summary.html',
            controller: 'MatchSummaryCtrl'
          }
        }
      })
      // Player states
      .state('tab.player-index', {
        url: '/players',
        views: {
          'player-tab': {
            templateUrl: 'views/player/index.html',
            controller: 'PlayerIndexCtrl'
          }
        }
      })
      .state('tab.player-new', {
        url: '/player/new',
        views: {
          'player-tab': {
            templateUrl: 'views/player/new.html',
            controller: 'PlayerNewCtrl'
          }
        }
      })
      .state('tab.player-edit', {
        url: '/player/:playerId',
        views: {
          'player-tab': {
            templateUrl: 'views/player/edit.html',
            controller: 'PlayerEditCtrl'
          }
        }
      })
      // Stats state
      .state('tab.stats', {
        url: '/stats',
        views: {
          'stats-tab': {
            templateUrl: 'views/stats.html',
            controller: 'StatsCtrl'
          }
        }
      })
      // Settings state
      .state('tab.settings', {
        url: '/settings',
        views: {
          'settings-tab': {
            templateUrl: 'views/settings.html',
            controller: 'SettingsCtrl'
          }
        }
      });

    $urlRouterProvider
      .otherwise('/tab/matches');

  });
