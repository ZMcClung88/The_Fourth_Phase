angular.module('myApp').controller('mainCtrl', function($scope) {
  $scope.test = "controller test is working";

  $("#buy-button").on('mouseover', function() {
    $(this).css({
      "background-color": "transparent",
      "border": "1px solid white",
    });
  }),

  $("#buy-button").on('mouseleave', function() {
    $(this).css("background-color", "red");
    $(this).css("border", "1px solid red");
  }),

  $("#watch-button").on('mouseover', function() {
    console.log("here!");
    $(this).css("background-color", "red");
    $(this).css("border", "1px solid red");
  }),

  $("#watch-button").on('mouseleave', function() {
    $(this).css("background-color", "none");
    $(this).css("border", "1px solid white");
  }),

  $('#watch-button').on('click', function(){

      let overlay = $('<div/>').css({
        'width':'100%',
        'height':'100%',
        'backgroundColor':'rgba(50,50,50,0.5)',
        'position':'absolute',
        'padding':'3% 17%',
        'top':0,
        'left':0
      }).appendTo('body')


      // let $modal = $('<div/>').css({
      //   'width':750,
      //   'height': 400,
      //   'margin':'10% auto',
      //   'position': 'relative',
      //   'background-color':'white',
      //   // 'border':'3px solid #505050',
      //   'display': 'flex',
      //   'flex-direction': 'column',
      //   'justify-content': 'center',
      //   'text-align': 'center',
      //   'color': 'grey'
      // }).appendTo(overlay)

      overlay.append('<div class="trailer-modal">\
                      <iframe width="900" height="600"\
                          src="frontend/media/vid/The Fourth Phase  OFFICIAL 4K TRAILER.mp4"\
                          frameborder="0"\
                          allowfullscreen>\
                      </iframe>\
                    </div> ')


      $(overlay).on('click', function(){
        overlay.remove()
      })

    })

});
