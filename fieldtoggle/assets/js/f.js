$(document).ready(function(){

  function fieldtoggle() {

    $(".fieldtoggle input:checked").each(function() {

      var field = $(this).parent();

      if (field.data("off")) {
        var off = field.data("off").toLowerCase().split(" ");
      }
      else {
        var off = [];
      }

      if (field.data("on")) {
        var on = field.data("on").toLowerCase().split(" ");
      }
      else {
        var on = [];
      }

      if ( $(this).attr("value") == "true" ) {
        $.each(off, function(key, value) {
          $(".field-name-" + value).closest(".field").hide();
        });
        $.each(on, function(key, value) {
          $(".field-name-" + value).closest(".field").show();
        });
      }

      else if ($(this).attr("value") == "false") {
       $.each(off, function(key, value) {
         $(".field-name-" + value).closest(".field").show();
       });
       $.each(on, function(key, value) {
         $(".field-name-" + value).closest(".field").hide();
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
