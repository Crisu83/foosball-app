'use strict';

describe('Controller: MatchSummaryCtrl', function () {

  // load the controller's module
  beforeEach(module('foosballApp'));

  var MatchSummaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MatchSummaryCtrl = $controller('MatchSummaryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
