$(function () {
    var ul_li = $('#box li');
    var len = ul_li.length;
    $('#pagerArea').cypager({
        // pgerId: 'cy_pager', //插件的ID 默认 : cy_pager 
        pg_size: 10, //每页显示记录数 默认：10条 
        pg_cur_count: 1, //当前页数（如果需要默认显示指定页面，则设置） 
        pg_total_count: len, //总记录数 
        pg_nav_count: 10, //显示多少个导航数  默认：7个 
        pg_prev_name: '上一页', //上一页按钮名称（默认：PREV） 
        pg_next_name:'下一页'//下一页按钮名称 (默认：NEXT) 
        // pg_call_fun(page_count) //回调函数，点击按钮执行
    });
    var page_now = 0;
    ul_li.hide();
    for(let i = 0;i < 10;i++){
        ul_li.eq(i).show();
    }
    $(".pager li").click(function () {
        $("#box").css("padding-bottom", 0);
        page_now = parseInt($(".pager li.pg-selected").text()) - 1;
        ul_li.hide();
        for (i = page_now * 10; i < (page_now + 1) * 10; i++) {
            ul_li.eq(i).show();
        }
    });
})