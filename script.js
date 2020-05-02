// scroll top & smooth scrolling
$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  }) 
})
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 700){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });
  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});
// scroll top & smooth scrolling

// scroll down
 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.about').offset().top }, 'slow');
      return false;
    });
  });
// scroll down 