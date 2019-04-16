function play(e) {
    //动态获取按键绑定的li和audio
    let key=document.querySelector(`li[data-key='${e.keyCode}']`);
    let audio=document.querySelector(`audio[data-key='${e.keyCode}']`);
    if(!audio)return;
    if(!key)return;
    $(key).addClass('playing');
    //重置音频时间
    audio.currentTime=0;
    audio.play();
}
function remove(e){
    if (e.propertyName !== 'transform') return;
    let target=e.target;
    $(target).removeClass('playing')
}
let keys=document.querySelectorAll('.key');
//transitionened 的事件，它在 CSS transition 结束后会被触发,结束时去除playing类名
keys.forEach(item=> item.addEventListener('transitionend',remove)
);
//按键监听，监听页面的keydown事件，触发play函数
window.addEventListener('keydown',play);