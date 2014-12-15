/**
 * atomic.js
 */
describe('atomic', function () {

  /**
   * xhr
   */
  describe('xhr', function () {

    beforeEach(function () {
      spyOn(XMLHttpRequest.prototype, 'open').andCallThrough();
      spyOn(XMLHttpRequest.prototype, 'setRequestHeader').andCallThrough();
      spyOn(XMLHttpRequest.prototype, 'send');
    });

    it('should open an XMLHttpRequest', function () {
      atomic.get('')
      .success(function (data, xhr) {
      })
      .error(function (data, xhr) {
      });
      expect(XMLHttpRequest.prototype.open).toHaveBeenCalled();
    });

    it('should send an XMLHttpRequest', function () {
      atomic.get('')
      .success(function (data, xhr) {
      })
      .error(function (data, xhr) {
      });
      expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
    });

    it('should set Content-Type header to "application/x-www-form-urlencoded"', function () {
      atomic.get('')
      .success(function (data, xhr) {
      })
      .error(function (data, xhr) {
      });
      expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledWith('Content-type', 'application/x-www-form-urlencoded');
    });

    it('accepts an options param that can change the Content-Type header', function () {
      var options = {
        contentType: 'application/json'
      };

      atomic.get('', options)
      .success(function (data, xhr) {
      })
      .error(function (data, xhr) {
      });
      expect(XMLHttpRequest.prototype.setRequestHeader).toHaveBeenCalledWith('Content-type', 'application/json');
    });

  });

});
