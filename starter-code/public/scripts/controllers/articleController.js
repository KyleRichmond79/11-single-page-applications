'use strict';
var app = app || {};

(function(module) {
  const articleController = {};
  // DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  app.articleView.initArticleView = function() {
    app.Article.fetchAll(app.articleView.initIndexPage);
    console.log('hello world');
    $('#about').hide();
    $('#articles').show();
  }

  module.articleController = articleController;
})(app);
