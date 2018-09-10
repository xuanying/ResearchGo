$(function () {
    /*------我的导航栏------*/
    $('#t_list').mouseenter(function () {
        $('#t_list .topbar_list').stop().slideDown(200);
    });
    $('#t_list').mouseleave(function () {
        $('#t_list .topbar_list').stop().slideUp(200);
    });

    /*------input框focus------*/
    $('#input_con').focus(function () {
        $('.search_input').css('border', '1px solid #2caeb6');
        $('.search_input').css('border-shadow', '0 0 2px 0 #6a9997');
    });
    $('#input_con').blur(function () {
        $('.search_input').css('border', '1px solid #c3c3c3');
        $('.search_input').css('border-shadow', '0 0 2px 0 #969696');
    });

    /*------点击图标回首页------*/
    $('.topbar_title img').click(function () {
        $(window).attr('location', '/index/');
    });


    /*------用户名和头像填充------*/
    var user_show = $("#user_show").html();
    user_show = '{"User_Email": "None","Nick_Name": "Christopher","Portrait":"None"}';
    var user_data = $.parseJSON(user_show);
    var user_name = user_data.Nick_Name;
    var portrait_data = user_data.Portrait;
    if (portrait_data != "None" && portrait_data != "{{Portrait}}") {
        $("img.portrait").attr("src", "data:image/jpg;base64," + portrait_data);
    } else {
        $("img.portrait").attr("src", "./images/signup1.jpg");
    } //头像
    if (user_name != "None") {
        $("#user_name").html(user_name);
    } //用户名
})