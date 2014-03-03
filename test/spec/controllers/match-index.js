'use strict';

describe('Controller: MatchIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('foosballApp'));

  var MatchIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MatchIndexCtrl = $controller('MatchIndexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
