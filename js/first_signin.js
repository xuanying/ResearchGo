$(function () {
    // 领域
    var fields_data = '{"A": ["Astronomy and Astrophysics", "Anesthesiology and Pain Medicine", "Atomic and Molecular Physics, and Optics", "Anthropology", "Applied Microbiology and Biotechnology", "Agronomy and Crop Science", "Animal Science and Zoology", "Analysis", "Advanced and Specialised Nursing", "Aerospace Engineering", "Aquatic Science", "Applied Mathematics", "Ageing", "Analytical Chemistry", "Archaeology", "Architecture ", "Agricultural and Biological Sciences (miscellaneous)", "Arts and Humanities (miscellaneous)", "Atmospheric Science", "Assessment and Diagnosis", "Applied Psychology", "Automotive Engineering", "Anatomy", "Acoustics and Ultrasonics", "Algebra and Number Theory", "Artificial Intelligence", "Accounting"], "C": ["Condensed Matter Physics", "Computer Vision and Pattern Recognition", "Community and Home Care", "Chemical Engineering (miscellaneous)", "Clinical Biochemistry", "Cultural Studies", "Classics", "Complementary and alternative medicine", "Computational Theory and Mathematics", "Computer Science (miscellaneous)", "Conservation", "Computational Mechanics", "Catalysis", "Clinical Neurology", "Chemical Health and Safety", "Computer Networks and Communications", "Chiropractics", "Communication", "Computer Graphics and Computer-Aided Design", "Cancer Research", "Computer Science Applications", "Ceramics and Composites", "Cellular and Molecular Neuroscience", "Cardiology and Cardiovascular Medicine", "Colloid and Surface Chemistry", "Civil and Structural Engineering", "Critical Care and Intensive Care Medicine", "Computational Mathematics", "Control and Optimization", "Computers in Earth Sciences", "Complementary and Manual Therapy", "Care Planning", "Control and Systems Engineering", "Clinical Psychology", "Cell Biology", "Cognitive Neuroscience", "Critical Care", "Chemistry (miscellaneous)"], "B": ["Biochemistry", "Biophysics", "Biochemistry, Genetics and Molecular Biology (miscellaneous)", "Biological Psychiatry", "Biomaterials", "Bioengineering", "Biomedical Engineering", "Business and International Management", "Behavioral Neuroscience", "Business, Management and Accounting (miscellaneous)", "Building and Construction", "Biochemistry, medical", "Biotechnology"], "E": ["Endocrine and Autonomic Systems", "Emergency", "Endocrinology, Diabetes and Metabolism", "Earth-Surface Processes", "Ecology", "Endocrinology", "Embryology", "Electrical and Electronic Engineering", "Electrochemistry", "Electronic, Optical and Magnetic Materials", "Education", "Earth and Planetary Sciences (miscellaneous)", "Engineering (miscellaneous)", "Epidemiology", "Economics and Econometrics", "Energy Engineering and Power Technology", "Emergency Medicine", "Economic Geology", "Ecological Modelling", "Ecology, Evolution, Behavior and Systematics", "Emergency Medical Services", "Experimental and Cognitive Psychology", "Environmental Science (miscellaneous)", "Economics, Econometrics and Finance (miscellaneous)", "Environmental Chemistry", "Energy (miscellaneous)", "Environmental Engineering"], "D": ["Developmental Biology", "Developmental and Educational Psychology", "Dermatology", "Drug guides", "Drug Discovery", "Discrete Mathematics and Combinatorics", "Decision Sciences (miscellaneous)", "Development", "Developmental Neuroscience", "Dental Assisting", "Dentistry (miscellaneous)", "Demography", "Dental Hygiene"], "G": ["Geotechnical Engineering and Engineering Geology", "Geography, Planning and Development", "Geriatrics and Gerontology", "Gender Studies", "Genetics", "Gastroenterology", "Geology", "Gerontology", "Genetics(clinical)", "Global and Planetary Change", "Geometry and Topology", "Geophysics", "Geochemistry and Petrology"], "F": ["Fundamentals and skills", "Food Science", "Family Practice", "Fuel Technology", "Forestry", "Finance", "Fluid Flow and Transfer Processes", "Filtration and Separation"], "I": ["Information Systems and Management", "Issues, ethics and legal aspects", "Immunology and Microbiology (miscellaneous) ", "Instrumentation", "Industrial relations", "Inorganic Chemistry", "Immunology", "Infectious Diseases", "Industrial and Manufacturing Engineering", "Information Systems", "Immunology and Allergy", "Insect Science", "Internal Medicine"], "H": ["Health(social science)", "Horticulture", "Human-Computer Interaction", "Hematology", "Health Information Management", "Health Policy", "Human Factors and Ergonomics", "Health, Toxicology and Mutagenesis", "Hardware and Architecture", "History and Philosophy of Science", "History", "Histology", "Health Informatics", "Health Professions (miscellaneous)", "Hepatology"], "K": [], "J": [], "M": ["Mechanics of Materials", "Microbiology", "Microbiology (medical)", "Molecular Medicine", "Mathematics (miscellaneous)", "Management, Monitoring, Policy and Law", "Medical Laboratory Technology", "Medical Terminology", "Medicine (miscellaneous)", "Management Science and Operations Research", "Mechanical Engineering", "Metals and Alloys", "Modelling and Simulation", "Management Information Systems", "Mathematical Physics", "Molecular Biology", "Music", "Museology", "Management of Technology and Innovation", "Media Technology", "Materials Chemistry", "Medical Assisting and Transcription", "Materials Science (miscellaneous)", "Maternity and Midwifery", "Marketing"], "L": ["Library and Information Sciences", "LPN and LVN", "Life-span and Life-course Studies", "Language and Linguistics", "Literature and Literary Theory", "Law", "Leadership and Management", "Linguistics and Language", "Logic"], "O": ["Oceanography", "Occupational Therapy", "Oral Surgery", "Organic Chemistry", "Oncology", "Orthodontics", "Otorhinolaryngology", "Ophthalmology", "Obstetrics and Gynaecology", "Oncology(nursing)", "Ocean Engineering", "Organizational Behavior and Human Resource Management", "Orthopedics and Sports Medicine", "Optometry"], "N": ["Numerical Analysis", "Neuropsychology and Physiological Psychology", "Neuroscience (miscellaneous)", "Neurology", "Nutrition and Dietetics", "Nature and Landscape Conservation", "Nursing (miscellaneous)", "Nuclear Energy and Engineering", "Nuclear and High Energy Physics", "Nephrology", "Nurse Assisting"], "Q": [], "P": ["Parasitology", "Political Science and International Relations", "Palaeontology", "Public Administration", "Pathology and Forensic Medicine", "Physical Therapy, Sports Therapy and Rehabilitation", "Pharmacology (nursing)", "Pharmaceutical Science", "Pharmacy", "Polymers and Plastics", "Process Chemistry and Technology", "Periodontics", "Physics and Astronomy (miscellaneous)", "Plant Science", "Physical and Theoretical Chemistry", "Pharmacology (medical)", "Pathophysiology", "Pediatrics", "Pollution", "Physiology", "Physiology (medical)", "Podiatry", "Psychology (miscellaneous)", "Philosophy", "Pulmonary and Respiratory Medicine", "Pharmacology", "Pediatrics, Perinatology, and Child Health", "Public Health, Environmental and Occupational Health", "Phychiatric Mental Health", "Psychiatry and Mental health"], "S": ["Statistics, Probability and Uncertainty", "Statistics and Probability", "Signal Processing", "Space and Planetary Science", "Statistical and Nonlinear Physics", "Soil Science", "Speech and Hearing", "Structural Biology", "Social Sciences (miscellaneous)", "Sociology and Political Science", "Spectroscopy", "Surfaces, Coatings and Films", "Software", "Sensory Systems", "Social Psychology", "Safety, Risk, Reliability and Quality", "Surgery", "Safety Research", "Surfaces and Interfaces", "Strategy and Management", "Stratigraphy"], "R": ["Religious studies", "Renewable Energy, Sustainability and the Environment", "Radiation", "Reproductive Medicine", "Reviews and References, Medical", "Research and Theory", "Respiratory Care", "Review and Exam Preparation", "Radiological and Ultrasound Technology", "Rheumatology", "Rehabilitation", "Radiology Nuclear Medicine and imaging"], "U": ["Urban Studies", "Urology"], "T": ["Transportation", "Tourism, Leisure and Hospitality Management", "Transplantation", "Theoretical Computer Science"], "W": ["Waste Management and Disposal", "Water Science and Technology"], "V": ["Visual Arts and Performing Arts", "Virology"], "Y": [], "X": [], "Z": []}'
    var obj_field = JSON.parse(fields_data);
    var fields_ls = [];
    var fields_ls_ul = $('.field_choose_box .choose_content ul');
    var tabs_li = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // 领域按首字母排序
    var order = [];
    $.each(obj_field, function (key, value) {
        order = value.sort(function (a, b) {
            return a.localeCompare(b);
        });
    });
    // 初始化领域选择
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
    //填充首字母列表
    $.each(tabs_li,function (n,value) {
        if(value != 0){
            $('.field_choose_box_tabs').append('<li>'+ value +'</li>');
        }
    });
    $('.field_choose_box_tabs li:first-child').addClass('active');
    $('.field_choose_box').css('width',400 - zero * 15);


    function create_chooseBox(first_letter) {
        fields_ls_ul.find('li').remove();
        $.each(obj_field, function (key, value) {
            if (key == first_letter) {
                // fields_ls.push(value);
                fields_ls = value;
            }
        });
        for (let i = 0; i < fields_ls.length; i++) {
            fields_ls_ul.append('<li>' + fields_ls[i] + '</li>');
        }
    }
    // 背景图片大小
    if ($(window).width() < 1000) {
        $('body').css('background-size', '1000px');
    } else {
        $('body').css('background-size', '100%');
    }
    // 窗口尺寸变化时
    $(window).resize(function () {
        if ($(window).width() < 1000) {
            $('body').css('background-size', '1000px');
        } else {
            $('body').css('background-size', '100%');
        }
    })
    // // 数据处理
    // var domain_data = $('#domain').text();
    // var keyword_data = $('#keyword_message').text();
    // var domain_messages = JSON.parse(domain_data);
    // var keyword_messages = JSON.parse(keyword_data);
    // //默认领域
    // $.each(domain_messages, function (n, value) {
    //     if (n == 0) {
    //         $("#field .field").val(value);
    //     } else {
    //         $("#field").after("<p class='input_p'><input type='text' value='" + value + "' name='domain' class='field' multiple='multiple' readonly><input type='button' class='sub_message' value='-' style='width: 25px;'></p>");
    //     }
    // });
    // //默认关键字
    // $.each(keyword_messages, function (n, value) {
    //     if (n == 0) {
    //         $("#keyword .keyword").val(value);
    //     } else {
    //         $("#keyword").after("<p class='input_p'><input type='text' value='" + value + "' name='keyword' class='keyword' multiple='multiple'><input type='button' class='sub_message' value='-' style='width: 25px;'></p>");
    //     }
    // });
    //field添加领域
    $("#add_field").click(function () {
        $("#field").after("<p class='input_p'><input type='text' name='domain' class='field' multiple='multiple' readonly><input type='button' class='sub_message' value='-' style='width: 25px;'></p>");
    });
    //keyword添加关键词
    $("#add_keyword").click(function () {
        $("#keyword").after("<p class='input_p'><input type='text' name='keyword' class='keyword' multiple='multiple'><input type='button' class='sub_message' value='-' style='width: 25px;'></p>");
    });
    //删除输入框
    $(".messages_form").on('click', '.sub_message', function () {
        $(this).parent().remove();
    });
    //领域选择
    //点击领域输入框，出现领域选择框
    $(".messages_form").on('focus', '.field', function () {
        var box = $(".field_choose_box");
        $(this).addClass("field_active");
        box.show(200);
        box.css("top",$(this).offset().top - 200);
        box.css("left",$(this).offset().left-30);
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
    $(".choose_content").on('click', 'li', function () {
        $(".field_active").val($(this).text());
        $(".field_choose_box").hide(200);
        $(".field").removeClass("field_active");
    });
    //表单提交之前，检查领域和关键词是否重复填写，不允许重复填写
    $("#submit_btn").click(function () {
        var field_inputs = [];
        var keyword_inputs = [];
        var re_mark = false; //重复标记
        var callNameData = $("#call_name_full").val();
        if (callNameData.length >= 15){
            alert("昵称过长，请限制在15个字符内");
            re_mark = true;
        }
        $.each($(".field"),function () { //领域
            var field_now = $(this).val();
            if(field_inputs.indexOf(field_now) != -1){
                alert("请不要重复填写领域：" + field_now);
                re_mark = true;
            }else{
                field_inputs.push(field_now);
            }
        });
        $.each($(".keyword"),function () { //关键词
            var keyword_now = $(this).val();
            if(keyword_inputs.indexOf(keyword_now) != -1){
                alert("请不要重复填写关键词：" + keyword_now);
                re_mark = true;
            }else{
                keyword_inputs.push(keyword_now);
            }
        });
        if(re_mark == true){
            return false; 

        } else{
           //表单数据提交
           var submitUrl = '/information_perfect/';
           var fullNameData = $("#e_name_full").val();
           $.post(submitUrl,{domain:JSON.stringify(field_inputs),keyword:JSON.stringify(keyword_inputs),full_name:fullNameData,call_name:callNameData}
            );
        }
    });


})