$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider();
    $('textarea#comentario').characterCounter();

    $("form#formEnvio").validetta({
      bubblePosition: 'bottom',
      bubbleGapTop: 10,
      bubbleGapLeft: -5
  });
  });
  
  $(document).ready(function(){
    $('.modal').modal();
  });

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
  $(document).ready(function(){
    $('.tabs').tabs();
  });
  