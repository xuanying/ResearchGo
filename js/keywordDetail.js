$(function () {

    //首字母大写
    function ReplaceFirstUper(str) {
        str = str.toLowerCase();
        return str.replace(/\b(\w)|\s(\w)/g, function (m) {
            return m.toUpperCase();
        });
    }
    //最小高度
    $(".keyword_messages").css('min-height', window.screen.availHeight - 250);

    //数据处理
    var keyword_data = $("#keyword_data").text();
    keyword_data = '{"If_Collect":"True","Keyword":"Machine Learning","Keyword_Domain":"Computer Science(All)","Article_Yearly":{"2012":[3, 2],"2013":[1, 1],"2014":[7, 5],"2015":[10, 8],"2016":[2, 0]},"Keyword_Scholar": {"Christopher K. I. Williams":{"Author_Email":"vikas","Author_Name":"Christopher K. I. Williams","Author_ID": "26767588000","Author_Level":"R0"},"Carl E. Rasmussen":{"Author_Email":"vikas","Author_Name":"Carl E. Rasmussen","Author_ID": "26767588000","Author_Level":"R0"},"Nasser M. Nasrabadi":{"Author_Email":"vikas","Author_Name":"Nasser M. Nasrabadi","Author_ID": "26767588000","Author_Level":"R0"},"Gaël Varoquaux":{"Author_Email":"vikas","Author_Name":"Gaël Varoquaux","Author_ID": "26767588000","Author_Level":"R0"}},"Paper_Num":5,"Keyword_Paper":[{"Paper_Title":"Moving beyond regression techniques in cardiovascular risk prediction: applying machine learning to address analytic challenges.","Paper_Journal":"European heart journal","Journal_Level":"A","Paper_Year":"2017","Paper_Level":"B","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Rickey E. Carter":{"Author_Email":"vikas","Author_Name":"Rickey E. Carter","Author_ID": "26767588000","Author_Level":"R0"},"Ann Marie Navar":{"Author_Email":"vikas","Author_Name":"Ann Marie Navar","Author_ID": "26767588000","Author_Level":"R0"},"Benjamin A. Goldstein":{"Author_Email":"vikas","Author_Name":"Benjamin A. Goldstein","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"5","Cited_High":"0"},{"Paper_Title":"Machine learning in automated text categorization","Paper_Journal":"ACM Comput. Surv","Journal_Level":"A","Paper_Year":"2002","Paper_Level":"A","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Fabrizio Sebastiani":{"Author_Email":"vikas","Author_Name":"Fabrizio Sebastiani","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"3375","Cited_High":"482"},{"Paper_Title":"The MNIST Database of Handwritten Digit Images for Machine Learning Research","Paper_Journal":"IEEE Signal Processing Magazine","Journal_Level":"A","Paper_Year":"2012","Paper_Level":"B","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"L. Deng":{"Author_Email":"vikas","Author_Name":"L. Deng","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"517","Cited_High":"129"},{"Paper_Title":"Neural Machine Translation by Jointly Learning to Align and Translate","Paper_Journal":"ArXiv","Journal_Level":"A","Paper_Year":"2014","Paper_Level":"A","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Dzmitry Bahdanau":{"Author_Email":"vikas","Author_Name":"Dzmitry Bahdanau","Author_ID": "26767588000","Author_Level":"R0"},"Kyunghyun Cho":{"Author_Email":"vikas","Author_Name":"Kyunghyun Cho","Author_ID": "26767588000","Author_Level":"R0"},"Yoshua Bengio":{"Author_Email":"vikas","Author_Name":"Yoshua Bengio","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"1949","Cited_High":"607"},{"Paper_Title":"Improve Computer-Aided Diagnosis With Machine Learning Techniques Using Undiagnosed Samples","Paper_Journal":"IEEE Trans. Systems, Man, and Cybernetics, Part A","Journal_Level":"A","Paper_Year":"2007","Paper_Level":"C","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Ming Li":{"Author_Email":"vikas","Author_Name":"Ming Li","Author_ID": "26767588000","Author_Level":"R0"},"Zhi-Hua Zhou":{"Author_Email":"vikas","Author_Name":"Zhi-Hua Zhou","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"97","Cited_High":"20"}]}';
    var keyword_messages = $.parseJSON(keyword_data);
    $(".keyword_messages h1").text(ReplaceFirstUper(keyword_messages.Keyword)); //关键词
    $(".basic_informations .fields li").text(ReplaceFirstUper(keyword_messages.Keyword_Domain)); //领域


    //大牛列表
    var master_list = $(".basic_informations .masters ul");
    $.each(keyword_messages.Keyword_Scholar, function (n, value) {
        var str = '/authorDetail/?Author_ID=' + $.base64.encode(encodeURI(value.Author_ID)) + '&Author_Name=' + $.base64.encode(encodeURI(value.Author_Name)) + '&Author_Email=' + $.base64.encode(encodeURI(value.Author_Email));
        master_list.append('<li><a href=' + str + '>' + n + '(' + value.Author_Level + ')</a></li>');
    });
    //绘制柱状图
    if (JSON.stringify(keyword_messages.Article_Yearly) != '{}') { //若为空还画图会出错
        var num_list = [],
            high_list = [],
            year_list = [];
        var j = 0;
        $.each(keyword_messages.Article_Yearly, function (key, value) {
            year_list.push(key);
            j = 1;
            num_list.push(value[0]);
            high_list.push(value[1]);
        });

        $('#container').highcharts({
            chart: {
                type: 'column',
                width: 650,
                height: 450,
                marginTop: 60
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
                }
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
                    borderWidth: 0,
                    events: {
                        click: function (e) {
                            //等待加载完成
                            if (keyword_messages.Paper_num > 10 && full_paperLs.length == 0) {
                                var layer = document.createElement("CENTER");
                                layer.id = "layer";
                                layer.innerHTML = '稍候...';
                                if (document.getElementById("layer") == null) {
                                    document.body.appendChild(layer);
                                    setTimeout("document.body.removeChild(layer)", 1000)
                                }
                            }
                            //柱状图筛选
                            else {
                                var year_choose = e.point.category;
                                var count_choose = e.point.y;
                                var choose_list;
                                articles.empty();
                                if (full_paperLs.length == 0) {
                                    choose_list = keyword_messages.Keyword_Paper;
                                } else {
                                    choose_list = full_paperLs;
                                }
                                $.each(choose_list, function (e, value) {
                                    // choose_paper(value, year_choose, count_choose);
                                    //是否A类
                                    var isa = false;
                                    $.each(value.Paper_Domain, function (i_key, value) {
                                        if (value == "A") {
                                            isa = true;
                                        }
                                    });
                                    //用户选中类型，0为全部，1为A类
                                    var type_choose = 0;
                                    if (count_choose == keyword_messages.Article_Yearly[year_choose][1]) {
                                        type_choose = 1;
                                    }

                                    if (type_choose == 1) {
                                        if (value.Year == year_choose && isa == true) {
                                            create_articleLi(value);
                                            articles.append(article_li);
                                        }
                                    } else {
                                        if (value.Year == year_choose) {
                                            create_articleLi(value);
                                            articles.append(article_li);
                                        }
                                    }
                                });
                                pager(choose_list.length);
                            }
                        }
                    }
                }
            },
            series: [{
                name: '文章',
                color: 'rgba(165,170,217,1)',
                data: num_list,
                pointPadding: 0.3,
                pointPlacement: 0
            }, {
                name: 'A类',
                color: 'rgba(126,86,134,.9)',
                data: high_list,
                pointPadding: 0.3,
                pointPlacement: 0
            }]
        });
    }
    //******************************************************************************************************************
    //文章列表填充-初始化
    var articles = $(".new_list");
    var article_li = "";
    $("#pagerArea").hide();
    $(".wait_data").hide();
    var tOrder = keyword_messages.Keyword_Paper.sort(function(a, b){
        if(a.Paper_Year > b.Paper_Year) return -1;
        if(a.Paper_Year < b.Paper_Year) return 1;
        if(a.Paper_Year = b.Paper_Year){
            a.Paper_Level.localeCompare(b.Paper_Level);
        }
        return 0;
    });
    articles.empty();
    $.each(tOrder,function(index, value){
        create_articleLi(value);
        articles.append(article_li);
    });
    pager(keyword_messages.Keyword_Paper.length);
    //若文章总数大于10，异步加载文章，显示“正在加载”，不显示分页插件和排序选项
    var full_mark = false;
    var full_paperLs = '';
    if(keyword_messages.Paper_Num > 10){
        $(".wait_data").show();
        //       ---------异步加载文章列表信息
        $.post("/keywordDetail/",{
            Keyword:keyword_messages.Keyword,
            Domain:keyword_messages.Keyword_Domain
        },function (data) {
            full_paperLs = $.parseJSON(data);
            full_mark = true;
            $.each(full_paperLs,function (n,value) {
                if(n > 9){
                    create_articleLi(value);
                    articles.append(article_li);
                }
            });
            pager(full_paperLs.length);
            $(".wait_data").hide();
            $("#pagerArea").show();
        });
    }else{
        $("#pagerArea").show();
        full_paperLs = keyword_messages.Keyword_Paper;
    }

    function create_articleLi(value) {
        var str = '/paperDetail/?Paper_Title='+$.base64.encode(encodeURI(value.Paper_Title))+'&Paper_Journal='+$.base64.encode(encodeURI(value.Paper_Journal))+'&Paper_Year='+$.base64.encode(encodeURI(value.Paper_Year));
        article_li = '<li><h3><span class="ar_year">' + value.Paper_Year + '</span><a href=' + str + '>' + value.Paper_Title + '</a></h3>';
        //作者
        article_li += '<p class="ar_author">';
        $.each(value.Paper_Author, function (n, val) {
            str = '/authorDetail/?Author_Name='+$.base64.encode(encodeURI(val.Author_Name))+'&Author_Email='+$.base64.encode(encodeURI(val.Author_Email))+'&Author_ID='+$.base64.encode(encodeURI(val.Author_ID));
            article_li += '<a href = ' + str + '>' + n + '(' + val.Author_Level + ')</a>';
            article_li += ',';
        });
        article_li = article_li.substring(0,article_li.length-2);
        article_li += '</p>';
        //刊物
        str = '/journaldetail/?Journal='+$.base64.encode(encodeURI(value.Paper_Journal));
        if(value.Journal_Level !=null){
            article_li += '<p class="ar_jour"><a href = ' + str + '>' + value.Paper_Journal + '(' + value.Journal_Level + ')</a></p>';
        }else {
            article_li += '<p class="ar_jour"><a href = ' + str + '>' + value.Paper_Journal + '</a></p>';
        }
        //领域
        var article_domainspan = value.Paper_Domain;
        var article_li_domainspan = '';
        if (article_domainspan!=null) {
            $.each(article_domainspan,function (key,value) {
                article_li_domainspan += '<span>' + key + '</span>,';
            });
            article_li_domainspan = article_li_domainspan.substring(0,article_li_domainspan.length-2);
            article_li += '<p class="ar_domain">领域:' + article_li_domainspan + '</p>';
        }

        //档次
        //只取最高档次
        article_li += '<p class="ar_level">档次:<span>' + value.Paper_Level + ' </span></p>';
        article_li += '<div class="item_info"><span class="high_cite">' + value.Cited_High + '</span><span class="cite">' + value.Cited_Num + '</span></div></li>';

    }

    //按时间排序
    $("#time_ordering").on('click',function () {
        if($(this).attr("class") == "active") return false;
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        var timeOrder = full_paperLs.sort(function(a, b){
            if(a.Paper_Year > b.Paper_Year) return -1;
            if(a.Paper_Year < b.Paper_Year) return 1;
            if(a.Paper_Year = b.Paper_Year){
                a.Paper_Level.localeCompare(b.Paper_Level);
            }
            return 0;
        });
        articles.empty();
        $.each(timeOrder,function(index, value){
            create_articleLi(value);
            articles.append(article_li);
        });
        pager(timeOrder.length);
    });

    //按档次排序
    $("#level_ordering").on('click', function () {
        if($(this).attr("class") == "active") return false;
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        var levelOrder = full_paperLs.sort(function(a, b) {
            if(a.Paper_Level.localeCompare(b.Paper_Level) != 0){
                return a.Paper_Level.localeCompare(b.Paper_Level);//比较两篇文章的等级高低并返回排序
            }else {
                if(a.Paper_Year > b.Paper_Year) return -1;
                if(a.Paper_Year < b.Paper_Year) return 1;
                return 0;
            }
        });
        articles.empty();
        $.each(levelOrder,function(index, value){
            create_articleLi(value);
            articles.append(article_li);
        });
        pager(levelOrder.length);
    });
    //******************************************************************************************************************

    //分页
    function pager(length) {
        var article_list = $(".articles li");
        $("#pagerArea").cypager({pg_size: 10, pg_nav_count: 6, pg_total_count: length});
        var page_now = 0, i = 0;
        for( i=0;i<10;i++){
            article_list.eq(i).show();
        }
        $(".pager li").click(function () {
            $(".article_list").css("padding-bottom",0);
            page_now = parseInt($(".pager li.pg-selected").text())-1;
            article_list.hide();
            for( i=page_now*10;i<(page_now+1)*10;i++){
                article_list.eq(i).show();
            }
        });
    }
     //收藏
     if(keyword_messages.If_Collect=='False'){
        $(".collection").attr("name", "CollectionFalse").text("收藏");
    }else{
        $(".collection").attr("name", "CollectionTrue").text("取消收藏");
    }
    $(".collection").click(function (){
        if($(".collection").attr("name")=="CollectionFalse") {
            //<--------------------------后台 AJAX
            $.post("/collection/", {
                Keyword: keyword_messages.Keyword,
                Domain: keyword_messages.Keyword_Domain
            }, function (receive) {
                if (receive) {
                    var keyword = $(".collection");
                    $(keyword).attr("disabled", false).text("取消收藏").attr("name", "CollectionTrue")
                }
            });
        }else if($(".collection").attr("name")=="CollectionTrue"){
            //<--------------------------后台 AJAX
            $.post("/delcollection/", {
                tip:"Keyword",
                Keyword: keyword_messages.Keyword,
                Domain: keyword_messages.Keyword_Domain
            }, function (receive) {
                if (receive) {
                    var keyword = $(".collection");
                    $(keyword).attr("disabled", false).text("收藏").attr("name", "CollectionFalse")
                }
            });
        }
    });

})