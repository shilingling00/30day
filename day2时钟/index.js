function rotate() {
    //获取时针，分针，秒针元素
    var hour_hand=document.getElementsByClassName('hour_hand')[0];
    var minute_hand=document.getElementsByClassName('minute_hand')[0];
    var second_hand=document.getElementsByClassName('second_hand')[0];

    function updatae() {
        var now=new Date();
        //获取当前时间的秒，分，时
        var seconds=now.getSeconds();
        var minute=now.getMinutes();
        var hour=now.getHours();
        console.log(seconds,minute,hour);

        //获取秒，分，时针旋转的角度
        var seconddeg=seconds*6;
        var minutedeg=minute*6+(seconds/60)*6;//分钟数*6+（秒钟数/60）*6  不够一分钟时分针的偏移
        var hourdeg=(hour-12)*30+(minute/60)*30;//一小时时针移动30度

        //设置旋转的角度
        if (seconddeg === 0) {
            second_hand.style.transition = 'all 0s';
        } else {
            second_hand.style.transition = 'all 0.05s';
        }
        second_hand.style.transform=`rotate(${seconddeg}deg)`;
        minute_hand.style.transform=`rotate(${minutedeg}deg)`;
        hour_hand.style.transform=`rotate(${hourdeg}deg)`;
    }
    setInterval(updatae,1000);
    updatae();
}
rotate()