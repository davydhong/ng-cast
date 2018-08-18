angular.module('video-player')

.component('search', {
  // TODO
  bindings: { 
    searchresults: '<'    
  },

  controller: function () { 
    this.result = function () { }
    


  },
  
  templateUrl: '/src/templates/search.html'

});


//   template: `
//   <div class="search-bar form-inline">
//   <input class="form-control" type="text" />
//   <button class="btn">
//     <span class="glyphicon glyphicon-search"></span>
//   </button>
// </div> `


/*search
should have a result function on the scope ‣
AssertionError: expected undefined to exist
    at Context.<anonymous> (base/spec/components/searchSpec.js:30:51)
should not use & function binding ‣
AssertionError: expected undefined to equal [Function: proxy]
    at Context.<anonymous> (base/spec/components/searchSpec.js:35:52)
should invoke search when button is clicked ‣
AssertionError: expected 0 to equal 1
    at Context.<anonymous> (base/spec/components/searchSpec.js:40:44)
should invoke the result function with the results of the search ‣
TypeError: Cannot read property 'callCount' of undefined
    at Context.<anonymous> (base/spec/components/searchSpec.js:45:47)*/