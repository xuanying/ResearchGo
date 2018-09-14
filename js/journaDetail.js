$(function(){
    //数据处理
    var journaldetail_data = $("#journaldetaildata").text();
    journaldetail_data = '{"Journal":"i-Perception","ISSN":"20416695","Year":"2010","Level":"D","Journal_Impact_Factor":"1.29","Paper_Num":{"2011":10,"2012":20,"2013":30,"2014":40,"2015":50},"hot_keyword":[{"Keyword":"Autoencoder","Keyword_Domain":"None"},{"Keyword":"Machine Learning","Keyword_Domain":"None"},{"Keyword":"Deep Learning","Keyword_Domain":"None"},{"Keyword":"Deep Architecture","Keyword_Domain":"None"},{"Keyword":"Face Recognition","Keyword_Domain":"None"},{"Keyword":"Artificial Intellegence","Keyword_Domain":"None"},{"Keyword":"Feature Learning","Keyword_Domain":"None"},{"Keyword":"Computer Science","Keyword_Domain":"None"},{"Keyword":"Big Data","Keyword_Domain":"None"},{"Keyword":"Neural","Keyword_Domain":"None"}],"potentail_word":[{"Keyword":"software","Keyword_Domain":"None"},{"Keyword":"computer science","Keyword_Domain":"None"},{"Keyword":"cascading style sheet","Keyword_Domain":"None"},{"Keyword":"javascript","Keyword_Domain":"None"},{"Keyword":"Deep Learning","Keyword_Domain":"None"},{"Keyword":"Interconnection","Keyword_Domain":"None"},{"Keyword":"object recognition","Keyword_Domain":"None"},{"Keyword":"arbitrary","Keyword_Domain":"None"},{"Keyword":"wireless network","Keyword_Domain":"None"},{"Keyword":"deterministic channels","Keyword_Domain":"None"}],"Author_Rec":{"Andrew Y. Ng":{"Author_Email":"None","Author_Name":"Andrew Y. Ng","Author_ID":"None"},"Simon Osindero":{"Author_Email":"None","Author_Name":"Simon Osindero","Author_ID":"None"},"James Bergstra":{"Author_Email":"None","Author_Name":"James Bergstra","Author_ID":"None"},"Carl E. Rasmussen":{"Author_Email":"None","Author_Name":"Carl E. Rasmussen","Author_ID":"None"},"Samy Bengio":{"Author_Email":"None","Author_Name":"Samy Bengio","Author_ID":"None"},"Yoshua Bengio":{"Author_Email":"None","Author_Name":"Yoshua Bengio","Author_ID":"None"},"Ruslan Salakhutdinov":{"Author_Email":"None","Author_Name":"Ruslan Salakhutdinov","Author_ID":"None"},"Geoffrey E. Hinton":{"Author_Email":"None","Author_Name":"Geoffrey E. Hinton","Author_ID":"None"},"Shang Ma":{"Author_Email":"None","Author_Name":"Shang Ma","Author_ID":"None"},"Roger B. Grosse":{"Author_Email":"None","Author_Name":"Roger B. Grosse","Author_ID":"None"}}}';
    var journaldetail_data_list = $.parseJSON(journaldetail_data);

    //首字母大写
    function ReplaceFirstUper(str){
        str = str.toLowerCase();
        return str.replace(/\b(\w)|\s(\w)/g, function(m){ return m.toUpperCase(); });
    }

    //填入期刊的基本信息：名称、ISSN、领域档次、影响因子
    $(".journal_header h2").text(ReplaceFirstUper(journaldetail_data_list.Journal));
    $(".journal_ISSN .detail_message p").text(journaldetail_data_list.ISSN);
    $(".journal_factor .detail_message p").text(journaldetail_data_list.Journal_Impact_Factor);

   
	//绘制近五年文章趋势图
	//绘制折线图
    var num_list = [], high_list = [], year_list = [];
    $.each(journaldetail_data_list.Paper_Num,function (key,value) {
        year_list.push(key);
        num_list.push(value);
    });
    var hot_words_data = [
        {
            name : '文章数量',
            value:num_list,
            color:'#1f7e92',
            line_width:2
        }
    ];
    //绘制柱状图
    $('#hot_canvasDiv').highcharts({
        chart: {
            type: 'column',
            width: 650,
            height: 450,
            marginTop: 50
        },
        title: {
            text: ''
        },
        xAxis: {
            title: {
                align: 'high',
                text: '年份'
            },
            categories: year_list
        },
        yAxis: [{
            min: 0,
            title: {
                rotation: '',
                align: 'high',
                text: '文章数'
            },
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            events: {
                legendItemClick: function () {
                    return false;
                }
            },
            name: '文章数',
            color: 'rgba(165,170,217,1)',
            data: num_list,
            pointPadding: 0.3,
            pointPlacement: 0
        }]
    });

    //热门关键词、潜力关键词填充
    function fill_cloud(k_area,k_list){
        if(k_list.length > 0){
            var K_length = k_list.length;
            if(k_list.length > 10){
                K_length = 10;
                //-----------------------------------当关键词数量较少时，减小词云区域的高度
            }else if(k_list.length === 0){
                k_area.css("height","0");
            }//------------------------------------------高度控制 end
            var my_keywords = new Array(K_length);
            for(var i = 0;i < K_length; i++){
                my_keywords[i] = new Array(2);
            }
            for(i = 0;i < K_length; i++){
                // my_keywords[i][0] = authorInfo.Keyword_List[i] + '<em style="font-size: 14px">--词内排名：20</em>';
                my_keywords[i][0] = ReplaceFirstUper(k_list[i].Keyword);
                my_keywords[i][1] = 10 - i;
            }
            var string_ = "";
            for ( i = 0; i < my_keywords.length; i++) {
                var string_f = my_keywords[i][0];
                var string_n = my_keywords[i][1];
                if(string_f.indexOf("'")>0){

                }else{
                    string_ += "{text: '" + string_f + "', weight: '" + string_n + "',html: {'class': 'span_list'}},";
                }
            }
            var string_list = string_;
            var word_list = eval("[" + string_list + "]");

            k_area.jQCloud(word_list);
            setTimeout(function () {
                $.each(k_area.find('.span_list'),function () {
                    var keyword_now = '';
                    var keyword_domain = '';
                    var keyword_this = $(this).text();
                    $.each(k_list,function (n,value) {
                        if(ReplaceFirstUper(value.Keyword) == keyword_this){
                            keyword_now = value.Keyword;
                            keyword_domain = value.Keyword_Domain;
                        }
                    });
                    var str = '/keywordDetail/?Keyword='+$.base64.encode(encodeURI(keyword_now))+'&Keyword_Domain='+$.base64.encode(encodeURI(keyword_domain));
                    $(this).html('<a href = "' + str + '">' + $(this).text() + '</a>');
                });
            },1000);
        }else {
            k_area.css('height','100px');
        }
    }

    //初始化词云
    var poten_w = journaldetail_data_list.potentail_word;
    var poten_a = $('#potential_keywords');
    fill_cloud(poten_a,poten_w);
    var hot_w = journaldetail_data_list.hot_keyword;
    var hot_a = $('#hot_keywords');
    fill_cloud(hot_a,hot_w);
    setTimeout(function () {
        poten_a.hide();
    },100);

    //热门关键词和潜力关键词的切换
    $(".main_content_head .title").click(function () {
        if($(".main_content_head .active").text() == $(this).text()){
            return false;
        }
       $(this).siblings().removeClass("active");
       $(this).addClass("active");
       if($(this).text() == "热门关键词"){
            hot_a.show();
            poten_a.hide();
        }else if($(this).text() == "潜力关键词"){
            hot_a.hide();
            poten_a.show();
        }
    });
    
    //填充知名学者
    var li_str,link_str;
    var ul_div = $('.jour_auth ul');
    var author_list = journaldetail_data_list.Author_Rec;
    var i = 1;
    $.each(author_list,function(key,value){
        link_str = '/authorDetail/?Author_Name='+$.base64.encode(encodeURI(value.Author_Name))+'&Author_Email='+$.base64.encode(encodeURI(value.Author_Email))+'&Author_ID='+$.base64.encode(encodeURI(value.Author_ID));
        li_str = '<li><span class="num">' + i + '</span><a href=' + link_str + 'class="word_list">' + key + '</a></li>';
        ul_div.append(li_str);
        i++;
    });
})