$(function () {
    //首字母大写
    function ReplaceFirstUper(str) {
        str = str.toLowerCase();
        return str.replace(/\b(\w)|\s(\w)/g, function (m) {
            return m.toUpperCase();
        });
    }
    //数据处理
    var author_data = $("#author_data").text();
    // author_data = '{"Author_Email":"67815265@qq.com","Author_Name":"Zhang David D.","Author_ID":"None","Author_Portrait":"None","If_Collect":"True","If_Atten":"True","Author_Domain":{"Materials Science(all)":[],"Computer Science(all)":["software","information systems","artificial intelligence","computer network and comunications"],"Engineering(all)":["biomedical engineering"],"Health Professions(all)":["health information management"],"Mathematics(all)":[]},"Middle_R_Level":{"Materials Science(all)":"R2","Computer Science(all)":"R0","Engineering(all)":"R0","Health Professions(all)":"R3","Mathematics(all)":"R1"},"Phone":"","Author_Level":"R0","Author_Institution":{"Institution":"Hong Kong Polytechnic University","Institution_ID":"None"},"Article_Num":"157","Article_High":"67","Cited_Num":"4","Cited_High":"0","Personal_Homepage":"","Personal_Show":"","Author_Keyword":["Computer","Materials Science","Computer Science","software","information systems","artificial intelligence","Health Professions","health information management","Mathematics","Engineering"],"Author_Paper":[{"Paper_Title":"A Novel Pattern Clustering Algorithm Based on Particle Swarm Optimization Joint Adaptive Wavelet Neural Network Model","Paper_Journal":"MOBILE NETWORKS & APPLICATIONS","Journal_Level":"C","Paper_Year":"2010","Paper_Level":"C","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Chandra V.":{"Author_Email":"vikas","Author_Name":"Chandra V.","Author_ID": "26767588000","Author_Level":"R0"},"Dasika G.":{"Author_Email":"vikas","Author_Name":"Dasika G.","Author_ID": "26767588000","Author_Level":"R0"},"Chiyuan Zhang":{"Author_Email":"vikas","Author_Name":"Chiyuan Zhang","Author_ID": "26767588000","Author_Level":"R0"},"Moritz Hardt":{"Author_Email":"vikas","Author_Name":"Moritz Hardt","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"5","Cited_High":"9"},{"Paper_Title":"Human-level control through deep reinforcement learning","Paper_Journal":"Nature","Journal_Level":"A","Paper_Year":"2015","Paper_Level":"A","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Demis Hassabis":{"Author_Email":"vikas","Author_Name":"Demis Hassabis","Author_ID": "26767588000","Author_Level":"R0"},"Koray Kavukcuoglu":{"Author_Email":"vikas","Author_Name":"Koray Kavukcuoglu","Author_ID": "26767588000","Author_Level":"R0"},"Volodymyr Mnih":{"Author_Email":"vikas","Author_Name":"Volodymyr Mnih","Author_ID": "26767588000","Author_Level":"R0"},"David Silver":{"Author_Email":"vikas","Author_Name":"David Silver","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"10","Cited_High":"6"},{"Paper_Title":"Mastering the game of Go with deep neural networks and tree search","Paper_Journal":"Nature","Journal_Level":"A","Paper_Year":"2016","Paper_Level":"B","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Demis Hassabis":{"Author_Email":"vikas","Author_Name":"Demis Hassabis","Author_ID": "26767588000","Author_Level":"R0"},"Aja Huang":{"Author_Email":"vikas","Author_Name":"Aja Huang","Author_ID": "26767588000","Author_Level":"R0"},"Madeleine Leach":{"Author_Email":"vikas","Author_Name":"Madeleine Leach","Author_ID": "26767588000","Author_Level":"R0"},"Timothy P. Lillicrap":{"Author_Email":"vikas","Author_Name":"Timothy P. Lillicrap","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"15","Cited_High":"9"},{"Paper_Title":"Learning Deep Belief Networks from Non-stationary Streams","Paper_Journal":"ICANN","Journal_Level":"A","Paper_Year":"2012","Paper_Level":"A","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Federico Montesino-Pouzols":{"Author_Email":"vikas","Author_Name":"Federico Montesino-Pouzols","Author_ID": "26767588000","Author_Level":"R0"},"Marc Peter Deisenroth":{"Author_Email":"vikas","Author_Name":"Marc Peter Deisenroth","Author_ID": "26767588000","Author_Level":"R0"},"Tapani Raiko":{"Author_Email":"vikas","Author_Name":"Tapani Raiko","Author_ID": "26767588000","Author_Level":"R0"},"Roberto Calandra":{"Author_Email":"vikas","Author_Name":"Roberto Calandra","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"25","Cited_High":"19"},{"Paper_Title":"A Classification-Based Polyphonic Piano Transcription Approach Using Learned Feature Representations","Paper_Journal":"ISMIR","Journal_Level":"A","Paper_Year":"2011","Paper_Level":"C","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Malcolm Slaney":{"Author_Email":"vikas","Author_Name":"Malcolm Slaney","Author_ID": "26767588000","Author_Level":"R0"},"Honglak Lee":{"Author_Email":"vikas","Author_Name":"Honglak Lee","Author_ID": "26767588000","Author_Level":"R0"},"Jiquan Ngiam":{"Author_Email":"vikas","Author_Name":"Jiquan Ngiam","Author_ID": "26767588000","Author_Level":"R0"},"Juhan Nam":{"Author_Email":"vikas","Author_Name":"Juhan Nam","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"24","Cited_High":"12"}],"Friend_List":{},"Fans_List":{},"Attention_List":{}}';
    author_data = '{"Author_Email":"67815265@qq.com","Author_Name":"Zhang David D.","Author_ID":"None","Author_Portrait":"None","If_Collect":"True","If_Atten":"True","Author_Domain":{"Materials Science(all)":[],"Computer Science(all)":["software","information systems","artificial intelligence","computer network and comunications"],"Engineering(all)":["biomedical engineering"],"Health Professions(all)":["health information management"],"Mathematics(all)":[]},"Middle_R_Level":{"Materials Science(all)":"R2","Computer Science(all)":"R0","Engineering(all)":"R0","Health Professions(all)":"R3","Mathematics(all)":"R1"},"Phone":"","Author_Level":"R0","Author_Institution":{"Institution":"Hong Kong Polytechnic University","Institution_ID":"None"},"Article_Num":"157","Article_High":"67","Cited_Num":"4","Cited_High":"0","Personal_Homepage":"","Personal_Show":"这个人很懒，什么都没留下","Author_Keyword":["Computer","Materials Science","Computer Science","software","information systems","artificial intelligence","Health Professions","health information management","Mathematics","Engineering"],"Author_Paper":[{"Paper_Title":"A Novel Pattern Clustering Algorithm Based on Particle Swarm Optimization Joint Adaptive Wavelet Neural Network Model","Paper_Journal":"MOBILE NETWORKS & APPLICATIONS","Journal_Level":"C","Paper_Year":"2010","Paper_Level":"C","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author":{"Chandra V.":{"Author_Email":"vikas","Author_Name":"Chandra V.","Author_ID":"26767588000","Author_Level":"R0"},"Dasika G.":{"Author_Email":"vikas","Author_Name":"Dasika G.","Author_ID":"26767588000","Author_Level":"R0"},"Chiyuan Zhang":{"Author_Email":"vikas","Author_Name":"Chiyuan Zhang","Author_ID":"26767588000","Author_Level":"R0"},"Moritz Hardt":{"Author_Email":"vikas","Author_Name":"Moritz Hardt","Author_ID":"26767588000","Author_Level":"R0"}},"Cited_Num":"5","Cited_High":"9"},{"Paper_Title":"Human-level control through deep reinforcement learning","Paper_Journal":"Nature","Journal_Level":"A","Paper_Year":"2015","Paper_Level":"A","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author":{"Demis Hassabis":{"Author_Email":"vikas","Author_Name":"Demis Hassabis","Author_ID":"26767588000","Author_Level":"R0"},"Koray Kavukcuoglu":{"Author_Email":"vikas","Author_Name":"Koray Kavukcuoglu","Author_ID":"26767588000","Author_Level":"R0"},"Volodymyr Mnih":{"Author_Email":"vikas","Author_Name":"Volodymyr Mnih","Author_ID":"26767588000","Author_Level":"R0"},"David Silver":{"Author_Email":"vikas","Author_Name":"David Silver","Author_ID":"26767588000","Author_Level":"R0"}},"Cited_Num":"10","Cited_High":"6"},{"Paper_Title":"Mastering the game of Go with deep neural networks and tree search","Paper_Journal":"Nature","Journal_Level":"A","Paper_Year":"2016","Paper_Level":"B","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author":{"Demis Hassabis":{"Author_Email":"vikas","Author_Name":"Demis Hassabis","Author_ID":"26767588000","Author_Level":"R0"},"Aja Huang":{"Author_Email":"vikas","Author_Name":"Aja Huang","Author_ID":"26767588000","Author_Level":"R0"},"Madeleine Leach":{"Author_Email":"vikas","Author_Name":"Madeleine Leach","Author_ID":"26767588000","Author_Level":"R0"},"Timothy P. Lillicrap":{"Author_Email":"vikas","Author_Name":"Timothy P. Lillicrap","Author_ID":"26767588000","Author_Level":"R0"}},"Cited_Num":"15","Cited_High":"9"},{"Paper_Title":"Learning Deep Belief Networks from Non-stationary Streams","Paper_Journal":"ICANN","Journal_Level":"A","Paper_Year":"2012","Paper_Level":"A","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author":{"Federico Montesino-Pouzols":{"Author_Email":"vikas","Author_Name":"Federico Montesino-Pouzols","Author_ID":"26767588000","Author_Level":"R0"},"Marc Peter Deisenroth":{"Author_Email":"vikas","Author_Name":"Marc Peter Deisenroth","Author_ID":"26767588000","Author_Level":"R0"},"Tapani Raiko":{"Author_Email":"vikas","Author_Name":"Tapani Raiko","Author_ID":"26767588000","Author_Level":"R0"},"Roberto Calandra":{"Author_Email":"vikas","Author_Name":"Roberto Calandra","Author_ID":"26767588000","Author_Level":"R0"}},"Cited_Num":"25","Cited_High":"19"},{"Paper_Title":"A Classification-Based Polyphonic Piano Transcription Approach Using Learned Feature Representations","Paper_Journal":"ISMIR","Journal_Level":"A","Paper_Year":"2011","Paper_Level":"C","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author":{"Malcolm Slaney":{"Author_Email":"vikas","Author_Name":"Malcolm Slaney","Author_ID":"26767588000","Author_Level":"R0"},"Honglak Lee":{"Author_Email":"vikas","Author_Name":"Honglak Lee","Author_ID":"26767588000","Author_Level":"R0"},"Jiquan Ngiam":{"Author_Email":"vikas","Author_Name":"Jiquan Ngiam","Author_ID":"26767588000","Author_Level":"R0"},"Juhan Nam":{"Author_Email":"vikas","Author_Name":"Juhan Nam","Author_ID":"26767588000","Author_Level":"R0"}},"Cited_Num":"24","Cited_High":"12"}],"Friend_List":{},"Fans_List":{},"Attention_List":{}}'
    var authorInfo = $.parseJSON(author_data);
    var domain_ls = [];

    if (authorInfo.Author_Portrait != null) { //头像
        $(".basic_information .portrait img").attr("src", "data:image/jpg;base64," + authorInfo.Portrait);
    }
    $(".information_head .name").text(authorInfo.Author_Name); //姓名
    //小领域对象
    //显示作者所在中领域
    $.each(authorInfo.Author_Domain, function (key, value) {
        domain_ls.push(key);
        $(".field_rank .fields_all ul").append('<li id="' + key + '">' + ReplaceFirstUper(key.substr(0, key.length - 5)) + ' (' + authorInfo.Middle_R_Level[key] + ')' + '</li>');
    });
    $(".field_rank .fields_all ul li").on('mouseover', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var field_id = $(this).attr('id');
        if (authorInfo.Author_Domain[field_id].length > 0) {
            var layer = document.createElement("div");
            layer.id = "layer";
            if (document.getElementById("layer") == null) {
                $(".field_rank").append(layer);
                $("#layer").append('<ul></ul>');
                var key = field_id;
                var length_Order = authorInfo.Author_Domain[field_id].sort(function (a, b) {
                    if (a.length < b.length) return -1;
                    if (a.length > b.length) return 1;
                    return 0;
                });
                length_Order.forEach(function (p) {
                    var r_grade = authorInfo.Middle_R_Level[field_id];
                    if (r_grade == 'R0') {
                        $("#layer ul").append('<li><span class="' + key + '" id="' + p + '">' + ReplaceFirstUper(p) + '<span> Top 5‰</span>' + '</span></li>');
                    } else if (r_grade == 'R1') {
                        $("#layer ul").append('<li><span class="' + key + '" id="' + p + '">' + ReplaceFirstUper(p) + '<span> Top 5%</span>' + '</span></li>');
                    } else if (r_grade == 'R2') {
                        $("#layer ul").append('<li><span class="' + key + '" id="' + p + '">' + ReplaceFirstUper(p) + '<span> Top 1/4</span>' + '</span></li>');
                    } else if (r_grade == 'R3') {
                        $("#layer ul").append('<li><span class="' + key + '" id="' + p + '">' + ReplaceFirstUper(p) + '<span> Top 1/2</span>' + '</span></li>');
                    } else if (r_grade == 'R4') {
                        $("#layer ul").append('<li><span class="' + key + '" id="' + p + '">' + ReplaceFirstUper(p) + '<span> Top 3/4</span>' + '</span></li>');
                    } else {
                        $("#layer ul").append('<li><span class="' + key + '" id="' + p + '">' + ReplaceFirstUper(p) + '<span> Top ...</span>' + '</span></li>');
                    }
                });
            }
        }
    });
    $(".field_rank .fields_all ul li").on('mouseleave', function () {
        $(this).removeClass('active');
        $("#layer").remove();
    });
    //Level
    if (authorInfo.Author_Level == null) {
        $("#author_level").text('R5');
    } else {
        $("#author_level").text(authorInfo.Author_Level);
    }
    //organization
    var org_str = '/institution/?Institution=' + $.base64.encode(encodeURI(authorInfo.Author_Institution.Institution)) + '&InstitutionId=' + $.base64.encode(encodeURI(authorInfo.Author_Institution.InstitutionId));
    $("#org").append('<a href = ' + org_str + '>' + authorInfo.Author_Institution.Institution + '</a>'); //机构
    //connection
    if (authorInfo.Phone) {
        $(".connection ul").append('<li><img src="./images/phone.png"><span>' + authorInfo.Phone + '</span></li>'); //电话
    }
    $(".connection ul").append('<li><img src="./images/email.png"><span>' + authorInfo.Author_Email + '</span></li>');
    $("#cited_num").text(authorInfo.Cited_High + '/' + authorInfo.Cited_Num); //引用数
    $("#article_num").text(authorInfo.Article_High + '/' + authorInfo.Article_Num); //文章数
    $("#page").text(authorInfo.Personal_Homepage); //个人主页
    if (authorInfo.Personal_Show) {
        $("#introduction").text(authorInfo.Personal_Show); //个人简介
    }
    $("#int_more").click(function (e) {
        $('#introduction_more').show();
        e.stopPropagation();
    });
    $("#introduction_more").click(function (e) {
        e.stopPropagation();
    });
    $(document).on("click", function () {
        $("#introduction_more").hide();
    });
    //文章列表
    var articles = $(".new_list");
    var article_li = "";
    //设置默认排序
    var tOrder = authorInfo.Author_Paper.sort(function (a, b) {
        if (a.Paper_Year > b.Paper_Year) return -1;
        if (a.Paper_Year < b.Paper_Year) return 1;
        if (a.Paper_Year = b.Paper_Year) {
            a.Paper_Level.localeCompare(b.Paper_Level);
        }
        return 0;
    });
    articles.empty();
    $.each(tOrder, function (index, value) {
        create_articleLi(value);
        articles.append(article_li);
    });

    function create_articleLi(value) {
        var str = '/paperDetail/?Paper_Title=' + $.base64.encode(encodeURI(value.Paper_Title)) + '&Paper_Journal=' + $.base64.encode(encodeURI(value.Paper_Journal)) + '&Paper_Year=' + $.base64.encode(encodeURI(value.Paper_Year));
        article_li = '<li><h3><span class="ar_year">' + value.Paper_Year + '</span><a href=' + str + '>' + value.Paper_Title + '</a></h3>';
        //作者
        article_li += '<p class="ar_author">';
        $.each(value.Paper_Author, function (n, val) {
            str = '/authorDetail/?Author_Name=' + $.base64.encode(encodeURI(val.Author_Name)) + '&Author_Email=' + $.base64.encode(encodeURI(val.Author_Email)) + '&Author_ID=' + $.base64.encode(encodeURI(val.Author_ID));
            article_li += '<a href = ' + str + '>' + val.Author_Name + '(' + val.Author_Level + ')</a>';
            if (n != value.Paper_Author.length - 1) {
                article_li += ',';
            }
        });
        article_li = article_li.substring(0, article_li.length - 2);
        article_li += '</p>';
        //刊物
        str = '/journaldetail/?Journal=' + $.base64.encode(encodeURI(value.Paper_Journal));
        if (value.Journal_Level != null) {
            article_li += '<p class="ar_jour"><a href = ' + str + '>' + value.Paper_Journal + '(' + value.Journal_Level + ')</a></p>';
        } else {
            article_li += '<p class="ar_jour"><a href = ' + str + '>' + value.Paper_Journal + '</a></p>';
        }
        //领域
        var article_domainspan = value.Paper_Domain;
        var article_li_domainspan = '';
        if (article_domainspan != null) {
            $.each(article_domainspan, function (key, value) {
                article_li_domainspan += '<span>' + key + '</span>,';
            });
            article_li_domainspan = article_li_domainspan.substring(0, article_li_domainspan.length - 2);
            article_li += '<p class="ar_domain">领域:' + article_li_domainspan + '</p>';
        }

        //档次
        //只取最高档次
        article_li += '<p class="ar_level">档次:<span>' + value.Paper_Level + ' </span></p>';
        article_li += '<div class="item_info"><span class="high_cite">' + value.Cited_High + '</span><span class="cite">' + value.Cited_Num + '</span></div></li>';
    }
    pager(authorInfo.Author_Paper.length);
    //若文章总数大于10，异步加载文章，显示“正在加载”，不显示分页插件和排序选项
    $("#pagerArea").show();
    //按时间排序
    $("#time_ordering").on('click', function () {
        if ($(this).attr("class") == "active") return false;
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        var timeOrder = authorInfo.Author_Paper.sort(function (a, b) {
            if (a.Paper_Year > b.Paper_Year) return -1;
            if (a.Paper_Year < b.Paper_Year) return 1;
            if (a.Paper_Year = b.Paper_Year) {
                a.Paper_Level.localeCompare(b.Paper_Level);
            }
            return 0;
        });
        articles.empty();
        $.each(timeOrder, function (index, value) {
            create_articleLi(value);
            articles.append(article_li);
        });
        pager(timeOrder.length);
    });
    //按档次排序
    $("#level_ordering").on('click', function () {
        if ($(this).attr("class") == "active") return false;
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        var levelOrder = authorInfo.Author_Paper.sort(function (a, b) {
            if (a.Paper_Level.localeCompare(b.Paper_Level) != 0) {
                return a.Paper_Level.localeCompare(b.Paper_Level); //比较两篇文章的等级高低并返回排序
            } else {
                if (a.Paper_Year > b.Paper_Year) return -1;
                if (a.Paper_Year < b.Paper_Year) return 1;
                return 0;
            }
        });
        articles.empty();
        $.each(levelOrder, function (index, value) {
            create_articleLi(value);
            articles.append(article_li);
        });
        pager(levelOrder.length);
    });
    //分页
    function pager(length) {
        var article_list = $(".new_list li");
        $("#pagerArea").cypager({
            pg_size: 2,
            pg_nav_count: 6,
            pg_total_count: length,
            pg_prev_name: '上一页',
            pg_next_name: '下一页'
        });
        var page_now = 0,
            i = 0;
        article_list.hide();
        for (i = 0; i < 2; i++) {
            article_list.eq(i).show();
        }
        $(".pager li").click(function () {
            $(".article_list").css("padding-bottom", 0);
            page_now = parseInt($(".pager li.pg-selected").text()) - 1;
            article_list.hide();
            for (i = page_now * 2; i < (page_now + 1) * 2; i++) {
                article_list.eq(i).show();
            }
        });
    }
    //关键词
    //Start
    var keywords_area = $("#my_keywords");
    if(authorInfo.Author_Keyword.length > 0){
        var K_length = authorInfo.Author_Keyword.length;
        if(authorInfo.Author_Keyword.length > 10){
            K_length = 10;
            //-----------------------------------当关键词数量较少时，减小词云区域的高度
        }else if(0 < authorInfo.Author_Keyword.length && authorInfo.Author_Keyword.length <= 5){
            keywords_area.css("height","240px");
        }else if(authorInfo.Author_Keyword.length === 0){
            keywords_area.css("height","0");
        }//------------------------------------------高度控制 end
        var my_keywords = new Array(K_length);
        for(var i = 0;i < K_length; i++){
            my_keywords[i] = new Array(2);
        }
        for(i = 0;i < K_length; i++){
            my_keywords[i][0] = ReplaceFirstUper(authorInfo.Author_Keyword[i]);
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
        keywords_area.jQCloud(word_list);
            setTimeout(function () {
                $.each(keywords_area.find('.span_list'),function () {
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

            },1000);
    }else {
        $("#my_keywords").css('height','100px');
    }

    /*----------关注与取消author---------*/
    if(authorInfo.If_Atten=='False'){
        $('.concern_already').hide().siblings().show();
    }else{
        $('.concern').hide().siblings().show();
    }
    $('.con_box span').on('click',function () {
        var span_now = $(this);
        var span_class = span_now.attr("class");
        alert(span_class);
        if(span_class == 'send_message'){

        }else{
            span_now.hide().siblings().show();
            if(span_class == 'concern_already'){
                //取消
            }else{
                //关注
            }
        }
    });
    /*-------------author的关注与粉丝------------*/
    //关注与粉丝的填充

    //关注与粉丝的切换
    var concern_list = $('.concern_list');
    var fans_list = $('.fans_list');
    $(".main_content_head .title").click(function () {
        if($(".main_content_head .active").text() == $(this).text()){
            return false;
        }
       $(this).siblings().removeClass("active");
       $(this).addClass("active");
       if($(this).text() == "TA的关注"){
            concern_list.show();
            fans_list.hide();
        }else if($(this).text() == "TA的粉丝"){
            concern_list.hide();
            fans_list.show();
        }
    });
    //关注与取消
    $('.list_left span').click(function () {
        var span_now = $(this);
        var span_class = span_now.attr("class");
        span_now.hide().siblings().show();
        if(span_class == 'cancel_con'){
            //取消
        }else{
            //关注
        }
    });
    // 好友关系网，未完
})