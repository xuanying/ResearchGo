$(function(){
    //数据处理
    var key_info = $("#keyword_rec").html();
    key_info = '{"Hot_List":[{"Keyword":"Generative Adversarial Networks","Keyword_Domain":"None","Article":{"Article_Num":"1058","Article_Trend":"20%","Cited_Num":"226","Cited_Trend":"10%"},"Author":{"Author_Num":"174","Author_Trend":"20%","Author_Max":{"Full_Name":"Yoshua Bengio","Author_Email":"None","Author_Name":"Yoshua Bengio","Author_ID":"None","Max_Num":"20"}},"Journal":{"Journal_Num":"26","Journal_Trend":"5%","Journal_Max":"NIPS","Max_Num":"26"},"Institution":{"Institution_Num":"28","Institution_Trend":"4%","Institution_Max":{"Institution":"Stanford","Institution_ID":"None","Max_Num":"32"}},"Rel_Keyword":[{"Keyword":"Deep Learning","Keyword_Domain":"None","Rel_Num":"40"},{"Keyword":"Convolutional Neural Network","Keyword_Domain":"None","Rel_Num":"43"}],"Rel_Friend":{"Wu-er Gan":{"Author_Email":"None","Author_Name":"Wu-er Gan","Author_ID":"None","Rel_Num":"5"},"Zhuo Li":{"Author_Email":"None","Author_Name":"Zhuo Li","Author_ID":"None","Rel_Num":"3"}}},{"Keyword":"Big Data","Keyword_Domain":"None","Article":{"Article_Num":"120","Article_Trend":"15%","Cited_Num":"84","Cited_Trend":"8%"},"Author":{"Author_Num":"110","Author_Trend":"22%","Author_Max":{"Full_Name":"Grace","Author_Email":"None","Author_Name":"Grace","Author_ID":"None","Max_Num":"13"}},"Journal":{"Journal_Num":"21","Journal_Trend":"5%","Journal_Max":"ACM TON","Max_Num":"13"},"Institution":{"Institution_Num":"26","Institution_Trend":"4%","Institution_Max":{"Institution":"BNU","Institution_ID":"None","Max_Num":"11"}},"Rel_Keyword":[{"Keyword":"Generative Adversarial Networks","Keyword_Domain":"None","Rel_Num":"25"},{"Keyword":"Generative Adversarial Networks","Keyword_Domain":"None","Rel_Num":"14"}],"Rel_Friend":{"Marcin":{"Author_Email":"None","Author_Name":" Marcin","Author_ID":"None","Rel_Num":"12"},"Grzegorzek":{"Author_Email":"None","Author_Name":"Grzegorzek","Author_ID":"None","Rel_Num":"10"}}}],"Potential_List":[{"Keyword":"LipNet","Keyword_Domain":"None","Article":{"Article_Num":"5","Article_Trend":"10%","Cited_Num":"4","Cited_Trend":"17%"},"Author":{"Author_Num":"12","Author_Trend":"14%","Author_Max":{"Full_Name":"Bruno J. T. Fernandes","Author_Email":"None","Author_Name":"Bruno J. T. Fernandes","Author_ID":"None","Max_Num":"3"}},"Journal":{"Journal_Num":"3","Journal_Trend":"5%","Journal_Max":"IJCNN","Max_Num":"2"},"Institution":{"Institution_Num":"3","Institution_Trend":"4%","Institution_Max":{"Institution":"Google","Institution_ID":"None","Max_Num":"2"}},"Rel_Keyword":[{"Keyword":"Deep Learning","Keyword_Domain":"None","Rel_Num":"2"},{"Keyword":"Convolutional Neural Network","Keyword_Domain":"None","Rel_Num":"1"}],"Rel_Friend":{"Zhou Li":{"Author_Email":"None","Author_Name":"Zhou Li","Author_ID":"None","Rel_Num":"1"},"Danilo C. Pereira":{"Author_Email":"None","Author_Name":"Danilo C. Pereira","Author_ID":"None","Rel_Num":"1"}}},{"Keyword":"Bayesian network","Keyword_Domain":"None","Article":{"Article_Num":"45","Article_Trend":"15%","Cited_Num":"32","Cited_Trend":"8%"},"Author":{"Author_Num":"22","Author_Trend":"12%","Author_Max":{"Full_Name":"Lancelot","Author_Email":"None","Author_Name":"Lancelot","Author_ID":"None","Max_Num":"13"}},"Journal":{"Journal_Num":"8","Journal_Trend":"5%","Journal_Max":"ACM TON","Max_Num":"7"},"Institution":{"Institution_Num":"11","Institution_Trend":"4%","Institution_Max":{"Institution":"BNU","Institution_ID":"None","Max_Num":"13"}},"Rel_Keyword":[{"Keyword":"Face Recognition","Keyword_Domain":"None","Rel_Num":"10"},{"Keyword":"Artificial Intellegence","Keyword_Domain":"None","Rel_Num":"10"}],"Rel_Friend":{"Simon":{"Author_Email":"None","Author_Name":"Simon","Author_ID":"None","Rel_Num":"10"},"Osindero":{"Author_Email":"None","Author_Name":"Osindero","Author_ID":"None","Rel_Num":"10"}}}]}';
    var key_data = $.parseJSON(key_info); 
    var hot_data = key_data.Hot_List;
    var potential_data = key_data.Potential_List;

     /*----------填充数据----------*/
     var li_str,link_str1,link_str2;
     var hot_ul = $('.hot_box ul'),
         potential_ul = $('.potential_box ul'),
         hot_li,
         potential_li;
     //填充function
     function fill_li(li_data,ul_data,flag){
         $.each(li_data,function(key,value){
             link_str1 = '/keywordDetail/?Keyword='+$.base64.encode(encodeURI(value.Keyword))+'&Keyword_Domain='+$.base64.encode(encodeURI(value.Keyword_Domain));
             li_str ='<!----><li class="dir_list"><h2><a href=' + link_str1 +'>' + value.Keyword +'</a></h2><table cellspacing="10"><tr>';
             li_str += '<td><h3>文章</h3><p>录用数：' + value.Article.Article_Num + '<span class="tendency">' + value.Article.Article_Trend + '</span></p><p>引用数：' + value.Article.Cited_Num +'<span class="tendency">' + value.Article.Cited_Trend + '</span></p></td>';
             link_str1 = '/authorDetail/?Author_Name='+$.base64.encode(encodeURI(value.Author.Author_Max.Author_Name))+'&Author_Email='+$.base64.encode(encodeURI(value.Author.Author_Max.Author_Email))+'&Author_ID='+$.base64.encode(encodeURI(value.Author.Author_Max.Author_ID));
             li_str += '<td><h3>作者</h3><p>作者数：' + value.Author.Author_Num + '<span class="tendency">' + value.Author.Author_Trend + '</span></p><p><a href=' + link_str1 + '>' + value.Author.Author_Max.Full_Name + '</a><span class="p_num">' + value.Author.Author_Max.Max_Num + '</span></p></td>';
             if(flag == 1){
                 link_str1 = '/journaldetail/?Journal='+$.base64.encode(encodeURI(value.Journal.Journal_Max));
                 li_str += '<td><h3>刊物</h3><p>刊物数：' + value.Journal.Journal_Num + '<span class="tendency">' + value.Journal.Journal_Trend + '</span></p><p><a href=' + link_str1 + '>' + value.Journal.Journal_Max + '</a><span class="p_num">' + value.Journal.Max_Num + '</span></p></td>';
             }
             link_str1 = '/institution/?Institution='+$.base64.encode(encodeURI(value.Institution.Institution_Max.Institution))+'&InstitutionId='+$.base64.encode(encodeURI(value.Institution.Institution_Max.InstitutionId)); 
             li_str += '<td><h3>机构</h3><p>机构数：' + value.Institution.Institution_Num + '<span class="tendency">' + value.Institution.Institution_Trend + '</span></p><p><a href=' + link_str1 + '>' + value.Institution.Institution_Max.Institution + '</a><span class="p_num">' + value.Institution.Institution_Max.Max_Num + '</span></p></td></tr></table>';
             link_str1 = '/keywordDetail/?Keyword='+$.base64.encode(encodeURI(value.Rel_Keyword[0].Keyword))+'&Keyword_Domain='+$.base64.encode(encodeURI(value.Rel_Keyword[0].Keyword_Domain));
             link_str2 = '/keywordDetail/?Keyword='+$.base64.encode(encodeURI(value.Rel_Keyword[1].Keyword))+'&Keyword_Domain='+$.base64.encode(encodeURI(value.Rel_Keyword[1].Keyword_Domain));
             li_str += '<div class="dir_relate"><img src="./images/about.png"><p>我的方向：<a href=' + link_str1 + '>' + value.Rel_Keyword[0].Keyword + '</a><span class="p_num">' + value.Rel_Keyword[0].Rel_Num +'</span>,<a href=' + link_str2 + '>' + value.Rel_Keyword[1].Keyword + '</a><span class="p_num">' + value.Rel_Keyword[1].Rel_Num + '</span></p>';
             li_str += '<p>我的好友：';
             $.each(value.Rel_Friend,function(k,val){
                 link_str1 = '/authorDetail/?Author_Name='+$.base64.encode(encodeURI(val.Author_Name))+'&Author_Email='+$.base64.encode(encodeURI(val.Author_Email))+'&Author_ID='+$.base64.encode(encodeURI(val.Author_ID));
                 li_str += '<a href=' + link_str1 + '>' + k + '</a><span class="p_num">' + val.Rel_Num + '</span>,';
             });
             li_str = li_str.substring(0,li_str.length-2);
             li_str += '</p></div></li>';
             ul_data.append(li_str);
         });
     }
     //hot
     fill_li(hot_data,hot_ul,1);
     hot_li = hot_ul.find('li'),
     hot_ul.find('li:eq(0)').addClass('active');
     hot_ul.css('width', 820 * hot_li.length + 'px');
     hot_ul.parent().css('height',hot_ul.height());
     hot_li.css('height',hot_ul.height());
     //potential
     fill_li(potential_data,potential_ul,0);
     potential_li = potential_ul.find('li');
     potential_ul.find('li:eq(0)').addClass('active');
     potential_ul.css('width', 820 * potential_li.length + 'px');

     /*----------换一批----------*/
    //hot
    $(".hot_box .dir_head").on('click','#change_word',function(){
    	var index = (hot_ul.find('li.active').index() + 1) % hot_li.length;
    	hot_ul.find('li.active').removeClass('active');
    	hot_ul.find('li:eq('+ index +')').addClass('active');
        var offset = index * 820 * -1;
        var param = {'left':offset + 'px' };
        hot_ul.stop().animate(param, 0.6*1000, 'swing');
    });
    //potential
    $(".potential_box .dir_head").on('click','#change_word2',function(){
    	var index = (potential_ul.find('li.active').index() + 1) % potential_li.length;
    	potential_ul.find('li.active').removeClass('active');
    	potential_ul.find('li:eq('+ index +')').addClass('active');
        var offset = index * 820 * -1;
        var param = {'left':offset + 'px' };
        potential_ul.stop().animate(param, 0.6*1000, 'swing');
    });
})