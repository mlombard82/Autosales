    //   SEARCH FORM
    $(document).ready(function(){
	
        $('ul.tabs li').click(function(){
            var tab_id = $(this).attr('data-tab');
    
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');
    
            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
        });

    
        // remove placeholder under 400px
            if ($(window).width() <= 400){  
                $('input').removeAttr('placeholder');
            }
    });


    $(document).ready(function() {
        $("#toggle-button").click(function() {
          $("#toggle-form").toggle();
        });
    });










