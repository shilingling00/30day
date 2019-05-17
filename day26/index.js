//橘色条的移动
$('.menulist>li').mouseenter(function (e) {
    var i=$(this).index();
    $(this).find('a').addClass('lines').end().siblings().find('a').removeClass('lines');
});
$('.menulist>li').mouseleave(function () {
    $(this).find('a').removeClass('lines')
});
//背景色的改变
$('.menulist>li>a').click(function () {
        $(this).addClass('bk').parent().siblings().find('a').removeClass('bk');
    if($(this).find('.iconyoujiantou').length==1){
        $(this).removeClass('bk');
        $(this).find('.iconyoujiantou').attr('class','iconfont icondownarrow').end().parent().siblings().find('.icondownarrow').attr('class','iconfont iconyoujiantou');
        $(this).parent().addClass('active').siblings().removeClass('active');
        //二级菜单点击变色
        $('.secondlist>li').click(function () {
            $(this).addClass('click').siblings().removeClass('click')
        })
    }else {
        $(this).removeClass('bk');
        $(this).find('.icondownarrow').attr('class','iconfont iconyoujiantou');
        $(this).parent().removeClass('active');
        $('.secondlist>li').removeClass('click')
    }
});
$('.menulist').click(function () {
    $('.leftmenu').css('width','230px');
    $('.rightcontent').css('width','calc(100% - 230px)');
    $('.iconshrink').data('action',false)
});
//右侧导航栏
//滑动按钮移动
$('.shrinkbut>ul>li').mouseenter(function () {
    var i=$(this).index();
    let w=$(this).width();
    $('.shrinkbut .hoverbox').animate({
        width:w+'px',
        left:($(this).position().left+20)+'px'
    },100)
});
$('.shrinkbut').mouseleave(function () {
    $('.shrinkbut .hoverbox').animate({
        width:0
    },100)
});
$('.rightnav>ul>li').mouseenter(function () {
   var n=$(this).index();
   var w=$(this).width();
   $('.rightnav .hoverbox').animate({
       width:w+'px',
       left:($(this).position().left+20)+'px'
   },100)
});
$('.rightnav').mouseleave(function () {
   $('.rightnav .hoverbox').animate({
       width:0
   },100)
});
//伸缩按钮
$('.iconshrink').click(function () {
    if($(this).data('action')==false){
        $('.menulist li a').find('.icondownarrow').attr('class','iconfont iconyoujiantou');
        $('.menulist li ').removeClass('active');
        $('.leftmenu').css('width','60px');
        $('.rightcontent').css('width','calc(100% - 60px)');
        $(this).data('action',true);
    }else {
        $('.leftmenu').css('width','230px');
        $('.rightcontent').css('width','calc(100% - 230px)');
        $(this).data('action',false);
    }

});