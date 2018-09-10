$(function(){
    //首字母大写
    function ReplaceFirstUper(str){
        str = str.toLowerCase();
        return str.replace(/\b(\w)|\s(\w)/g, function(m){ return m.toUpperCase(); });
    }
    //数据处理
    var author_data = $("#author_data").text();
    // author_data = '{"Author_Email":"67815265@qq.com","Author_Name":"Zhang David D.","Author_ID":"None","Author_Portrait":"None","If_Collect":"True","If_Atten":"True","Author_Domain":{"Materials Science(all)":[],"Computer Science(all)":["software","information systems","artificial intelligence","computer network and comunications"],"Engineering(all)":["biomedical engineering"],"Health Professions(all)":["health information management"],"Mathematics(all)":[]},"Middle_R_Level":{"Materials Science(all)":"R2","Computer Science(all)":"R0","Engineering(all)":"R0","Health Professions(all)":"R3","Mathematics(all)":"R1"},"Phone":"","Author_Level":"R0","Author_Institution":{"Institution":"Hong Kong Polytechnic University","Institution_ID":"None"},"Article_Num":"157","Article_High":"67","Cited_Num":"4","Cited_High":"0","Personal_Homepage":"","Personal_Show":"","Author_Keyword":["Computer","Materials Science","Computer Science","software","information systems","artificial intelligence","Health Professions","health information management","Mathematics","Engineering"],"Author_Paper":[{"Paper_Title":"A Novel Pattern Clustering Algorithm Based on Particle Swarm Optimization Joint Adaptive Wavelet Neural Network Model","Paper_Journal":"MOBILE NETWORKS & APPLICATIONS","Journal_Level":"C","Paper_Year":"2010","Paper_Level":"C","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Chandra V.":{"Author_Email":"vikas","Author_Name":"Chandra V.","Author_ID": "26767588000","Author_Level":"R0"},"Dasika G.":{"Author_Email":"vikas","Author_Name":"Dasika G.","Author_ID": "26767588000","Author_Level":"R0"},"Chiyuan Zhang":{"Author_Email":"vikas","Author_Name":"Chiyuan Zhang","Author_ID": "26767588000","Author_Level":"R0"},"Moritz Hardt":{"Author_Email":"vikas","Author_Name":"Moritz Hardt","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"5","Cited_High":"9"},{"Paper_Title":"Human-level control through deep reinforcement learning","Paper_Journal":"Nature","Journal_Level":"A","Paper_Year":"2015","Paper_Level":"A","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Demis Hassabis":{"Author_Email":"vikas","Author_Name":"Demis Hassabis","Author_ID": "26767588000","Author_Level":"R0"},"Koray Kavukcuoglu":{"Author_Email":"vikas","Author_Name":"Koray Kavukcuoglu","Author_ID": "26767588000","Author_Level":"R0"},"Volodymyr Mnih":{"Author_Email":"vikas","Author_Name":"Volodymyr Mnih","Author_ID": "26767588000","Author_Level":"R0"},"David Silver":{"Author_Email":"vikas","Author_Name":"David Silver","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"10","Cited_High":"6"},{"Paper_Title":"Mastering the game of Go with deep neural networks and tree search","Paper_Journal":"Nature","Journal_Level":"A","Paper_Year":"2016","Paper_Level":"B","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Demis Hassabis":{"Author_Email":"vikas","Author_Name":"Demis Hassabis","Author_ID": "26767588000","Author_Level":"R0"},"Aja Huang":{"Author_Email":"vikas","Author_Name":"Aja Huang","Author_ID": "26767588000","Author_Level":"R0"},"Madeleine Leach":{"Author_Email":"vikas","Author_Name":"Madeleine Leach","Author_ID": "26767588000","Author_Level":"R0"},"Timothy P. Lillicrap":{"Author_Email":"vikas","Author_Name":"Timothy P. Lillicrap","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"15","Cited_High":"9"},{"Paper_Title":"Learning Deep Belief Networks from Non-stationary Streams","Paper_Journal":"ICANN","Journal_Level":"A","Paper_Year":"2012","Paper_Level":"A","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Federico Montesino-Pouzols":{"Author_Email":"vikas","Author_Name":"Federico Montesino-Pouzols","Author_ID": "26767588000","Author_Level":"R0"},"Marc Peter Deisenroth":{"Author_Email":"vikas","Author_Name":"Marc Peter Deisenroth","Author_ID": "26767588000","Author_Level":"R0"},"Tapani Raiko":{"Author_Email":"vikas","Author_Name":"Tapani Raiko","Author_ID": "26767588000","Author_Level":"R0"},"Roberto Calandra":{"Author_Email":"vikas","Author_Name":"Roberto Calandra","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"25","Cited_High":"19"},{"Paper_Title":"A Classification-Based Polyphonic Piano Transcription Approach Using Learned Feature Representations","Paper_Journal":"ISMIR","Journal_Level":"A","Paper_Year":"2011","Paper_Level":"C","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author": {"Malcolm Slaney":{"Author_Email":"vikas","Author_Name":"Malcolm Slaney","Author_ID": "26767588000","Author_Level":"R0"},"Honglak Lee":{"Author_Email":"vikas","Author_Name":"Honglak Lee","Author_ID": "26767588000","Author_Level":"R0"},"Jiquan Ngiam":{"Author_Email":"vikas","Author_Name":"Jiquan Ngiam","Author_ID": "26767588000","Author_Level":"R0"},"Juhan Nam":{"Author_Email":"vikas","Author_Name":"Juhan Nam","Author_ID": "26767588000","Author_Level":"R0"}},"Cited_Num":"24","Cited_High":"12"}],"Friend_List":{},"Fans_List":{},"Attention_List":{}}';
    author_data = '{"Author_Email":"67815265@qq.com","Author_Name":"Zhang David D.","Author_ID":"None","Author_Portrait":"None","If_Collect":"True","If_Atten":"True","Author_Domain":{"Materials Science(all)":[],"Computer Science(all)":["software","information systems","artificial intelligence","computer network and comunications"],"Engineering(all)":["biomedical engineering"],"Health Professions(all)":["health information management"],"Mathematics(all)":[]},"Middle_R_Level":{"Materials Science(all)":"R2","Computer Science(all)":"R0","Engineering(all)":"R0","Health Professions(all)":"R3","Mathematics(all)":"R1"},"Phone":"","Author_Level":"R0","Author_Institution":{"Institution":"Hong Kong Polytechnic University","Institution_ID":"None"},"Article_Num":"157","Article_High":"67","Cited_Num":"4","Cited_High":"0","Personal_Homepage":"","Personal_Show":"这个人很懒，什么都没留下","Author_Keyword":["Computer","Materials Science","Computer Science","software","information systems","artificial intelligence","Health Professions","health information management","Mathematics","Engineering"],"Author_Paper":[{"Paper_Title":"A Novel Pattern Clustering Algorithm Based on Particle Swarm Optimization Joint Adaptive Wavelet Neural Network Model","Paper_Journal":"MOBILE NETWORKS & APPLICATIONS","Journal_Level":"C","Paper_Year":"2010","Paper_Level":"C","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author":{"Chandra V.":{"Author_Email":"vikas","Author_Name":"Chandra V.","Author_ID":"26767588000","Author_Level":"R0"},"Dasika G.":{"Author_Email":"vikas","Author_Name":"Dasika G.","Author_ID":"26767588000","Author_Level":"R0"},"Chiyuan Zhang":{"Author_Email":"vikas","Author_Name":"Chiyuan Zhang","Author_ID":"26767588000","Author_Level":"R0"},"Moritz Hardt":{"Author_Email":"vikas","Author_Name":"Moritz Hardt","Author_ID":"26767588000","Author_Level":"R0"}},"Cited_Num":"5","Cited_High":"9"},{"Paper_Title":"Human-level control through deep reinforcement learning","Paper_Journal":"Nature","Journal_Level":"A","Paper_Year":"2015","Paper_Level":"A","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author":{"Demis Hassabis":{"Author_Email":"vikas","Author_Name":"Demis Hassabis","Author_ID":"26767588000","Author_Level":"R0"},"Koray Kavukcuoglu":{"Author_Email":"vikas","Author_Name":"Koray Kavukcuoglu","Author_ID":"26767588000","Author_Level":"R0"},"Volodymyr Mnih":{"Author_Email":"vikas","Author_Name":"Volodymyr Mnih","Author_ID":"26767588000","Author_Level":"R0"},"David Silver":{"Author_Email":"vikas","Author_Name":"David Silver","Author_ID":"26767588000","Author_Level":"R0"}},"Cited_Num":"10","Cited_High":"6"},{"Paper_Title":"Mastering the game of Go with deep neural networks and tree search","Paper_Journal":"Nature","Journal_Level":"A","Paper_Year":"2016","Paper_Level":"B","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author":{"Demis Hassabis":{"Author_Email":"vikas","Author_Name":"Demis Hassabis","Author_ID":"26767588000","Author_Level":"R0"},"Aja Huang":{"Author_Email":"vikas","Author_Name":"Aja Huang","Author_ID":"26767588000","Author_Level":"R0"},"Madeleine Leach":{"Author_Email":"vikas","Author_Name":"Madeleine Leach","Author_ID":"26767588000","Author_Level":"R0"},"Timothy P. Lillicrap":{"Author_Email":"vikas","Author_Name":"Timothy P. Lillicrap","Author_ID":"26767588000","Author_Level":"R0"}},"Cited_Num":"15","Cited_High":"9"},{"Paper_Title":"Learning Deep Belief Networks from Non-stationary Streams","Paper_Journal":"ICANN","Journal_Level":"A","Paper_Year":"2012","Paper_Level":"A","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author":{"Federico Montesino-Pouzols":{"Author_Email":"vikas","Author_Name":"Federico Montesino-Pouzols","Author_ID":"26767588000","Author_Level":"R0"},"Marc Peter Deisenroth":{"Author_Email":"vikas","Author_Name":"Marc Peter Deisenroth","Author_ID":"26767588000","Author_Level":"R0"},"Tapani Raiko":{"Author_Email":"vikas","Author_Name":"Tapani Raiko","Author_ID":"26767588000","Author_Level":"R0"},"Roberto Calandra":{"Author_Email":"vikas","Author_Name":"Roberto Calandra","Author_ID":"26767588000","Author_Level":"R0"}},"Cited_Num":"25","Cited_High":"19"},{"Paper_Title":"A Classification-Based Polyphonic Piano Transcription Approach Using Learned Feature Representations","Paper_Journal":"ISMIR","Journal_Level":"A","Paper_Year":"2011","Paper_Level":"C","Paper_Domain":{"Computer Science(All)":"A","Library And Information Sciences":"B","Computer Science Applications":"A"},"Paper_Author":{"Malcolm Slaney":{"Author_Email":"vikas","Author_Name":"Malcolm Slaney","Author_ID":"26767588000","Author_Level":"R0"},"Honglak Lee":{"Author_Email":"vikas","Author_Name":"Honglak Lee","Author_ID":"26767588000","Author_Level":"R0"},"Jiquan Ngiam":{"Author_Email":"vikas","Author_Name":"Jiquan Ngiam","Author_ID":"26767588000","Author_Level":"R0"},"Juhan Nam":{"Author_Email":"vikas","Author_Name":"Juhan Nam","Author_ID":"26767588000","Author_Level":"R0"}},"Cited_Num":"24","Cited_High":"12"}],"Friend_List":{},"Fans_List":{},"Attention_List":{}}'
    var authorInfo = $.parseJSON(author_data);
    console.log(authorInfo);
    var domain_ls = [];

    if(authorInfo.Author_Portrait != null){//头像
        $(".basic_information .portrait img").attr("src","data:image/jpg;base64,"+ authorInfo.Portrait);
    }
    $(".information_head .name").text(authorInfo.Author_Name);//姓名
    //小领域对象
    //显示作者所在中领域
    $.each(authorInfo.Author_Domain, function (key,value) {
        domain_ls.push(key);
        $(".field_rank .fields_all ul").append('<li id="' + key + '">' + ReplaceFirstUper(key.substr(0,key.length-5)) +' (' + authorInfo.Middle_R_Level[key] + ')' + '</li>');
    });
    $(".field_rank .fields_all ul li").on('mouseover',function () {
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
                    }
                    else if (r_grade == 'R1') {
                        $("#layer ul").append('<li><span class="' + key + '" id="' + p + '">' + ReplaceFirstUper(p) + '<span> Top 5%</span>' + '</span></li>');
                    }
                    else if (r_grade == 'R2') {
                        $("#layer ul").append('<li><span class="' + key + '" id="' + p + '">' + ReplaceFirstUper(p) + '<span> Top 1/4</span>' + '</span></li>');
                    }
                    else if (r_grade == 'R3') {
                        $("#layer ul").append('<li><span class="' + key + '" id="' + p + '">' + ReplaceFirstUper(p) + '<span> Top 1/2</span>' + '</span></li>');
                    }
                    else if (r_grade == 'R4') {
                        $("#layer ul").append('<li><span class="' + key + '" id="' + p + '">' + ReplaceFirstUper(p) + '<span> Top 3/4</span>' + '</span></li>');
                    }
                    else {
                        $("#layer ul").append('<li><span class="' + key + '" id="' + p + '">' + ReplaceFirstUper(p) + '<span> Top ...</span>' + '</span></li>');
                    }
                });
            }
        }
    });
    $(".field_rank .fields_all ul li").on('mouseleave',function () {
        $(this).removeClass('active');
         $("#layer").remove();
     });
     //Level
    if (authorInfo.Author_Level == null){
        $("#author_level").text('R5');
    }
    else{
        $("#author_level").text(authorInfo.Author_Level);
    }
    //organization
    var org_str = '/institution/?Institution='+$.base64.encode(encodeURI(authorInfo.Author_Institution.Institution))+'&InstitutionId='+$.base64.encode(encodeURI(authorInfo.Author_Institution.InstitutionId)); 
    $("#org").append('<a href = ' + org_str + '>' + authorInfo.Author_Institution.Institution + '</a>');//机构
    //connection
    if(authorInfo.Phone){
        $(".connection ul").append('<li><img src="./images/phone.png"><span>' + authorInfo.Phone + '</span></li>');//电话
    }
    $(".connection ul").append('<li><img src="./images/email.png"><span>' + authorInfo.Author_Email + '</span></li>');
    $("#cited_num").text(authorInfo.Cited_High + '/' + authorInfo.Cited_Num);//引用数
    $("#article_num").text(authorInfo.Article_High + '/' + authorInfo.Article_Num);//文章数
    $("#page").text(authorInfo.Personal_Homepage);//个人主页
    if(authorInfo.Personal_Show){
        $("#introduction").text(authorInfo.Personal_Show);//个人简介
    }
    $("#int_more").click(function(e){
        $('#introduction_more').show();
        e.stopPropagation();
    });
    $("#introduction_more").click(function(e){
        e.stopPropagation();
    });
    $(document).on("click", function(){
        $("#introduction_more").hide();
    });
    
})