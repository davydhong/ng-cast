angular.module('video-player')


.component('videoPlayer', {
  bindings: {
    playing: '<'
  }, 
  // TODO
  controller: function () { 
   // console.log($ctrl.playing); //QUESTION: how to access the passed variable from control?
  },

  templateUrl: '/src/templates/videoPlayer.html'

});


//   template: `
//   <div class="video-player">
//   <div class="embed-responsive embed-responsive-16by9">
//     <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1w8Z0UOXVaY" allowFullScreen></iframe>
//   </div>
//   <div class="video-player-details">
//     <h3>Video Title {{$ctrl.currentVideo | json }}</h3>
//     <div>Video Description</div>
//   </div>
// </div> `