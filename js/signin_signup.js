$(function () {
    var wrapper = $('.wrapper');
    var main_page = wrapper.find('.main_page');
    var pageNum = main_page.length;
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
        wrapper.css('width', windowWidth + 'px');
        wrapper.css('height', pageNum * windowHeight + 'px')
    }

    //浏览器大小变化时,背景图 1 的改变
    window.onresize = function () {
        init();
        dot_changes(0);
    };
    //侧边点切换函数
    function dot_changes(index) {
        $('.dotted_now').removeClass('dotted_now').addClass('dotted');
        $('.dot_select ul').find('li:eq(' + index + ')').removeClass('dotted').addClass('dotted_now');
    }
    // 背景图切换函数
    var p_up = $('.p_up');
    var p_down = $('.p_down');

    function pagechanges() {
        let index = $('.dotted_now').index();
        var offset = index * windowHeight * -1;
        var param = {
            'top': offset + 'px'
        };
        wrapper.stop().animate(param, 0.6 * 1000, 'swing');
        if (index == 0) {
            p_up.hide();
            p_down.show();
        } else if (index == $('.dot_select ul li').length - 1) {
            p_down.hide();
            p_up.show();
        } else {
            p_down.show();
            p_up.show();
        }
    }
    //背景图切换
    // 侧边点切换
    $('.dot_select ul').on('click', 'li', function () {
        var dot_now = $(this);
        let nowIndex = dot_now.index();
        dot_changes(nowIndex);
        pagechanges();
    })
    //p_up,p_down切换
    p_down.on('click', function () {
        let index = ($('.dotted_now').index() + 1) % 4;
        dot_changes(index);
        pagechanges();
    })
    p_up.on('click', function () {
        let index = ($('.dotted_now').index() - 1) % 4;
        dot_changes(index);
        pagechanges();
    })
    //鼠标滚轮切换

    $(document).on('mousewheel DOMMouseScroll', function (event) {
        let delta =
            (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
            (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1)); // firefox
        let index = $('.dotted_now').index();
        if (delta > 0) {
            index -= 1;
            if (index > -1) {
                dot_changes(index);
                pagechanges();
            }
        } else if (delta < 0) {
            index += 1;
            if (index < 4) {
                dot_changes(index);
                pagechanges();
            }
        }
    })
    // $(document).on('mousewheel',function(event,delta){

    // })

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
    });

    $('#signup').click(function(){
        $('input').val('');
        cur_code = refreash();
        l_window.show();
        for_login.hide();
        for_signup.show();
        l_mask.css('display','block');
    })
    $('.for_login .perspective').find('label').click(function(){
        cur_code = refreash();
        for_login.hide();
        for_signup.show();
    });
    $('.for_signup .perspective').find('label').click(function(){
        cur_code = refreash();
        for_signup.hide();
        for_login.show();
    });
    // 关闭窗口
    $('.img_x').click(function () {
        l_window.hide();
        l_mask.css("display", "none");
    })
    //登录提交
    $('#logsub').click(function () {
        let username = $('#logName').val();
        let psd = $('#logPsd').val();
        let ucode = $('#logcode_up').val();
        let post_data;
        if (username == '' || psd == '') {
            alert('用户名和密码不能为空！');
        } else if (ucode == '') {
            alert('验证码不能为空');
        } else if (ucode.toLowerCase() != cur_code.toLowerCase()) {
            alert('验证码输入错误!');
        } else {
            post_data = {
                username: username,
                password: psd,
                state: 'login'
            };
            $.ajax({
                url: '',
                type: "POST",
                data: post_data,
                success: function (redata) {
                    let data = JSON.parse(redata);
                    if (data['err'] != null) {
                        alert(data['err']);
                    } else if (data['type'] == '0') {
                        $(window).attr('location', '/index/?username=' + $.base64.encode(encodeURI(data["username"])));
                    } else if (data['type'] == '1') {
                        $(window).attr('location', '/activation/?username=' + $.base64.encode(encodeURI(data["username"])));
                    } else if (data['type'] == '2') {
                        (window).attr('location', '/information_perfect/?username=' + $.base64.encode(encodeURI(data["username"])));
                    } else {
                        alert('error!');
                    }
                }
            })
        }
    })
    //注册提交
    $('#signsub').click(function () {
        let username = $('#signName').val();
        let psd = $('#signPsd').val();
        let repsd = $('#repsd').val();
        let ucode = $('#signcode_up').val();
        let post_data;
        if (username == '' || psd == '') {
            alert('邮箱密码不能为空！');
        } else if (psd != repsd) {
            alert('两次密码输入不一致！')
        } else if (ucode == '') {
            alert('验证码不能为空！');
        } else if (ucode.toLowerCase() != cur_code.toLowerCase()) {
            alert('验证码输入错误！');
        } else {
            post_data = {
                username: username,
                password: psd,
                state: 'register'
            };
            $.ajax({
                url: '',
                type: 'POST',
                data: post_data,
                success: function (redata) {
                    let data = JSON.parse(redata);
                    if (data['err'] != null) {
                        alert(data['err']);
                    } else if (data['type'] == 2) {
                        $(window).attr('location', '/information_perfect/?username=' + $.base64.encode(encodeURI(data["username"])));
                    } else {
                        alert('error!');
                    }
                }
            })
        }
    })


})