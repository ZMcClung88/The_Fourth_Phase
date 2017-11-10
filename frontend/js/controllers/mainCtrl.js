angular.module('myApp').controller('mainCtrl', function($scope) {
  $scope.test = "controller test is working";

  let myAudio = document.getElementById("audio");

  $("#sound-on").on("click", function() {
    audio.pause();
    $(this).hide();
    $("#sound-off").show();
  });

  $(".pageload_wrapper").delay(5000).fadeOut("slow");
  $("#main_wrapper").hide();
  $("#main_wrapper").delay(5000).fadeIn("slow");


var colors = new Array(
    [251,243,246],
    [200,220,208],
    [111,123,140],
    [244,226,156],
    [141,158,170]);

  var step = 0;
  //color table indices for:
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];

  //transition speed
  var gradientSpeed = .015;

  function updateGradient()
  {
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

   $('#gradient').css({


     background: "-webkit-radial-gradient(center, circle cover, "+color1+","+color2+")"});

    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];

      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

    }
  }

  setInterval(updateGradient,10);


  setTimeout(function(){
    $("#audio").get(0).play();
}, 7500);

  $("#sound-off").on("click", function() {
    audio.play();
    $(this).hide();
    $("#sound-on").show();
  })

  $("#right_header").on("click", function() {
    $("#main_wrapper").hide();
    $("#menu-modal").show();
  })

  $("#menu-close").on("click", function() {
    $("#main_wrapper").show();
    $("#menu-modal").hide();
  })

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
                          src="frontend/media/vid/The Fourth Phase  OFFICIAL 4K TRAILER.mp4"\
                          frameborder="0"\
                          allowfullscreen>\
                      </iframe>\
                    </div> ')


      $(overlay).on('click', function(){
        overlay.remove();
        audio.play();
      })

    })


});
