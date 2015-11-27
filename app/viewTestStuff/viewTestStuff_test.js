'use strict';

describe('myApp.viewTestStuff module', function() {

  beforeEach(module('myApp.viewTestStuff'));

  describe('viewTestStuff controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var viewTestStuffCtrl = $controller('ViewTestStuffCtrl');
      expect(viewTestStuffCtrl).toBeDefined();
    }));

  });
});