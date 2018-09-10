$(function () {
    /*------input框focus------*/
    var in_con = $('#input_con');
    var con_in = $('.con_input');
    in_con.focus(function () {
        con_in.css('border', '1px solid #2caeb6');
        con_in.css('border-shadow', '0 0 2px 0 #6a9997');
    });
    in_con.blur(function () {
        con_in.css('border', '1px solid #c3c3c3');
        con_in.css('border-shadow', '0 0 2px 0 #969696');
    });
    // 从后台获取数据

    //数据处理
    var try_info;
    try_info = '{"Try_Author":{"Full_Name":"Ming Liu","Author_Email":"None","Author_Name":"Ming Liu","Author_ID":"None"},"Try_Keyword":{"Keyword": "Machine Learning","Keyword_Domain":"Name"}}';
    var try_data = $.parseJSON(try_info);
    var try_author = try_data.Try_Author;
    var try_keyword = try_data.Try_Keyword;
    var str2 = '/keywordDetail/?Keyword=' + $.base64.encode(encodeURI(try_keyword.Keyword)) + '&Keyword_Domain=' + $.base64.encode(encodeURI(try_keyword.Keyword_Domain));
    var str1 = '/authorDetail/?Author_Name=' + $.base64.encode(encodeURI(try_author.Author_Name)) + '&Author_Email=' + $.base64.encode(encodeURI(try_author.Author_Email)) + '&Author_ID=' + $.base64.encode(encodeURI(try_author.Author_ID));
    var try_div = '<a href =' + str1 + '>' + try_author.Full_Name + '</a><a href =' + str2 + '>' + try_keyword.Keyword + '</a>';
    $('p.search_try').append(try_div);

    // 根据个人喜好，推荐文章和机构
    var direURL = 'http://www.baidu.com';
    var paperURL;
    var orgURL;
    var curURL;
    $('#dire').attr('href',direURL);
})