'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.initIndexPage = function() {
    console.log('why cant we get in here?');
    $('#articles').hide();
    $('#about').show();
  }
  console.log('why you not hiding?');
  module.aboutController = aboutController;
})(app);
