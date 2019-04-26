let video_view=document.getElementsByClassName('video_view')[0];//获取video元素
let stop=document.getElementsByClassName('stop')[0];//获取暂时播放按钮
let volume=document.getElementsByClassName('volume')[0];//获取音量进度条
let speed=document.getElementsByClassName('speed')[0];//获取播放速度进度条
let ranges=Array.from(document.querySelectorAll('input[type=range]'));
let step=Array.from(document.querySelectorAll('[data-step]'));//获取快进快退按钮
let progress_box=document.getElementsByClassName('progress')[0];
let progress_filed=document.getElementsByClassName('progress_filed')[0];//获取进度条

video_view.addEventListener('click',play);//video标签监听点击事件，播放暂停
stop.addEventListener('click',play);//播放暂停按钮监听点击事件，控制视频播放
video_view.addEventListener('play',icon);
video_view.addEventListener('pause',icon);//video的播放暂停控制图标的改变
video_view.addEventListener('timeupdate',progress);//进度条变化
progress_box.addEventListener('click',drag);//拖动进度条
progress_box.addEventListener('mousedown',()=>{flag=true});
progress_box.addEventListener('mouseup',()=>{flag=false});
progress_box.addEventListener('mousemove',mousehandle);
ranges.forEach(item=>{
    item.addEventListener('change',rangechange)
})
function play() {//播放视频
    video_view.paused?video_view.play():video_view.pause();
    //使用video的play()方法播放视频，pause()暂停视频，paused方法判断视频是否播放
};
function icon() {//改变图标
    stop.textContent=video_view.paused?'►':'II';
};
step.forEach(item=>{
   item.addEventListener('click',skip);
});
function skip() {//快进快退
    video_view.currentTime+=(+this.dataset.step);
    //video 有一个属性叫 currentTime，可以用来设置视频当前的时间
}
function progress() {//进度条
    progress_filed.style.flexBasis=((video_view.currentTime/video_view.duration)*100).toFixed(2)+'%';
}
function drag(e) {//拖动进度条
    video_view.currentTime=(e.offsetX/progress_box.offsetWidth)*video_view.duration;
}
let flag=false;
function mousehandle(e) {
    if(flag){
        drag(e)
    }
}
function rangechange() {
    video_view[this.name]=this.value;
}