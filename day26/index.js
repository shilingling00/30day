//橘色条的移动
$('.menulist>li').mouseenter(function (e) {
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

//echarts图表
var chartone=echarts.init(document.getElementById('chartone'));
chartone.setOption({
    xAxis:{
        show:true,
        type:'category',
        axisLabel:{
          color: '#ffffff'
        },
        axisLine:{
            lineStyle:{
                color:'white'
            }

        },
        boundaryGap:false,//坐标轴两边留白策略,默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
        data:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis:{
        show:true,
        type:'value',
        axisLabel: {
            color:'#FFF'
        },
        splitLine:{
            show:false,//去除网格线
        },
    },
    tooltip:{//提示框
        trigger:'item'
    },
    series:[{
        type:'line',
        data:[820, 932, 901, 934, 690, 1330, 320],
        areaStyle:{
            normal:{
                color:'#6fa19f'//修改折线区域的颜色
            }

        },
        symbolSize:8,//改变折线点的大小
        itemStyle:{
            normal:{
                color:'#39768E',//改变折线点的颜色
                symbolSize:100,
                lineStyle:{
                    color:'#39768E'//修改折线的颜色
                }
            }
        },
        smooth:true,//把线变成曲线
    }]
});


var charttwo=echarts.init(document.getElementById('charttwo'));
charttwo.setOption({
    color:['#DE8C31','#653ED1','#223052'],//legend颜色和自定义颜色一样
    xAxis: {
        type:'category',
        boundaryGap:false,
        data:['周一','周二','周三','周四','周五','周六','周日'],
        axisLabel:{
            color:'#fff'
        },
    },
    yAxis: {
        type:'value',
        axisLabel:{
          color:'#fff'
        },
        splitLine:{
            show:false
        }
    },
    tooltip:{
      trigger: 'axis',
      axisPointer:{//坐标轴当前刻度，两条相交直线，鼠标悬浮会显示xy对应的值
        type:'cross',
          label:{
            backgroundColor:'#6a7985'
          }
      }
    },
    legend:{
        data:['视频广告','直接访问','搜索引擎'],
        icon:'roundRect',//图例形状
        textStyle:{//图例文字的颜色
            color:'#ffffff'
        },
        right:'14%',//靠右显示
    },
    series:[
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {
                normal:{
                    color:'#DECAB0'
                }
            },
            itemStyle:{
              normal:{
                  lineStyle:{
                      color:'#DE8C31'
                  }
              }
            },
            data:[150, 232, 201, 154, 190, 330, 410],
            smooth:true
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {
                color:'#A0AED1'
                }},
            itemStyle:{
              normal:{
                  lineStyle:{
                      color:'#653ED1'
                  }
              }
            },
            data:[320, 332, 301, 334, 390, 330, 320],
            smooth:true
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {
                color:'#364B52'
                }},
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#223052'
                    }
                }
            },
            data:[820, 932, 901, 934, 1290, 1330, 1320],
            smooth:true

        },

    ]
});