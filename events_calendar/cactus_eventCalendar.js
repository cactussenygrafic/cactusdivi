/** This module was made by cactussenygrafic.com */

jQuery(document).ready(function($){

        $(document).on("click", '.prev', function(event) { 
          var month =  $(this).data("prev-month");
          var year =  $(this).data("prev-year");
          getCalendar(month,year);
        });
        $(document).on("click", '.next', function(event) { 
          var month =  $(this).data("next-month");
          var year =  $(this).data("next-year");
          getCalendar(month,year);
        });
        $(document).on("blur", '#currentYear', function(event) { 
          var month =  $('#currentMonth').text();
          var year = $('#currentYear').text();
          getCalendar(month,year);
        });

        //equalHeights('.day-calendar');
      


}) //FIN document.ready()


function getCalendar(month,year){
  jQuery("#calendar-html-output").addClass('loading');  
  var url = "calendar-ajax.php";
  var base = jQuery('base').attr('href');
  jQuery.ajax({
    url: base+"/wp-content/themes/cactussenygrafic/tribe-events/cactus_ajaxEventCalendar.php",
    type: "POST",
    data: { month : month, year : year},
    success: function(response){
      
      jQuery("#calendar-html-output").html(response);  
      equalHeights('.day-calendar');
      jQuery("#calendar-html-output").removeClass('loading'); 
    },
    error: function(){ $("#calendar-html-output").removeClass('loading');  } 
  });
  
}

