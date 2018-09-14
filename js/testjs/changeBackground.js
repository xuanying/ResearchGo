$(function(){
    $('#btn').click(function(){
        var param = {'top': -637 + 'px'};
        $('#img').stop().animate(param,0.6 * 1000,'swing');
    })
    $('#jump').click(function(){
        $(window).attr('location','http://www.baidu.com');
    })
    $('#encode').click(function(){
        var username = "余飞";
        console.log(username + 'username');
        console.log('encodeURI' + encodeURI(username));
        // console.log('base64' + $.base64.encode(username));
        console.log('base64 encodeURI' + $.base64.encode(encodeURI(username)));
    })

    //测试云标签
    var keyword_area = $('#jqcloud');
    var keyword = '{"keyword":["java","c","c++","c#","python","go","javascript","ruby","html","css"]}';
    var keywordjson = JSON.parse(keyword);
    var keyword_len = keywordjson.keyword.length;
    if(keyword_len > 10){
        keyword_len = 10;
    }else if(keyword_len > 0 && keyword_len < 5){
        keyword_area.css('height','300px');
    }else if(keyword_len === 0){
        keyword_area.css('height','0');
    }
    var string_ = '';
    for(let i = 0;i < keyword_len; i++){
        let text,weight;
        text = keywordjson.keyword[i];
        weight = 10 -i;
        string_ += '{text:"' + text + '",weight:"' + weight + '",html:{"class":"span_list"}},'
    }
    var word_list = eval("[" + string_ + "]");
    keyword_area.jQCloud(word_list);
    $.each(keyword_area.find('.span_list'),function () {
        var keyword_now = '';
        var keyword_this = $(this).text();
        $.each(authorInfo.Author_Keyword,function (n,value) {
            if(ReplaceFirstUper(value) == keyword_this){
                keyword_now = value;
            }
        });
        var str = '/keywordDetail/?Keyword='+$.base64.encode(encodeURI(keyword_now))+'&Domain_ls='+$.base64.encode(encodeURI(JSON.stringify(domain_ls)));
        $(this).html('<a href = "' + str + '">' + $(this).text() + '</a>');
    });
})