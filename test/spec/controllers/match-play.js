'use strict';

describe('Controller: MatchPlayCtrl', function () {

  // load the controller's module
  beforeEach(module('foosballApp'));

  var MatchPlayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MatchPlayCtrl = $controller('MatchPlayCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
