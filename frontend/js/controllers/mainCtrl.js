angular.module('myApp').controller('mainCtrl', function($scope) {

  let myAudio = document.getElementById("audio");

  //////////////// PLAY AUDIO //////////////////
  $("#sound-on").on("click", function() {
    audio.pause();
    $(this).hide();
    $("#sound-off").show();
  });

  //////////////// PAGELOAD EFFECTS //////////////////
  $("#pageload").delay(1000).fadeOut("fast");
  $("#main_wrapper").hide();
  $("#main_wrapper").delay(1000).fadeIn("slow");

  //////////////// FADE IN AUDIO //////////////////
  setTimeout(function(){
    $("#audio").get(0).play();
  }, 1500);

  //////////////// PAUSE AUDIO //////////////////
  $("#sound-off").on("click", function() {
    audio.play();
    $(this).hide();
    $("#sound-on").show();
  })

  //////////////// OPEN MENU MODAL //////////////////
  $("#right_header").on("click", function() {
    $("#main_wrapper").hide();
    $("#menu-modal").show();
  })

  //////////////// CLOSE MENU MODAL //////////////////
  $("#menu-close").on("click", function() {
    $("#main_wrapper").show();
    $("#menu-modal").hide();
  })

  //////////////// CLOSE MENU MODAL WITH HOME LINK //////////////////
  $("#home-btn").on("click", function() {
    $("#menu-modal").hide();
    $("#main_wrapper").show();
  })

  //////////////// BUY BUTTON HOVER EFFECT //////////////////
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

  //////////////// WATCH BUTTON HOVER EFFECT //////////////////
  $("#watch-button").on('mouseover', function() {
    console.log("here!");
    $(this).css("background-color", "red");
    $(this).css("border", "1px solid red");
  }),

  $("#watch-button").on('mouseleave', function() {
    $(this).css("background-color", "none");
    $(this).css("border", "1px solid white");
  }),

  //////////////// OPEN MOVIE TRAILER MODAL //////////////////
  $('#watch-button').on('click', function(){

      audio.pause();

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
                          src="/img/vid/The Fourth Phase  OFFICIAL 4K TRAILER.mp4"\
                          frameborder="0"\
                          allowfullscreen>\
                      </iframe>\
                    </div> ')

      //////////////// CLOSE MODAL AND RESUME AUDIO //////////////////
      $(overlay).on('click', function(){
        overlay.remove();
        audio.play();
      })

    })


});
