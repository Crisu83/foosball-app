'use strict';

describe('Service: PlayerProvider', function () {

  // load the service's module
  beforeEach(module('foosballApp'));

  // instantiate service
  var PlayerProvider;
  beforeEach(inject(function (_PlayerProvider_) {
    PlayerProvider = _PlayerProvider_;
  }));

  it('should do something', function () {
    expect(!!PlayerProvider).toBe(true);
  });

});
