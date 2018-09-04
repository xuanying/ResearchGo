$(function () {

    var wrapper = $('wrapper');
    var main_page = $('wrapper').find('.main_page');
    var pageNum = main_page.length;
    console.log(pageNum);
    var windowWidth, windowHeight;
    init();

    function init() {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        $('.pages').css({
            width: windowWidth + 'px',
            height: windowHeight + 'px'
        });
        $('.main_page').css({
            width: windowWidth + 'px',
            height: windowHeight + 'px'
        });
        $('.main_bg').css({
            width: windowWidth + 'px',
            height: windowHeight + 'px'
        });
        wrapper.css('width',windowWidth + 'px');
        wrapper.css('height', pageNum * windowHeight + 'px')
    }

    //浏览器大小变化时,背景图 1 的改变
    window.onresize = function () {
        init();
        dot_changes(0);
    };
//侧边点切换函数
    function dot_changes(index){
        $('.dotted_now').removeClass('dotted_now').addClass('dotted');
        $('.dot_select ul').find('li:eq(' + index + ')').removeClass('dotted').addClass('dotted_now');
    }
// 背景图切换函数
    var p_up = $('.p_up');
    var p_down = $('p_down');
    function pagechanges(){
        var index = $('.dotted_now').index();
        var offset = index * windowHeight * -1;
        var param = {'top': offset + 'px'};
        wrapper.stop().animate(param, 0.6 * 1000, 'swing');
        if(index == 0){
            p_up.hide();
            p_down.show();
        }else if(index == $('.dot_select ul li').length - 1){
            p_down.hide();
            p_up.show();
        }else{
            p_down.show();
            p_up.show();
        }
    }
//背景图切换
// 侧边点切换
    $('.dot_select ul').on('click','li',function(){
        var dot_now = $(this);
        var nowIndex = dot_now.index();
        dot_changes(nowIndex);
        pagechanges();
    })
    /* 登录悬浮框 */
    var cur_code = "HVIU";
    cur_code = refreash();
    $('#logcode_in').click(function () {
        cur_code = refreash();
    });
    $('#signcode_in').click(function () {
        cur_code = refreash();
    });
    /* 验证码更新函数 */
    function refreash() {
        var str = "azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
        var n = 4,
            s = "";
        for (var i = 0; i < n; i++) {
            var rand = Math.floor(Math.random() * str.length);
            s += str.charAt(rand);
        }
        $('.word_1').text(s[0]);
        $('.word_2').text(s[1]);
        $('.word_3').text(s[2]);
        $('.word_4').text(s[3]);
        return s;
    }
    /* 登录窗口切换 */
    var l_window = $('#window');
    var for_login = $('#window .for_login');
    var for_signup = $('#window .for_signup');
    var l_mask = $('.wrapper').find('.bg_mask');

    $('#login').click(function () {
        $('input').val("");
        cur_code = refreash();
        l_window.show();
        for_signup.hide();
        for_login.show();
        l_mask.css("display", "block");
    })
})