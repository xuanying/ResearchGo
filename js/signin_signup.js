$(function(){


    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    init();

    function init(){
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        console.log("width"+windowWidth + "height" + windowHeight);
        $('.main').css({width:windowWidth + 'px',height:windowHeight + 'px'});
    }

    //浏览器大小变化时
    window.onresize = function(){
        init();
    };
})