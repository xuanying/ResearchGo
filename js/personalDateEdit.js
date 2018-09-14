var email_num = $(".email_num");
    //若邮件条数为0或不是数字，隐藏
    if(email_num.text() > 9 && email_num.text() < 100 ){
        email_num.css('font-size','0.7em');
    }else if( email_num.text() >= 100 ){
        email_num.css('font-size','0.6em');
        email_num.text('99+');
    }else if(email_num.text() > 0 && email_num.text() < 10 ){}else {
        email_num.hide();
    }

    //领域
    var fields_data = '{"A": ["Astronomy and Astrophysics", "Anesthesiology and Pain Medicine", "Atomic and Molecular Physics, and Optics", "Anthropology", "Applied Microbiology and Biotechnology", "Agronomy and Crop Science", "Animal Science and Zoology", "Analysis", "Advanced and Specialised Nursing", "Aerospace Engineering", "Aquatic Science", "Applied Mathematics", "Ageing", "Analytical Chemistry", "Archaeology", "Architecture ", "Agricultural and Biological Sciences (miscellaneous)", "Arts and Humanities (miscellaneous)", "Atmospheric Science", "Assessment and Diagnosis", "Applied Psychology", "Automotive Engineering", "Anatomy", "Acoustics and Ultrasonics", "Algebra and Number Theory", "Artificial Intelligence", "Accounting"], "C": ["Condensed Matter Physics", "Computer Vision and Pattern Recognition", "Community and Home Care", "Chemical Engineering (miscellaneous)", "Clinical Biochemistry", "Cultural Studies", "Classics", "Complementary and alternative medicine", "Computational Theory and Mathematics", "Computer Science (miscellaneous)", "Conservation", "Computational Mechanics", "Catalysis", "Clinical Neurology", "Chemical Health and Safety", "Computer Networks and Communications", "Chiropractics", "Communication", "Computer Graphics and Computer-Aided Design", "Cancer Research", "Computer Science Applications", "Ceramics and Composites", "Cellular and Molecular Neuroscience", "Cardiology and Cardiovascular Medicine", "Colloid and Surface Chemistry", "Civil and Structural Engineering", "Critical Care and Intensive Care Medicine", "Computational Mathematics", "Control and Optimization", "Computers in Earth Sciences", "Complementary and Manual Therapy", "Care Planning", "Control and Systems Engineering", "Clinical Psychology", "Cell Biology", "Cognitive Neuroscience", "Critical Care", "Chemistry (miscellaneous)"], "B": ["Biochemistry", "Biophysics", "Biochemistry, Genetics and Molecular Biology (miscellaneous)", "Biological Psychiatry", "Biomaterials", "Bioengineering", "Biomedical Engineering", "Business and International Management", "Behavioral Neuroscience", "Business, Management and Accounting (miscellaneous)", "Building and Construction", "Biochemistry, medical", "Biotechnology"], "E": ["Endocrine and Autonomic Systems", "Emergency", "Endocrinology, Diabetes and Metabolism", "Earth-Surface Processes", "Ecology", "Endocrinology", "Embryology", "Electrical and Electronic Engineering", "Electrochemistry", "Electronic, Optical and Magnetic Materials", "Education", "Earth and Planetary Sciences (miscellaneous)", "Engineering (miscellaneous)", "Epidemiology", "Economics and Econometrics", "Energy Engineering and Power Technology", "Emergency Medicine", "Economic Geology", "Ecological Modelling", "Ecology, Evolution, Behavior and Systematics", "Emergency Medical Services", "Experimental and Cognitive Psychology", "Environmental Science (miscellaneous)", "Economics, Econometrics and Finance (miscellaneous)", "Environmental Chemistry", "Energy (miscellaneous)", "Environmental Engineering"], "D": ["Developmental Biology", "Developmental and Educational Psychology", "Dermatology", "Drug guides", "Drug Discovery", "Discrete Mathematics and Combinatorics", "Decision Sciences (miscellaneous)", "Development", "Developmental Neuroscience", "Dental Assisting", "Dentistry (miscellaneous)", "Demography", "Dental Hygiene"], "G": ["Geotechnical Engineering and Engineering Geology", "Geography, Planning and Development", "Geriatrics and Gerontology", "Gender Studies", "Genetics", "Gastroenterology", "Geology", "Gerontology", "Genetics(clinical)", "Global and Planetary Change", "Geometry and Topology", "Geophysics", "Geochemistry and Petrology"], "F": ["Fundamentals and skills", "Food Science", "Family Practice", "Fuel Technology", "Forestry", "Finance", "Fluid Flow and Transfer Processes", "Filtration and Separation"], "I": ["Information Systems and Management", "Issues, ethics and legal aspects", "Immunology and Microbiology (miscellaneous) ", "Instrumentation", "Industrial relations", "Inorganic Chemistry", "Immunology", "Infectious Diseases", "Industrial and Manufacturing Engineering", "Information Systems", "Immunology and Allergy", "Insect Science", "Internal Medicine"], "H": ["Health(social science)", "Horticulture", "Human-Computer Interaction", "Hematology", "Health Information Management", "Health Policy", "Human Factors and Ergonomics", "Health, Toxicology and Mutagenesis", "Hardware and Architecture", "History and Philosophy of Science", "History", "Histology", "Health Informatics", "Health Professions (miscellaneous)", "Hepatology"], "K": [], "J": [], "M": ["Mechanics of Materials", "Microbiology", "Microbiology (medical)", "Molecular Medicine", "Mathematics (miscellaneous)", "Management, Monitoring, Policy and Law", "Medical Laboratory Technology", "Medical Terminology", "Medicine (miscellaneous)", "Management Science and Operations Research", "Mechanical Engineering", "Metals and Alloys", "Modelling and Simulation", "Management Information Systems", "Mathematical Physics", "Molecular Biology", "Music", "Museology", "Management of Technology and Innovation", "Media Technology", "Materials Chemistry", "Medical Assisting and Transcription", "Materials Science (miscellaneous)", "Maternity and Midwifery", "Marketing"], "L": ["Library and Information Sciences", "LPN and LVN", "Life-span and Life-course Studies", "Language and Linguistics", "Literature and Literary Theory", "Law", "Leadership and Management", "Linguistics and Language", "Logic"], "O": ["Oceanography", "Occupational Therapy", "Oral Surgery", "Organic Chemistry", "Oncology", "Orthodontics", "Otorhinolaryngology", "Ophthalmology", "Obstetrics and Gynaecology", "Oncology(nursing)", "Ocean Engineering", "Organizational Behavior and Human Resource Management", "Orthopedics and Sports Medicine", "Optometry"], "N": ["Numerical Analysis", "Neuropsychology and Physiological Psychology", "Neuroscience (miscellaneous)", "Neurology", "Nutrition and Dietetics", "Nature and Landscape Conservation", "Nursing (miscellaneous)", "Nuclear Energy and Engineering", "Nuclear and High Energy Physics", "Nephrology", "Nurse Assisting"], "Q": [], "P": ["Parasitology", "Political Science and International Relations", "Palaeontology", "Public Administration", "Pathology and Forensic Medicine", "Physical Therapy, Sports Therapy and Rehabilitation", "Pharmacology (nursing)", "Pharmaceutical Science", "Pharmacy", "Polymers and Plastics", "Process Chemistry and Technology", "Periodontics", "Physics and Astronomy (miscellaneous)", "Plant Science", "Physical and Theoretical Chemistry", "Pharmacology (medical)", "Pathophysiology", "Pediatrics", "Pollution", "Physiology", "Physiology (medical)", "Podiatry", "Psychology (miscellaneous)", "Philosophy", "Pulmonary and Respiratory Medicine", "Pharmacology", "Pediatrics, Perinatology, and Child Health", "Public Health, Environmental and Occupational Health", "Phychiatric Mental Health", "Psychiatry and Mental health"], "S": ["Statistics, Probability and Uncertainty", "Statistics and Probability", "Signal Processing", "Space and Planetary Science", "Statistical and Nonlinear Physics", "Soil Science", "Speech and Hearing", "Structural Biology", "Social Sciences (miscellaneous)", "Sociology and Political Science", "Spectroscopy", "Surfaces, Coatings and Films", "Software", "Sensory Systems", "Social Psychology", "Safety, Risk, Reliability and Quality", "Surgery", "Safety Research", "Surfaces and Interfaces", "Strategy and Management", "Stratigraphy"], "R": ["Religious studies", "Renewable Energy, Sustainability and the Environment", "Radiation", "Reproductive Medicine", "Reviews and References, Medical", "Research and Theory", "Respiratory Care", "Review and Exam Preparation", "Radiological and Ultrasound Technology", "Rheumatology", "Rehabilitation", "Radiology Nuclear Medicine and imaging"], "U": ["Urban Studies", "Urology"], "T": ["Transportation", "Tourism, Leisure and Hospitality Management", "Transplantation", "Theoretical Computer Science"], "W": ["Waste Management and Disposal", "Water Science and Technology"], "V": ["Visual Arts and Performing Arts", "Virology"], "Y": [], "X": [], "Z": []}';
    var obj_field = $.parseJSON(fields_data);
    var field_ls = [];
    var field_ls_ul = $(".field_choose_box .choose_content ul");
    var tabs_li = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    //---------------------------------领域按首字母排序  
    var order = [];
    $.each(obj_field,function (key,value) {
        order = value.sort(function(a, b){
            return a.localeCompare(b);
        });
        value = order;
    });

    //初始化领域选择（A）
    create_chooseBox('A');

    //去掉无领域的首字母
    var temp = 0;
    var zero = 0;
    for( var i = 0; i < 26; i++){
        temp = 0;
        $.each(obj_field,function (key,value) {
            if(tabs_li[i] == key && value.length > 0){
                temp = 1;
            }
        });
        if(temp == 0){
            tabs_li.splice(i,1,0);
            zero++;
        }
    }
    $.each(tabs_li,function (n,value) {
        if(value != 0){
            $('.field_choose_box_tabs').append('<li>'+ value +'</li>');
        }
    });
    $('.field_choose_box_tabs li:first-child').addClass('active');
    $('.field_choose_box').css('width',400 - zero * 15);

    //某首字母的领域显示
    function create_chooseBox(first_letter) {
        field_ls_ul.find('li').remove();
        $.each(obj_field,function (key,value) {
            if(key == first_letter){
                field_ls = value;
            }
        });
        for(var i = 0;i < field_ls.length; i++){
            field_ls_ul.append('<li>'+ field_ls[i] +'</li>');
        }
    }

    //领域选择
    //点击领域输入框，出现领域选择框
    $(".text_messages").on('focus','.field',function() {
        var box = $(".field_choose_box");
        $(this).addClass("field_active");
        box.show(200);
        box.css("top",$(this).offset().top).css("left",$(this).offset().left);
    });
    //点击返回，领域选择框消失
    $(".field_choose_box_footer button").click(function () {
        $(".field_choose_box").hide(200);
    });
    //切换首字母
    $('.field_choose_box_tabs li').click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        create_chooseBox($(this).text());
    });
    //选中领域
    $(".choose_content").on('click','li',function () {
        $(".field_active").val($(this).text());
        $(".field_choose_box").hide(200);
        $(".field").removeClass("field_active");
    });

    //数据处理
    // var edit_data = "";
   
    // var edit_message = $.parseJSON(edit_data);

    // if(edit_message.Portrait != "None" && edit_message.Portrait){//头像
    //     $("form .portrait img").attr("src","data:image/jpg;base64,"+ edit_message.Portrait);
    //     $("img.portrait").attr("src","data:image/jpg;base64,"+ edit_message.Portrait);
    // }
    // $("#call_name").val(edit_message.Call_name);
    // if(edit_message.Chinese_name){//中文名
    //     $("#chinese_name").val(edit_message.Chinese_name);
    // }
    // $("#english_name").val(edit_message.Full_name);//英文名
    // // $.each(edit_message.Abbr_name,function (n,value) {//英文缩写
    // //     if(n > 0){
    // //         add_messages("#abbr", "abbr", value, "abbr_name");
    // //     }else{
    // //         $("#abbr .abbr").val(value);
    // //     }
    // // });
    // if(edit_message.Profile){//个人简介
    //     $("#introduce").val(edit_message.Profile);
    // }
    // var field_num = 0,keyword_num = 0,email_item_num = 0;//可增减项计数 17.05.24
    // $.each(edit_message.Domain,function (n,value) {//领域
    //     field_num++;
    //     if(n > 0){
    //         add_messages("#field", "field", value, "domain");
    //     }else{
    //         $("#field .field").val(value);
    //     }
    // });
    // if(field_num > 1){$("#field").find(".sub_message").removeAttr("disabled");}
    // var keyword_input = $(".keyword");
    // $.each(edit_message.Keyword,function (n,value) {//关键词
    //     keyword_num++;
    //     if(n > 0){
    //         add_messages("#keyword", "keyword", value, "keyword");
    //     }else{
    //         keyword_input.eq(n).val(value);
    //     }
    // });
    // if(keyword_num > 1){$("#keyword").find(".sub_message").removeAttr("disabled");}
    // $.each(edit_message.Email,function (n,value) {//邮箱
    //     email_item_num++;
    //     if(n > 0){
    //         add_messages("#email", "email", value, "email");
    //     }else{
    //         $("#email .email").val(value);
    //     }
    // });
    // if(email_item_num > 1){$("#email").find(".sub_message").removeAttr("disabled");}
    // if(edit_message.Social.QQ){//QQ
    //     $("#QQ").val(edit_message.Social.QQ);
    // }
    // if(edit_message.Social.wechat){//微信
    //     $("#wechat").val(edit_message.Social.wechat);
    // }
    // if(edit_message.Social.phone){//电话
    //     $("#phone").val(edit_message.Social.phone);
    // }
    // if(edit_message.Social.facebook){//facebook
    //     $("#facebook").val(edit_message.Social.facebook);
    // }
    // if(edit_message.Social.twitter){//twitter
    //     $("#twitter").val(edit_message.Social.twitter);
    // }
    // if(edit_message.Social.ins){//ins
    //     $("#ins").val(edit_message.Social.ins);
    // }

    //添加英文缩写
    // $("#add_abbr").click(function () {
    //     add_messages("#abbr", "abbr", "", "abbr_name");
    // });
    //添加领域
    $("#add_field").click(function () {
        field_num++;
        add_messages("#field", "field", "", "domain");
        if(field_num > 1){$("#field").find(".sub_message").removeAttr("disabled");}
    });
    //添加关键字
    $("#add_keyword").click(function () {
        keyword_num++;
        add_messages("#keyword", "keyword", "", "keyword");
        if(keyword_num > 1){$("#keyword").find(".sub_message").removeAttr("disabled");}
    });
    //添加邮箱
    $("#add_email").click(function () {
        email_item_num++;
        add_messages("#email", "email", "", "email");
        if(email_item_num > 1){$("#email").find(".sub_message").removeAttr("disabled");}
    });
    //添加输入框的函数
    function add_messages(addID, addClass, value, name) {
        if(addClass == 'email'){
            $(addID).after("<div class='item " + addClass + "_div'><label></label><input type='button' class='sub_message' value='-'><input class='short "+ addClass +"' name='" + name + "' type='email' value='" + value +"' style='position: relative; left: 5px'></div>");
        }else{
            $(addID).after("<div class='item " + addClass + "_div'><label></label><input type='button' class='sub_message' value='-'><input class='short "+ addClass +"' name='" + name + "' type='text' value='" + value +"' style='position: relative; left: 5px'></div>");
        }
    }
    //删除输入框
    $(".text_messages").on('click','.sub_message',function() {
        var $parentNode = $(this).parent();
        if($parentNode.attr("id")){ //若删除的是第一项，将第一项的其他功能转移至第二项 17.05.24
            var id = $parentNode.attr("id");
            // var label = parentNode.find("label").text();
            // console.log(id,label);
            var first_html = $parentNode.html();
            var $secondNode = $parentNode.next();
            var second_field = $secondNode.find("input[type='text']").val();
            $parentNode.remove();
            $secondNode.html(first_html);
            $secondNode.attr("id",id);
            $secondNode.find("input[type='text']").val(second_field);
            if(id === "field"){
                field_num--;
                $("#add_field").click(function () {
                    field_num++;
                    add_messages("#field", "field", "", "domain");
                    if(field_num > 1){$("#field").find(".sub_message").removeAttr("disabled");}
                });
                if(field_num === 1){
                    $("#field").find(".sub_message").attr("disabled",true);
                }
            }else if(id === "keyword"){
                keyword_num--;
                $("#add_keyword").click(function () {
                    keyword_num++;
                    add_messages("#keyword", "keyword", "", "keyword");
                    if(keyword_num > 1){$("#keyword").find(".sub_message").removeAttr("disabled");}
                });
                if(keyword_num === 1){
                    $("#keyword").find(".sub_message").attr("disabled",true);
                }
            }else if(id === "email"){
                email_item_num--;
                $("#add_email").click(function () {
                    email_item_num++;
                    add_messages("#email", "email", "", "email");
                    if(email_item_num > 1){$("#email").find(".sub_message").removeAttr("disabled");}
                });
                if(email_item_num === 1){
                    $("#email").find(".sub_message").attr("disabled",true);
                }
            }
        }else{
            if($(this).parent().hasClass("field_div")){
                field_num--;
                if(field_num === 1){
                    $("#field").find(".sub_message").attr("disabled",true);
                }
            }else if($(this).parent().hasClass("keyword_div")){
                keyword_num--;
                if(keyword_num === 1){
                    $("#keyword").find(".sub_message").attr("disabled",true);
                }
            }else if($(this).parent().hasClass("email_div")){
                email_item_num--;
                if(email_item_num === 1){
                    $("#email").find(".sub_message").attr("disabled",true);
                }
            }
            $(this).parent().remove();
        }
    });

    //修改头像
    $(".portrait input").click(function () {
        new_portrait.show();
    });

    var new_portrait = $(".new_portrait");
    var portrait_select_box = $(".portrait_select_box");
    //头像修改框铺满全屏-框位置设置
    new_portrait.css("width",$(window).width());
    new_portrait.css("height",$(window).height());
    portrait_select_box.css("left",($(window).width() - portrait_select_box.width())/2);

    $(window).resize(function () {
        new_portrait.css("width",$(window).width());
        new_portrait.css("height",$(window).height());
        portrait_select_box.css("left",($(window).width() - portrait_select_box.width())/2);
    });

    var startX,startY,flag=0;
    var portrait = $("#portrait");
    var id_window = $("#window");
    var div1 = $("#div1");
    var result = $("#result");
    var img_height = 0,img_width = 0;
    //读取图片后调整图片和选择窗大小位置
    portrait.bind("load",function () {
//            $("#portrait").css({"left":150 - $(this).width()/2,"top":150 - $(this).height()/2});
        img_height = portrait.height();
        img_width = portrait.width();
        if(portrait.width()>portrait.height()){
            portrait.css("width",div1.width()).css("height","auto");
        }else{
            portrait.css("height",div1.height()).css("width","auto");
        }
        portrait.css({"left":div1.width()/2 - $(this).width()/2,"top":div1.height()/2 - $(this).height()/2});
        id_window.css({"left":div1.width()/2 - id_window.width()/2,"top":div1.height()/2 - id_window.height()/2});
        id_window.show();
    });
    //选择窗滑动
    id_window.mousedown(function (event) {
        flag = 1;
        var offset = $(this).offset();
        startX = event.pageX - offset.left + div1.offset().left;
        startY = event.pageY - offset.top + div1.offset().top;
    });
    id_window.mousemove(function (event) {
        var min_height = div1.height()/2 - portrait.height()/2;
        var max_height = div1.height()/2 + portrait.height()/2 - id_window.height();
        var max_width = div1.width()/2 + portrait.width()/2- id_window.width();
        var min_width = div1.width()/2 - portrait.width()/2;
        if(flag == 1 && event.pageX - startX > min_width && event.pageX - startX < max_width && event.pageY - startY > min_height && event.pageY - startY < max_height){
            id_window.css({"left":event.pageX - startX,"top":event.pageY - startY});
            //滑动的同时预览，略卡
            // result.attr("src",portrait.attr("src"));
            // result.css({
            //     "width":portrait.width()*100/id_window.width(),
            //     "height":portrait.height()*100/id_window.width(),
            //     "left": (-id_window.offset().left -1 + portrait.offset().left)*100/id_window.width(),
            //     "top":(-id_window.offset().top -1 + portrait.offset().top)*100/id_window.width()
            // });
        }
    });
    id_window.mouseout(function () {
        flag = 0;
    });
    //选择窗大小调整
    var dragflag = 0,dragstartX,dragstartY;
    $("#drag").mousedown(function (event) {
        dragflag = 1;
        var offset = $(this).offset();
        dragstartX = event.pageX - offset.left + id_window.offset().left;
//            dragstartY = event.pageY - offset.top + $("#div1").offset().top;
    });
    $(window).mousemove(function (event) {
        if(dragflag == 1){
            id_window.css({"width":event.pageX - dragstartX,"height":event.pageX - dragstartX});
        }
    });
    $(window).mouseup(function (event){
        flag = 0;
        dragflag = 0;
        result.attr("src",portrait.attr("src"));
        result.css({
            "width":portrait.width()*100/id_window.width(),
            "height":portrait.height()*100/id_window.width(),
            "left": (-id_window.offset().left -1 + portrait.offset().left)*100/id_window.width(),
            "top":(-id_window.offset().top -1 + portrait.offset().top)*100/id_window.width()
        });
    });
    //input file隐藏
    $("#picture_choose").click(function () {
        $("#img_file").click();
    });

    //确定
    var head_width = 0,head_height = 0;
    var head_left = 0,head_top = 0,img_left = 0,img_top = 0,img_right = 0,img_bottom = 0;
    var portrait_img = $(".portrait img");
    $("#save_portrait").click(function () {
        portrait_img.attr("src",result.attr("src"));
        // var left = $("#portrait").width();
        var left = result.css("left").substring(0,result.css("left").length-2);
        var top = result.css("top").substring(0,result.css("top").length-2);
        portrait_img.css("left",left*2);
        portrait_img.css("top",top*2);
        portrait_img.width(result.width()*2);
        portrait_img.height(result.height()*2);
        //////////////////////////////////////////////////////////定位头像在图片上的位置
        head_width =  portrait_img.width();
        head_height =  portrait_img.height();
        head_left = -left*2;
        head_top = -top*2;
        img_left = img_width/head_width*head_left;
        img_top = img_height/head_height*head_top;
        img_right = img_left + img_width/head_width*$(".portrait").eq(1).width();
        img_bottom = img_top + img_height/head_height*$(".portrait").eq(1).height();
        $("#corrdinate_1").val(Math.round(img_left));
        $("#corrdinate_2").val(Math.round(img_top));
        $("#corrdinate_3").val(Math.round(img_right));
        $("#corrdinate_4").val(Math.round(img_bottom));
        //console.log(Math.round(img_left),img_top,img_right,img_bottom);
        ///////////////////////////////////////////////////////////
        new_portrait.hide();
    });
    //取消
    $("#quit_portrait").click(function () {
        new_portrait.hide();
    });
    //    每隔一秒向后台询问有没有新消息
    setInterval(function () {
        $.post("/emailnum/",{},function (data) {
            if(data > 0){
                email_num.text(data);
                email_num.show();
                if(email_num.text() > 9 && email_num.text() < 100 ){
                    email_num.css('font-size','0.7em');
                }else if( email_num.text() >= 100 ){
                    email_num.css('font-size','0.6em');
                    email_num.text('99+');
                }else if(email_num.text() > 0 && email_num.text() < 10 ){}else {
                    email_num.hide();
                }
            }
        });
    },30000);
    
    //表单提交之前，检查英文缩写、邮箱、领域和关键词是否重复填写，不允许重复填写
    $("#update_form").submit(function () {
        var field_messages = [];
        var keyword_messages = [];
        var abbrName_messages = [];
        var email_messages = [];
        var re_mark = false; //重复标记
        var callNameData = $("#call_name").val();
        if (callNameData.length >= 15){
            alert("昵称过长，请限制在15个字符内");
            re_mark = true;
        }
        $.each($(".field"),function () { //领域
            var field_now = $(this).val();
            if(field_messages.indexOf(field_now) != -1){
                alert("请不要重复填写领域：" + field_now);
                re_mark = true;
            }else{
                field_messages.push(field_now);
            }
        });
        $.each($(".keyword"),function () { //关键词
            var keyword_now = $(this).val();
            if(keyword_messages.indexOf(keyword_now) != -1){
                alert("请不要重复填写关键词：" + keyword_now);
                re_mark = true;
            }else{
                keyword_messages.push(keyword_now);
            }
        });
        $.each($(".email"),function () { //邮箱
            var email_now = $(this).val();
            if(email_now){
                if(email_messages.indexOf(email_now) != -1){
                    alert("请不要重复填写邮箱：" + email_now);
                    re_mark = true;
                }else{
                    email_messages.push(email_now);
                }
            }
        });
        $.each($(".abbr"),function () { //英文名缩写
            var abbr_now = $(this).val();
            if(abbrName_messages.indexOf(abbr_now) != -1){
                alert("请不要重复填写英文名缩写：" + abbr_now);
                re_mark = true;
            }else{
                abbrName_messages.push(abbr_now);
            }
        });
        if(re_mark == true){return false;}
    });
