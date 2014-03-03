'use strict';

describe('Controller: MatchNewCtrl', function () {

  // load the controller's module
  beforeEach(module('foosballApp'));

  var MatchNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MatchNewCtrl = $controller('MatchNewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
