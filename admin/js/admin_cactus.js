/** This website was made by cactussenygrafic.com */

jQuery(document).ready(function($){
  
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
  
  if(jQuery('.marquee').length){
      $('.marquee').marquee({
         allowCss3Support: true, css3easing: 'linear',easing: 'linear',delayBeforeStart: 0,direction: $(this).data('direction'),duplicated: true,duration: $(this).data('duration'),gap: 20,pauseOnCycle: false,pauseOnHover: false,startVisible: true
      });
  }

  if($('.row_fullwidth').length){
    fullwidthrow('.row_fullwidth');
    $(window).resize(function(){ fullwidthrow('.row_fullwidth'); })
  }

  if($('#button_menu').length){

    setButtonMenu();

    $('#button_menu').on('mouseenter', function(){
      console.log('enter');
        var backgroundhover = $('#button_menu').data('backgroundhover');
        var colorhover = $('#button_menu').data('colorhover');
        $('#button_menu').css('background', backgroundhover);
        $('#button_menu').css('color', colorhover);
    });
    $('#button_menu').on('mouseleave', function(){ setButtonMenu(); });


    $('input[name="background_boton_menu"]').on('change', function(){
        var value = $('input[name="background_boton_menu"]').val();
        $('#button_menu').data('background', value);
        setButtonMenu();
    });

    $('input[name="link_boton_menu"]').on('change', function(){
        var value = $('input[name="link_boton_menu"]').val();
        $('#button_menu').data('color', value);
        setButtonMenu();
    });


    $('input[name="radius_button_menu[]"]').on('change', function(){
        var values = $('input[name="radius_button_menu[]"]').map(function(){
            return $(this).val();
        }).get();
        var unit = $('select[name="radius_button_unit"] option:selected').val();
        var radius = values.join(unit + ' ') + unit;
        $('#button_menu').data('radius', radius);
        setButtonMenu();
    });


    $('input[name="padding_button_menu[]"]').on('change', function(){
        var values = $('input[name="padding_button_menu[]"]').map(function(){
            return $(this).val();
        }).get();
        var unit = $('select[name="padding_button_unit"] option:selected').val();
        var padding = values.join(unit + ' ') + unit; // Esto crea el string de padding, ej: "10px 20px 30px 40px"
        $('#button_menu').data('padding', padding);
        setButtonMenu();
    });

  }

  if($('input[type="file"]').length){
      $('input[type="file"]').bootstrap4FileField({
        icon: 'fi fi-rr-cloud-upload-alt',
        placeholder:'Subir archivo...',
      });
  }


  if($('.cactus_tab').length){
      $('.cactus_tab').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('active')){
          $('.cactus_tab').removeClass('active');
          $(this).addClass('active');
          var element = $(this).attr('data-tab');
          $('.tab_content').hide();
          $('#'+element).show();
        }
      });
  }


  jQuery('.documentation_holder.video').click(function(){
    var videoUrl = $(this).data('attachment');
    var videoId = videoUrl.split('v=')[1];
    var ampersandPosition = videoId.indexOf('&');
    if(ampersandPosition != -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }

    var iframeHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    var html = '<div id="documentation_modal"><div class="bg-absolute-black"></div><div class="popup"><div class="close-modal" id="close_video_user"><i class="fi fi-rr-cross"></i></div>';
        html += '<div class="videoWrapper">'+iframeHtml+'</div>';
        html += '</div></div>';

        $('body').append(html);
  });

  jQuery('.documentation_holder.text').click(function(){
    var content = $(this).data('attachment');
    
    var html = '<div id="documentation_modal"><div class="bg-absolute-black"></div><div class="popup"><div class="close-modal" id="close_video_user"><i class="fi fi-rr-cross"></i></div>';
        html += '<div class="textWrapper">'+content+'</div>';
        html += '</div></div>';

        $('body').append(html);
  });

  jQuery(document).on('click', '#close_video_user', function(){
    $(document).find('#documentation_modal').remove();
  });
  jQuery(document).on('click', '.bg-absolute-black', function(){
    $(document).find('#documentation_modal').remove();
  });

    $('.filter').click(function() {
      if($(this).hasClass('active')){
        $('.filter').removeClass('active'); $('.documentation_holder').show()
      }else{
        $('.filter').removeClass('active');
        $(this).addClass('active');
        
        // Obtiene el valor del data-filter del elemento clicado
        var filterValue = $(this).attr('data-filter');

        // Oculta todos los elementos
        $('.documentation_holder').hide();

        // Muestra solo los elementos que contienen el valor de filtro
        $('.documentation_holder').filter(function() {
            // Divide los valores de data-filter en un array y verifica si incluye el valor de filtro
            var data_filter = $(this).attr('data-filter');
            return data_filter.split(' ').includes(filterValue);
        }).show();
      } 
    });


  

}) //FIN document.ready()
function setButtonMenu(){
    var padding    = jQuery('#button_menu').data('padding');
    var radius     = jQuery('#button_menu').data('radius');
    var background = jQuery('#button_menu').data('background');
    var color      = jQuery('#button_menu').data('color');

    jQuery('#button_menu').css('padding', padding);
    jQuery('#button_menu').css('border-radius', radius);
    jQuery('#button_menu').css('background', background);
    jQuery('#button_menu').css('color', color);
}
function saveChanges(){
  jQuery('#saveChanges').addClass('active');
  setTimeout(function(){ jQuery('#saveChanges').removeClass('active'); }, 2500);
}

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
