$(function(){
    //机构数据获取
    var organization_data_before = $("#organization").text();
    organization_data_before = '{"Country": "United States","Domain": ["Computer Science"],"Organization_name": "ARM Inc.","Paper_Num": {"2012": [3, 2],"2013": [1, 1],"2014": [7, 5],"2015": [10, 8],"2016": [2, 0]},"Small_Domain": {"Computer Science": ["Computer Science","Artificial Intelligence","Computational Theory and Mathematics","Computer Graphics and Computer-Aided Design","Computer Networks and Communications","Computer Science Applications","Computer Vision and Pattern Recognition","Hardware and Architecture","Human-Computer Interaction","Software","Signal Processing","Information Systems"]},"Well_Know_Scholar": {"Computer Science": {"Chandra V.": {"Author_Email":"vikas","Author_Name":"Chandra V.","Author_ID": "26767588000"},"Dasika G.": {"Author_Email":"ganesh.","Author_Name":"Dasika G.","Author_ID": "8659118100"}}},"Hot_Keyword": {"Computer Science": ["OpenCL","Optimization","FPGA"]},"Ranking_Country":{"Computer Science":"7"},"Ranking_World":{"Computer Science":"10"}}';
    var organization_data = $.parseJSON(organization_data_before);
    
    //最小高度
    $(".organization_messages").css('min-height', window.screen.availHeight - 250);

    var jTrend = organization_data.Paper_Num;
    if(JSON.stringify(jTrend) != '{}'){//若为空还画图会出错
        var cite_num = [],high_num = [],year_list = [];//折线图
        var j = 0;
        $.each(jTrend,function (key,value) {
            if(j != 0){
                year_list.push(key.substring(2,4));
            }else{
                year_list.push(key);
            }
            j = 1;
            cite_num.push(value[0]);
            high_num.push(value[1]);
        });

        var hot_words_data = [
            {
                name : '文章',
                value:cite_num,
                color:'#1f7e92',
                line_width:2
            },
            {
                name : 'A类文章',
                value:high_num,
                color:'#ff7e92',
                line_width:2
            }
        ];
        // paint_line(hot_words_data,"hot_canvasDiv",year_list);
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
                }
                // opposite: true
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
                name: '文章',
                color: 'rgba(165,170,217,1)',
                data: cite_num,
                pointPadding: 0.3,
                pointPlacement: 0
            }, {
                name: 'A类',
                color: 'rgba(126,86,134,.9)',
                data: high_num,
                pointPadding: 0.3,
                pointPlacement: 0
            }]
        });

    }

    //首字母大写
    function ReplaceFirstUper(str)
    {
        str = str.toLowerCase();
        return str.replace(/\b(\w)|\s(\w)/g, function(m){ return m.toUpperCase(); });
    }

    //新邮件询问，待写
    

    //机构内容填充
    organization_fill();
    function organization_fill(){
        //机构名字和国家
        var organization_header = '<img src="./images/org_logo.jpg">' + organization_data.Organization_name ;
        $(".org_logo_name").find("h1").append(organization_header);
        $("#org_country").text(organization_data.Country);
        $("#org_part_domain").show();
        if(organization_data.Domain.length > 0){
            var domain_li;
            $.each(organization_data.Domain,function (n,value) {
                if(n == 0){
                    domain_li = '<li class="active">' + value + '</li>';
                }else{
                    domain_li = '<li >' + value + '</li>';
                }
                $("#org_domain").append(domain_li);
            });
            org_part_message_fill();
        }else{
            $("#org_part_domain").hide();
        }
    }

    //填充学者和关键词
    function org_part_message_fill(){
        $("#org_scholar").empty();
        $("#org_keyword").empty();
        var domain_li;
        var str;
        var active_domain = $("#org_domain").find(".active").text();
        var org_scholar = organization_data.Well_Know_Scholar[active_domain];
        var org_keyword = organization_data.Hot_Keyword[active_domain];
        //知名学者
        $.each(org_scholar,function (n,value) {
            str = '/authorDetail/?Author_Email='+ $.base64.encode(encodeURI(JSON.stringify(value.Author_Email)))+'&Author_Name='+ $.base64.encode(encodeURI(value.Author_Name))+'&Author_ID='+ $.base64.encode(encodeURI(value.Author_ID));
            domain_li = '<li><a href=' + str +'>' + n + '</a></li>';
            $("#org_scholar").append(domain_li);
        });
        var domain_len = $("#org_scholar").find("li");
        if(domain_len.length > 0){
            $("#masters").show();
        }else{
            $("#masters").hide();
        }

        //热门关键词
        $.each(org_keyword,function (n,value) {
            str = '/keywordDetail/?Keyword='+$.base64.encode(encodeURI(value))+'&Keyword_Domain='+ $.base64.encode(encodeURI(active_domain));
            domain_li = '<li><a href=' + str + '>' + value + '</a></li>';
            $("#org_keyword").append(domain_li);
        });
        var keyword_len = $("#org_keyword").find("li");
        if(keyword_len.length > 0){
            $("#hot_words").show();
        }else{
            $("#hot_words").hide();
        }

        //排名
        var country_r = organization_data.Ranking_Country[active_domain];
        var world_r = organization_data.Ranking_World[active_domain];
        $('#r_country').append(country_r);
        $('#r_world').append(world_r);
    }

    //根据领域点击切换学者和关键词
    $("#org_domain").on('click','li',function(){
        var active_now = $(this);
        $("#org_domain li").removeClass("active");
        active_now.addClass("active");
        org_part_message_fill();
    });
})