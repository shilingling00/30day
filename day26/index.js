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
        axisLine:{//坐标轴轴线
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
                //symbolSize:100,
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

var chartthree=echarts.init(document.getElementById('chartthree'));
chartthree.setOption({
    legend:{
       // orient:'vertical',
        x:'left',
        data:['联盟广告','视频广告','搜索引擎'],
        textStyle:{//图例字体颜色
            color:'#fff'
        }
    },
    tooltip:{
      trigger:'item',
        formatter:'{a}<br/>{b}:{c}({d}%)'//{a}（系列名称,series中的name），{b}（数据项名称），{c}（数值）, {d}（百分比）
    },
    series:[
        {
            name:'访问来源',
            type:'pie',
            radius:['50%','70%'],//环形饼状图
            color:['#FF973C','#5494FF','#06901A'],
            avoidLabelOverlap:false,//文字在环形内部居中，强制所有标签放在中心位置
            label:{
                normal:{//文本标签在环形内部显示
                    show:false,
                    position:'center',
                },
                emphasis:{//设置标签样式
                    show:true,//文字是否显示
                    textStyle: {
                        fontSize:'15',
                        fontWeight:'bold'
                    }
                }

            },
            data:[

                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:548, name:'搜索引擎'}
            ]
        }
    ]
});

var chartfour=echarts.init(document.getElementById('chartfour'));
chartfour.setOption({
   xAxis:{
       show:true,
       type:'category',
       data:['00:00','01:00','02:00','03:00','04:00','05:00'],
       axisLabel:{//x轴字体颜色
           color:'#fff',
       },
       boundaryGap:false,//不留白
        axisLine: {//坐标轴轴线
           lineStyle:{
               color:'#fff'
           }
        }
   },
   yAxis:{
       type:'value',
       axisLabel:{
           color:'#fff'
       },
       axisLine:{
           lineStyle:{
               color:'#fff',
           }
       },
       max:10000,
       min:0,
       splitNumber:5,//设置y轴间隔
   },
    color:['#0409fb','#73727A'],
    legend:{
       data:['视频广告','邮件营销'],
        icon: 'roundRect',
        textStyle:{
           color:"#fff",
        },
        right:'14%',
    },
    tooltip:{
       trigger:'axis',
    },
    series:[
        {
            name:'视频广告',
            type:'line',
            data:[1200, 2320, 2906, 3340, 3980, 4230],
            smooth:true,
            areaStyle:{//   区域的样式
                normal:{
                    color:'#4C6DFB'
                }
            },
            itemStyle:{
                normal:{
                    color:'#0409fb',
                    lineStyle:{//线条颜色
                        color:'#0409fb'
                    }
                }
            },
            symbolSize:8,
        },
        {
            name:'邮件营销',
            type:'line',
            data:[1500, 2820, 3901, 4840, 6900, 7230],
            smooth:true,
            areaStyle:{
                normal:{
                    color:'#A5A0AE'
                }
            },
            itemStyle:{
                normal:{
                    color:'#73727A',
                    lineStyle:{
                        color:'#73727A'
                    }
                }
            },
            symbolSize:8,
        }

    ]

});

var chartfive=echarts.init(document.getElementById('chartfive'));
chartfive.setOption({
    xAxis:{
        type:'value',
        axisLine:{//坐标轴轴线
            lineStyle:{
                color:'#fff'
            }
        }
    },
    tooltip:{
      trigger:'axis',
        axisPointer:{
          type:'shadow'//坐标轴指示器，默认为直线
        }
    },
    legend:{
      data:['利润','收入','支出'],
      textStyle:{//图例文字颜色
          color:'#fff',
      }
    },
    yAxis:{
        type:'category',
        data:['周一','周二','周三','周四','周五','周六','周日'],
        axisLabel:{
            color:'#fff',
        },
        axisLine:{
          lineStyle:{
              color:'#fff'
          }
        },
        axisTick:{
            show:false
        }
    },
    grid: {//网格位置
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true//区域是否包含坐标轴的刻度标签。
    },
    series:[
        {
            name:'利润',
            type:'bar',
            label:{//柱形条上文本
              normal:{
                  show:true,
                  position: 'inside'
              }
            },
            data:[200, 170, 240, 244, 200, 220, 210]
        },
        {
            name:'收入',
            type:'bar',
            stack:'总量',//数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加。
            label:{
              normal:{
                  show:true
              }
            },
            data:[320, 302, 341, 374, 390, 450, 420]
        },
        {
            name:'支出',
            type:'bar',
            stack:'总量',
            label:{
              normal:{
                  show:true,
                  position:'left'
              }
            },
            data:[-120, -132, -101, -134, -190, -230, -210]
        }
    ]
});