angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<', 
    selectvideo: '<',
    playing: '<'
  },
  controller: function () {
    // console.log(this.selectvideo);
  },
  templateUrl: '/src/templates/videoList.html'

});


//   template: `
//   <ul class="video-list">
//   <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
//   <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
//   <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
//   <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
//   <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
// </ul> `


