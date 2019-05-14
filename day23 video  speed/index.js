let speed=document.getElementsByClassName('speed')[0];
let bar=document.getElementsByClassName('speed_bar')[0];
let video=document.getElementsByTagName('video')[0];
speed.addEventListener('mousemove',move);
function move(e) {
    let y=e.pageY-this.offsetTop;//鼠标早滚动条上移动的距离
    let percent=y/this.offsetHeight;//移动的距离占总长度的多少
    let height=Math.round(percent*100)+'%';//移动的距离占总长度的百分比
    bar.style.height=height;//设置进度条的长度
    let min=0.4,max=4;//设置最大最小值
    let rate=percent*(max-min)+min;
    bar.textContent=rate.toFixed(2)+'X';//设置滚动条数字
    video.playbackRate=rate;//设置视频播放的速度
    //video的playbackRate属性以改变播放速率
}