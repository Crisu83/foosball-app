'use strict';

describe('Service: MatchProvider', function () {

  // load the service's module
  beforeEach(module('foosballApp'));

  // instantiate service
  var MatchProvider;
  beforeEach(inject(function (_MatchProvider_) {
    MatchProvider = _MatchProvider_;
  }));

  it('should do something', function () {
    expect(!!MatchProvider).toBe(true);
  });

});
