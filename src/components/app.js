angular.module("video-player").component("app", {
  // TODO

  controller: function(youtube) {
    this.searchresults = function(query) {
      var key = window.YOUTUBE_API_KEY;
      youtube.search({ key, query }, function(data) {
          debugger;
          console.log(data);
        this.videos = data;
        this.playing = data[0];
      }.bind(this));
    };

    this.playing = window.exampleVideoData[2]; //#
    // console.log("app", this);
    this.videos = window.exampleVideoData; //#

    this.selectvideo = function(index) {
      //console.log(this);
      //debugger;
      this.playing = this.videos[index];
    };
    this.selectvideo = this.selectvideo.bind(this);
    this.searchresults = this.searchresults.bind(this);
  },
  templateUrl: "/src/templates/app.html"

  // /Users/student/code/hrsf101-ng-cast/src/templates/app.html
  // /Users/student/code/hrsf101-ng-cast/src/components/app.js
});

// `<div id="app container">
//   <nav class="navbar">
//     <div class="col-md-6 col-md-offset-3">
//       <search/>
//     </div>
//   </nav>
//   <div class="row">
//     <div class="col-md-7">
//       <video-player currentVideo="$ctrl.currentVideo"/>
//     </div>
//     <div class="col-md-5">
//       <video-list/>
//     </div>
//   <div>
// </div> `

/*
should have a selectvideo function on the scope ‣
AssertionError: expected undefined to exist
    at Context.<anonymous> (base/spec/components/appSpec.js:28:56)
should have a searchResults function on the scope ‣
AssertionError: expected undefined to exist
    at Context.<anonymous> (base/spec/components/appSpec.js:33:58)
should have a currentVideo property on the scope ‣
AssertionError: expected undefined to exist
    at Context.<anonymous> (base/spec/components/appSpec.js:38:57)
should have a videos property on the scope ‣
AssertionError: expected undefined to exist
    at Context.<anonymous> (base/spec/components/appSpec.js:43:51)
should render a video player element, a search element, and a video list element ‣
AssertionError: expected 0 to equal 1
    at Context.<anonymous> (base/spec/components/appSpec.js:53:30)
should search youTube when the app is initialized ‣
AssertionError: expected 0 to equal 1
    at Context.<anonymous> (base/spec/components/appSpec.js:57:37)
should load live data when the app is initialized ‣
AssertionError: expected undefined to equal [ Array(5) ]
    at Context.<anonymous> (base/spec/components/appSpec.js:61:52)*/
