/** This website was made by cactussenygrafic.com */

jQuery(document).ready(function($){
  
  if($('meta[name="margen_superior_custom_header"]').attr('content') == 1){
      var headerHeight = $('header .et_builder_inner_content .et_pb_section').outerHeight();
      $('#main-content').css('margin-top',headerHeight+'px');
  }

  $('*[data-show]').click(function(e){
    e.preventDefault();
    var element = $(this).data('show');
    $('#'+element).show();
  });

  $('*[data-hide]').click(function(e){
    e.preventDefault();
    var element = $(this).data('hide');
    $('#'+element).hide();
  });
  
  $('*[data-remove]').click(function(e){
    e.preventDefault();
    var element = $(this).data('remove');
    $('#'+element).remove();
  });

  if(jQuery('.marquee').length){
      $('.marquee').marquee({
         allowCss3Support: true, css3easing: 'linear',easing: 'linear',delayBeforeStart: 0,direction: $(this).data('direction'),duplicated: true,duration: $(this).data('duration'),gap: 20,pauseOnCycle: false,pauseOnHover: false,startVisible: true
      });
  }

  if($('.row_fullwidth').length){
    fullwidthrow('.row_fullwidth');
    $(window).resize(function(){ fullwidthrow('.row_fullwidth'); })
  }

  if($('.cat-parent').length){
      $('.cat-parent').children('a').after('<i class="toggle_subcat pointer"></i>');
      $(document).on('click', '.toggle_subcat', function(e){
        e.preventDefault();
        $(this).next('ul').slideToggle();
        $(this).toggleClass('active');
      });
  }

  $('.fi').hover(function(){
    if(!$(this).children('.tooltip').is(':visible')){
      $(this).children('.tooltip').show();
    }
  });

  if($('.et_mobile_nav_menu').is(':visible')){
      jQuery(document).find('.menu-item-has-children').append('<div class="expand-menu">+</div>');
    }
    jQuery(document).on('click',".expand-menu", function(){
      if($(this).siblings('ul.sub-menu').is(':visible')){
        $(this).siblings('ul.sub-menu').attr('style', 'display:none !important');
        $(this).removeClass('active').html('+');
      }else{
        $(this).siblings('ul.sub-menu').attr('style', 'display:block !important');
        $(this).addClass('active').html('x');
      }
      
  });



}) //FIN document.ready()



function equalHeights(thisObj){
      jQuery(thisObj).css('height','inherit');

      var highestBox = 0;      
      // Select and loop the elements you want to equalise
      jQuery(thisObj).each(function(){
          if(jQuery(this).height() > highestBox) {
          highestBox = jQuery(this).height(); 
        }
      });  
      jQuery(thisObj).height(highestBox);
}


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function isIOS() {
  if (/iPad|iPhone|iPod/.test(navigator.platform)) {
    return true;
  } else {
    return navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2 &&
      /MacIntel/.test(navigator.platform);
  }
}

function isIpadOS() {
  return navigator.maxTouchPoints &&
    navigator.maxTouchPoints > 2 &&
    /MacIntel/.test(navigator.platform);
}

function hideClickOutside(container){
  $(document).mouseup(function(e){
              if (!container.is(e.target) && container.has(e.target).length === 0){ container.hide(); }
    });
}
function emptyClickOutside(container){
  $(document).mouseup(function(e){
              if (!container.is(e.target) && container.has(e.target).length === 0){ container.empty(); }
    });
}

function fullwidthrow(row){
  var menu = $('.et_pb_row--with-menu');
    var menuwidth = menu.width();
    var paddingLaterals = ($(window).width() - menuwidth)/2;
    $(row).each(function(){
      $(this).children('.et_pb_column_1_2').first().css('padding-left', paddingLaterals+'px');
      $(this).children('.et_pb_column_1_2').last().css('padding-right', paddingLaterals+'px');
    });
}

function notification_cactus(msg){

  if(jQuery(document).find('#notification_cactus').length){
     jQuery('#msgNotificacion').html(msg);
     jQuery(document).find('#notification_cactus').css('right', '50px');
  }else{
    var html = '<div id="notification_cactus"><div class="flex"><div id="msgNotificacion">'+msg+'</div></div></div>';
    jQuery('body').append(html, function(){ jQuery(document).find('#notification_cactus').css('right', '50px'); });
  }
  
  setTimeout(function(){
     jQuery(document).find('#notification_cactus').css('right', '-550px');
  }, 4000);
}

function number_format (number, decimals=2, dec_point=',', thousands_sep='.') {
    number = number.toFixed(decimals);

    var nstr = number.toString();
    nstr += '';
    x = nstr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? dec_point + x[1] : '';
    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + thousands_sep + '$2');

    return x1 + x2;
}