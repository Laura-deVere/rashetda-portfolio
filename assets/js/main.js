$(document).ready(function() {
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
    $(".hamburger").click(function(e) {
        e.preventDefault();
        $(".wrapper").toggleClass("toggled");
        if($(window).width()<=767) {
            $('main').toggleClass('disable-scroll');
        }
    });
    if($(window).width()>=768) {        
        $(".icon-infor-brand").hover(function(){
            $(".description-infor-brand").toggleClass('active');
        });
    } else {
        $(".icon-infor-brand").click(function(){
            $(".description-infor-brand").toggleClass('active');
        });
    }
    resizeContent();
    $(window).resize(function(){
        resizeContent();
    });
    function resizeContent() {
        var heightHeader,
            heightSideBar,
            topSideBar;
        if($(window).width()<=767) {
            heightHeader = $('header').height();
            topSideBar = $('.sidebar-wrapper').css('top');
            heightSideBar = $(window).height() - heightHeader;
            topSideBar = heightHeader;
            console.log('heightHeader',heightHeader);
            $('.sidebar-wrapper').css({'height':heightSideBar,'top':topSideBar});
            console.log($('.sidebar-wrapper').css('top'),'heightHeader',heightHeader);
        }
        else {
            $('.sidebar-wrapper').css({height: '100%', top :0});
        }
    }
    $(".web-hamburger").click(function(){
        $(this).toggleClass("is-active");
        
        $('.hamburger-wrapper').toggleClass('out');
        $('.hamburger-wrapper p').html($('.hamburger-wrapper p').text() == 'CLOSE' ? 'MENU' : 'CLOSE')

        $('.sidebar-wrapper').toggleClass('expanded');
        $('.sidebar-nav').toggleClass('expanded-list');
        $('.page-content-wrapper').toggleClass('expanded');
    });
    if($(window).width()<=768) {
        document.addEventListener('touchstart', function() {
           $('.port-btn a').text('rashedta cambridge');
       });       
    }
});
