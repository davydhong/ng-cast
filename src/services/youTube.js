angular.module("video-player").service("youtube", function($http) {
  // TODO

  this.search = ({ key, query, max = 5 }, callback) => {
    $http
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: { 
        part: "snippet",
        key: key,
        q: query,
        maxResults: max,
        type: "video",
        videoEmbeddable: "true"
        }
      })
      .then(
        (data) => {
          if (callback) {
            // console.log(data.data.items);   
            console.log('APi is going through!');
            callback(data.data.items);
          }
        },
        function errorMessage(data) {
          console.log(data); 
          console.log("API did not go through");
        }
      );
  };

  // $http({
  //   method: 'GET',
  //   url: ''
  // }).then(function successCallback(response) {

  // }, function errorCallback(response) {

  // });
});

// var searchYouTube = ({ key, query, max = 5 }, callback) => {
//   $.get("https://www.googleapis.com/youtube/v3/search", {
//     part: "snippet",
//     key: key,
//     q: query,
//     maxResults: max,
//     type: "video",
//     videoEmbeddable: "true"
//   })
//     .done(({ items }) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({ responseJSON }) => {
//       responseJSON.error.errors.forEach(err => console.error(err));
//     });
// };
