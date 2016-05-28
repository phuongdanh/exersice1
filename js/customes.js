$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});

  var mainMenu = $('.menu_wrapper');
            $('.node').click(function(){
                $("#menu").removeClass("list-inline");
                $("#menu").addClass("nav nav-pills nav-stacked");
                mainMenu.toggle();
            });
            $(window).on('resize', function(event) {
               if ($(window).width() < 650) {
                        mainMenu.css('display', 'none');
               }; 
            });
            $(window).on('resize', function(event) {
               if ($(window).width() >= 650) {
                    $("#menu").removeClass("nav nav-pills nav-stacked");
                    $("#menu").addClass("list-inline");
                    if (mainMenu.css('display') == 'none') {
                    
						          mainMenu.css('display', 'block');
                    };
               }; 
            });

});
