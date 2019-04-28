$('.content').on('keyup', debounce(code,300));
//防抖函数
//防抖的主要思路：用一个函数对回调函数和等待时间进行包装，这个包装函数需要在等待时间到达后返回这个回调函数，这里可以使用setTimeout函数实现，需要注意的是需要设置一个时间变量来保存定时器，在wait等待时间之内再次触发监听事件，说明上一个的定时器还存在，需要将它清除。这里的防抖代码解决了this指向和event队象的问题，
function debounce(func,wait) {
    let timeflag;
    return function () {
        clearTimeout(timeflag);
        let _this=this;
        let arg=arguments;
        timeflag=setTimeout(func.bind(_this,arg),wait)
    }
}
function code() {
    $('.content').val($('.content').val().slice(-5));
    $('.showcode').html($('.content').val().slice(-4));
    let reg=/love/img;
    if(reg.test($('.showcode').html())){
        console.log(1);
        cornify_add()
    }
}