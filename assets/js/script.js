
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(document).ready(function(){
    $("#enviarCorreo").on("click", function(){
      alert("El correo fue enviado correctamente...");
    });
  });

  $(document).ready(function(){
    $("#ingredientes, #preparacion").on("click", function(){
      var currentColor = $(this).css("color");
      if (currentColor === "rgb(255, 0, 0)") {
        $(this).css("color", "");
      } else {
        $(this).css("color", "red");
      }
    });
  });

  $(document).ready(function(){
    $(".toggle-titulo").on("click", function(){
      var card = $(this).closest(".toggle-card");
      card.toggle();
    });
  });

  $(document).ready(function() {
    $('#carouselExampleIndicators').carousel();
    setInterval(function() {
      $('#carouselExampleIndicators').carousel('next');
    }, 3000);
  });