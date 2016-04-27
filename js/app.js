(function(){

  'use strict';

  /**
  * readingList Module
  *
  * Description
  */
  angular.module('readingList', [])

  .controller('readingListCtrl', function(){
    this.genres=genres;
    this.books=books;
  })

  .directive('reviewForm',  function(){
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      //scope: {}, // {} = isolate, true = child, false/undefined = no change
      controller: function($scope, $element, $attrs, $transclude) {
        this.showForm=false;
        $scope.book={genres:{}};
        this.addBook=function(){
          books.push($scope.book);
          $scope.book={genres:{}};
        };
        //$scope.clearBook=clearBook;
      },
      controllerAs: 'reviewFormCtrl',
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
      templateUrl: 'partials/review-form.html',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope, iElm, iAttrs, controller) {
        
      }
    };
  })

  .directive('book', function(){
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
       // controller: function($scope, $element, $attrs, $transclude) {
       //   this.showForm=false;
       // },
       // controllerAs: 'reviewFormCtrl',
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
         restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
         templateUrl: 'partials/book.html',
         replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope, iElm, iAttrs, controller) {

      }
    };
  })

  ;

  var genres=['fantasy', 'fiction', 'non-fiction'];

  var books=[
    {
      title: 'Game of Thrones',
      author: 'George Martin',
      isbn: '0553593714',
      review: 'The most entertaining fantasy saga',
      rating: 4,
      genres: {'non-fiction':true, fantasy: true}
    },
    {
      title: 'HTML for babies',
      author: 'John Vanden',
      isbn: '0615487661',
      review: 'The ultimate HTML giude for kids',
      rating: 3,
      genres: {fiction: true}
    }
  ];

})();