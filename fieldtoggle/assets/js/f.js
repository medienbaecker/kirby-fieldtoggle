$(document).ready(function(){

  function fieldtoggle() {

    $(".fieldtoggle input").each(function() {

      var field = $(this).parent();

      if (field.data("off")) {
        var off = field.data("off").split(" ");
      }
      else {
        var off = [];
      }

      if (field.data("on")) {
        var on = field.data("on").split(" ");
      }
      else {
        var on = [];
      }

      if ($(this).is(":checked")) {
        console.log(off);
        console.log(on);
        $.each(off, function(key, value) {
          $(".field-name-" + value).closest(".field").hide();
        });
        $.each(on, function(key, value) {
          $(".field-name-" + value).closest(".field").show();
        });
      }
      else {
        console.log(off);
        console.log(on);
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
