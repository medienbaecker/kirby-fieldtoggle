$(document).ready(function(){

  function fieldtoggle() {

    $($(".fieldtoggle input").get().reverse()).each(function() {
      var fieldtoggle = $(this).closest("div.field");
      var field = $(this).parent();

      if (field.data("hide")) {
        var hide = field.data("hide").split(" ");
      }
      else {
        var hide = [];
      }

      if (field.data("show")) {
        var show = field.data("show").split(" ");
      }
      else {
        var show = [];
      }

      if ($(this).is(":checked")) {
        $.each(hide, function(key, value) {
          $(".field-name-" + value).closest(".field").hide();
        });
        $.each(show, function(key, value) {
          $(".field-name-" + value).closest(".field").show();
        });
      }

    });

  }

  fieldtoggle();

  $("body").on("change", ".fieldtoggle input", function() {
    fieldtoggle();
  });


  $(document).ajaxComplete(function() {
    fieldtoggle();
  });

});
