$(document).ready(function () {
    $('i').hide();
});
$(window).load(function () {
    $('i').show();

    var weixin=$('.iconweixin').position();
    var github=$('.iconGitHub').position();
    var youxiang=$('.iconyouxiang').position();
    var weibo=$('.iconweibo').position();
    var qq=$('.iconqq').position();
    var facebook=$('.iconfacebook').position();
    var twitter=$('.icontwitter').position();
    var img=$('.imgbox').position();
    console.log(img);

    $('i').css({
        position:'absolute',
        zIndex:'1',
        top:img.top+100,
        left:'47%'
    });

    setTimeout(function () {
        $('.iconweixin').animate({
            top:weixin.top-10,
            left:weixin.left-10
        },500)
    },250);

    setTimeout(function () {
        $('.iconweixin').animate({
            top:weixin.top,
            left:weixin.left,
        },250);
        $('.iconGitHub').animate({
            top:github.top+10,
            left:github.left-10
        },500)
    },500);
    setTimeout(function () {
        $('.iconGitHub').animate({
            top:github.top,
            left:github.left,
        },250);
        $('.iconyouxiang').animate({
            top:youxiang.top+10,
            left:youxiang.left-10,
        },500)
    },750);

    setTimeout(function () {
        $('.iconyouxiang').animate({
            top:youxiang.top,
            left:youxiang.left,
        },250);
        $('.iconweibo').animate({
            top:weibo.top+10,
            left:weibo.left-10,
        },500)
    },1000);

    setTimeout(function () {
        $('.iconweibo').animate({
            top:weibo.top,
            left:weibo.left
        },250);
        $('.iconqq').animate({
            top:qq.top+10,
            left:qq.left-10,
        },500)
    },1250);

    setTimeout(function () {
        $('.iconqq').animate({
            top:qq.top,
            left:qq.left
        },250);
        $('.iconfacebook').animate({
            top:facebook.top+10,
            left:facebook.left-10
        },500)
    },1500);

    setTimeout(function () {
        $('.iconfacebook').animate({
            top:facebook.top,
            left:facebook.left,
        },250);
        $('.icontwitter').animate({
            top:twitter.top+10,
            left:twitter.left-10,
        },500)
    },1750);

    setTimeout(function () {
        $('.icontwitter').animate({
            top:twitter.top,
            left:twitter.left
        })
    },2000)

});
