'use strict';

describe('Controller: PlayerIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('foosballApp'));

  var PlayerIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerIndexCtrl = $controller('PlayerIndexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
