'use strict';

describe('Controller: PlayerEditCtrl', function () {

  // load the controller's module
  beforeEach(module('foosballApp'));

  var PlayerEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerEditCtrl = $controller('PlayerEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
