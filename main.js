var runExpand = function (event) {
  var titleNum = event.target.id;

  if (titleNum === "sec1title"){
    $( window.sec1body ).addClass( "expanded" );
    $( window.sec2body ).removeClass( "expanded" );
    $( window.sec3body ).removeClass( "expanded" );

    $( window.sec1body ).removeClass( "contracted" );
    $( window.sec2body ).addClass( "contracted" );
    $( window.sec3body ).addClass( "contracted" );
  }
  else if (titleNum === "sec2title"){
    $( window.sec1body ).removeClass( "expanded" );
    $( window.sec2body ).addClass( "expanded" );
    $( window.sec3body ).removeClass( "expanded" );

    $( window.sec1body ).addClass( "contracted" );
    $( window.sec2body ).removeClass( "contracted" );
    $( window.sec3body ).addClass( "contracted" );
  }
  else if (titleNum === "sec3title"){
    $( window.sec1body ).removeClass( "expanded" );
    $( window.sec2body ).removeClass( "expanded" );
    $( window.sec3body ).addClass( "expanded" );

    $( window.sec1body ).addClass( "contracted" );
    $( window.sec2body ).addClass( "contracted" );
    $( window.sec3body ).removeClass( "contracted" );
  };
};

$(".titles").on('click', runExpand);
