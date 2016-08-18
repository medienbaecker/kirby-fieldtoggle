$(document).ready(function(){
  
  function fieldtoggle() {
    
    $(".fieldtoggle input:checked").each(function() {
      
      field = $(this).parent();

      if (field.data("off")) {
        off = field.data("off").split(" ");
      }
      else {
        off = [];
      }
      
      if (field.data("on")) {
        on = field.data("on").split(" ");
      }
      else {
        on = [];
      }
      
      if ( $(this).attr("value") == "true" ) {
        $.each(off, function(key, value) {
          $(".field-name-" + value).closest(".field").hide();
          console.log("Hide .field-name-" + value);
        });
        $.each(on, function(key, value) {
          $(".field-name-" + value).closest(".field").show();
          console.log("Show .field-name-" + value);
        });
      }
      
      else if ($(this).attr("value") == "false") {
       $.each(off, function(key, value) {
         $(".field-name-" + value).closest(".field").show();
         console.log("Show .field-name-" + value);
       });
       $.each(on, function(key, value) {
         $(".field-name-" + value).closest(".field").hide();
         console.log("Hide .field-name-" + value);
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