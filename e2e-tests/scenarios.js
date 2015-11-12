'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /viewHomepage when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/viewHomepage");
  });


  describe('viewHomepage', function() {

    beforeEach(function() {
      browser.get('index.html#/viewHomepage');
    });


    it('should render viewHomepage when user navigates to /viewHomepage', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for ViewHomepage/);
    });

  });


  describe('viewAbout', function() {

    beforeEach(function() {
      browser.get('index.html#/viewAbout');
    });


    it('should render viewAbout when user navigates to /viewAbout', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for viewAbout/);
    });

  });
    

  describe('viewSearch', function() {

    beforeEach(function() {
      browser.get('index.html#/viewSearch');
    });


    it('should render viewSearch when user navigates to /viewSearch', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for viewSearch/);
    });

  });
    

  describe('viewContact', function() {

    beforeEach(function() {
      browser.get('index.html#/viewContact');
    });


    it('should render viewAbout when user navigates to /viewContact', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for viewContact/);
    });

  });
});
