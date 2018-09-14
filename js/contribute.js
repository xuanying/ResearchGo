$(function(){
    //数据处理
    var jour_info = '';
    jour_info = '[{"Journal":"PAMI","Journal_Level":"A","Journal_Trend":"13%","Journal_Keyword":[{"Keyword":"Face Recognition","Keyword_Domain":"None"},{"Keyword":"Elastic Graph Matching","Keyword_Domain":"None"},{"Keyword":"Image Segmentation","Keyword_Domain":"None"},{"Keyword":"Camera Model","Keyword_Domain":"None"},{"Keyword":"Digital Spaces","Keyword_Domain":"None"}],"Rel_Keyword":[{"Keyword":"Deep Learning","Keyword_Domain":"None","Article_Num":"59","Article_Trend":"13"},{"Keyword":"Convolutional Neural Networks","Keyword_Domain":"None","Article_Num":"23","Article_Trend":"12"}],"Rel_Friend":{"Zhou Li":{"Author_Email":"None","Author_Name":"Zhou Li","Author_ID":"None","Articles_Num":"1","Articles_Trend":"1"},"Kaspar M. B. Jansen":{"Author_Email":"None","Author_Name":"Kaspar M. B. Jansen","Author_ID":"None","Articles_Num":"1","Articles_Trend":"0"}}},{"Journal":"NIPS","Journal_Level":"A","Journal_Trend":"10%","Journal_Keyword":[{"Keyword":"Visual Attention","Keyword_Domain":"None"},{"Keyword":"Matrix Factorization","Keyword_Domain":"None"},{"Keyword":"Particle Physics","Keyword_Domain":"None"},{"Keyword":"Machine Learning","Keyword_Domain":"None"},{"Keyword":"Image Deconvolution","Keyword_Domain":"None"}],"Rel_Keyword":[{"Keyword":"Deep Learning","Keyword_Domain":"None","Article_Num":"32","Article_Trend":"13"},{"Keyword":"Convolutional Neural Networks","Keyword_Domain":"None","Article_Num":"21","Article_Trend":"6"}],"Rel_Friend":{"Joseph A. Izatt":{"Author_Email":"None","Author_Name":"Joseph A. Izatt","Author_ID":"None","Articles_Num":"1","Articles_Trend":"0"},"Zhou Li":{"Author_Email":"None","Author_Name":"Zhou Li","Author_ID":"None","Articles_Num":"1","Articles_Trend":"0"}}},{"Journal":"ArXiv","Journal_Level":"A","Journal_Trend":"13%","Journal_Keyword":[{"Keyword":"SGN","Keyword_Domain":"None"},{"Keyword":"Unsupervised Fashion","Keyword_Domain":"None"},{"Keyword":"deep belief network","Keyword_Domain":"None"},{"Keyword":"Deep Learning","Keyword_Domain":"None"},{"Keyword":"Autoencoder","Keyword_Domain":"None"}],"Rel_Keyword":[{"Keyword":"Deep Belief Network","Keyword_Domain":"None","Article_Num":"387","Article_Trend":"123"},{"Keyword":"Long Short-Term Memory","Keyword_Domain":"None","Article_Num":"1747","Article_Trend":"796"}],"Rel_Friend":{"Diederik P. Kingma":{"Author_Email":"None","Author_Name":"Diederik P. Kingma","Author_ID":"None","Articles_Num":"8","Articles_Trend":"3"},"Jimmy Ba":{"Author_Email":"None","Author_Name":"Jimmy Ba","Author_ID":"None","Articles_Num":"6","Articles_Trend":"2"}}},{"Journal":"Biomedical Optics Express","Journal_Level":"A","Journal_Trend":"13%","Journal_Keyword":[{"Keyword":"Diffuse Optical Tomography","Keyword_Domain":"None"},{"Keyword":"Photoacoustic Spectroscopy","Keyword_Domain":"None"},{"Keyword":"OPTICS Algorithm","Keyword_Domain":"None"},{"Keyword":"Telescope","Keyword_Domain":"None"},{"Keyword":"KLT","Keyword_Domain":"None"}],"Rel_Keyword":[{"Keyword":"Human Retina","Keyword_Domain":"None","Article_Num":"265","Article_Trend":"113"},{"Keyword":"Adaptive Optics","Keyword_Domain":"None","Article_Num":"44","Article_Trend":"16"}],"Rel_Friend":{"Christoph K. Hitzenberger":{"Author_Email":"None","Author_Name":"Christoph K. Hitzenberger","Author_ID":"None","Articles_Num":"20","Articles_Trend":"11"},"Turgut Durduran":{"Author_Email":"None","Author_Name":"Turgut Durduran","Author_ID":"None","Articles_Num":"13","Articles_Trend":"4"}}}]';
    var jour_data = $.parseJSON(jour_info);
    //首字母大写
    function ReplaceFirstUper(str)
    {
        str = str.toLowerCase();
        return str.replace(/\b(\w)|\s(\w)/g, function(m){ return m.toUpperCase(); });
    }
    //关键词
    function fill_cloud(keywords_area,Keyword_List){
        if(Keyword_List.length > 0){
            var K_length = Keyword_List.length;
            if(Keyword_List.length > 5){
                K_length = 5;
                //-----------------------------------当关键词数量较少时，减小词云区域的高度
            }else if(Keyword_List.length === 0){
                keywords_area.css("height","0");
            }//------------------------------------------高度控制 end
            var my_keywords = new Array(K_length);
            for(var i = 0;i < K_length; i++){
                my_keywords[i] = new Array(2);
            }
            for(i = 0;i < K_length; i++){
                // my_keywords[i][0] = authorInfo.Keyword_List[i] + '<em style="font-size: 14px">--词内排名：20</em>';
                my_keywords[i][0] = ReplaceFirstUper(Keyword_List[i].Keyword);
                my_keywords[i][1] = 5 - i;
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
                        var keyword_domain = '';
                        $.each(Keyword_List,function (n,value) {
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
            keywords_area.css('height','100px');
        }
    }

    /*----------填充数据----------*/
    var div_str,link_str1,link_str2;
    var key_area,key_list;
    $.each(jour_data,function(n,value){
        link_str1 = '/journaldetail/?Journal='+$.base64.encode(encodeURI(value.Journal));
        div_str = '<div class="jour_part"><div class="part_left"><h1 class="rank' + value.Journal_Level + '"><a href=' + link_str1 + '>' + value.Journal + '</a></h1><p>录用数：低于同档次平均<span>' + value.Journal_Trend + '</span></p>';
        link_str1 = '/keywordDetail/?Keyword='+$.base64.encode(encodeURI(value.Rel_Keyword[0].Keyword))+'&Keyword_Domain='+$.base64.encode(encodeURI(value.Rel_Keyword[0].Keyword_Domain));
        link_str2 = '/keywordDetail/?Keyword='+$.base64.encode(encodeURI(value.Rel_Keyword[1].Keyword))+'&Keyword_Domain='+$.base64.encode(encodeURI(value.Rel_Keyword[1].Keyword_Domain));
        div_str += '<p style="display: inline-block;">我的关键词：</p><div class="keyword_info"><p><a href=' + link_str1 +'>' + value.Rel_Keyword[0].Keyword +'</a>占比<span>' + value.Rel_Keyword[0].Article_Num + '</span>篇，同比增长<span>' + value.Rel_Keyword[0].Article_Trend + '</span>篇</p><p><a href=' + link_str2 + '>' + value.Rel_Keyword[1].Keyword + '</a>占比<span>' + value.Rel_Keyword[1].Article_Num + '</span>篇，同比增长<span>' + value.Rel_Keyword[1].Article_Trend + '</span>篇</p></div>';
        div_str += '<p style="display: inline-block;">我的好友：</p><div class="friend_info">';
        $.each(value.Rel_Friend,function(key,val){
            link_str1 = '/authorDetail/?Author_Name='+$.base64.encode(encodeURI(val.Author_Name))+'&Author_Email='+$.base64.encode(encodeURI(val.Author_Email))+'&Author_ID='+$.base64.encode(encodeURI(val.Author_ID));
            div_str += '<p><a href=' + link_str1 +'>' + key + '</a>占比<span>' + val.Articles_Num + '</span>篇，同比增长<span>' + val.Articles_Trend + '</span>篇</p>';
        });
        div_str += '</div></div><div class="my_keywords"></div></div>';
        $('.jour_content').append(div_str);
        key_area = $('.my_keywords:eq(' + n + ')');
        key_list = value.Journal_Keyword;
        fill_cloud(key_area,key_list);
    });
    /*----------换一批----------*/
    var show_index = 0;
    function jour_change(){
        $('.jour_part').hide();
        $('.jour_part:eq(' + show_index + ')').show();
        $('.jour_part:eq(' + (show_index + 1) + ')').show();
    }
    setTimeout(function(){
        jour_change();
    },100);
    $('#change_word').click(function(){
        show_index = (show_index + 2)%jour_data.length;
        jour_change();
    });
})