$(function(){
    $('#btn').click(function(){
        var param = {'top': -637 + 'px'};
        $('#img').stop().animate(param,0.6 * 1000,'swing');
    })
    $('#jump').click(function(){
        $(window).attr('location','http://www.baidu.com');
    })
    $('#encode').click(function(){
        var username = "余飞";
        console.log(username + 'username');
        console.log('encodeURI' + encodeURI(username));
        // console.log('base64' + $.base64.encode(username));
        console.log('base64 encodeURI' + $.base64.encode(encodeURI(username)));
    })
    
})