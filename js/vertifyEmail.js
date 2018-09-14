/*VerifyEmailAddress*/
$(function () {
    var formData_checked = [];
    var emailAddr, emailAddr_list = [];
    // var emailAddr ='123456789012345678901@abc.com', emailAddr_list=['123456@abc.com','345678@abc.com','345678@abc.com','345678@abc.com','345678@abc.com'];
    var destUrl = '/activation/';
    var loginUrl = '/register/';
    emailAddr = (function () {
        return $('#emailData').text();
    })();

    emailAddr_list = (function () {
        var list = [];
        if ($('#emailData-list').text() == "") return list;
        var jsonObj = $.parseJSON($('#emailData-list').text());
        for (var key in jsonObj) {
            list.push(jsonObj[key]);
        }
        return list;
    })();
    var len = emailAddr_list.length;
    $('#submit').click(function () {
        formData_checked.push(emailAddr);
        $('input:checkbox:checked').each(function () {
            formData_checked.push($(this).val());
        });
        $.post(destUrl, {
            Email: JSON.stringify(formData_checked)
        }, function (receive) {
            if (receive) {
                // location.href=homeUrl;
                alert("已经向邮箱发送验证链接，请点击验证链接之后重新登录");
                location.href = loginUrl;
            } else {
                alert("验证邮件发送失败，稍后请重试");;
            }
            // alert('提交成功');
        });
    });
    var optEmail = [];
    var tmpEmail = $("#fg0");
    tmpEmail.find("label").text(emailAddr);
    tmpEmail.find("input").val(emailAddr);
    for (var i = 0; i < len; i++) {
        tmpEmail.after("<div></div>");
        optEmail[i] = tmpEmail.next();
        optEmail[i].addClass("form_group");
        optEmail[i].append('<span>可选邮箱：</span>').append('<label></label>');
        optEmail[i].find("label").text(emailAddr_list[i]).attr('for', 'email_addr' + (i + 1));
        optEmail[i].append(' <input type="checkbox" >');
        optEmail[i].find("input").val(emailAddr_list[i]).attr('id', 'email_addr' + (i + 1));
        tmpEmail = optEmail[i];
    }
    //alert($("#fg0").find("label").text());
});