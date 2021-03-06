angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    videos: '<', 
    index: '<',
    selectvideo: '<',
    playing: "<"
  },
  controller: function () { 
    this.entry = "seeee";
},

  templateUrl: '/src/templates/videoListEntry.html'
  
});


// template: `
//   <li class="video-list-entry media">
//   <div class="media-left">
//     <img class="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" />
//   </div>
//   <div class="media-body">
//     <div class="video-list-entry-title">Video Title</div>
//     <div class="video-list-entry-detail">Video Description</div>
//   </div>
// </li> `