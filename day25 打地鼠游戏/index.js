//获取地洞，地鼠，分数
let hole=document.querySelectorAll('.hole');
let mole=Array.from(document.getElementsByClassName('mole'));
let scoreshow=document.getElementsByClassName('score')[0];
let status=document.getElementsByClassName('game_status')[0];
let lasthole;//用于存储上一次的地洞，主要和下一次做对比
let timeup=false;//判断时间有没有结束
let score=0;//记录得分
mole.forEach(item=>{item.addEventListener('click',bonk)});
function bonk(e) {
    if(!e.isTrusted)return;//isTrusted 只读属性为一个布尔值，若事件物件是由使用者操作而产生，则 isTrusted 值为 true。若事件物件是由程式码所建立、修改，或是透过 EventTarget.dispatchEvent() 来触发，则isTrusted 值为 false。
    score++;
    this.parentNode.classList.add('up');//隐藏地鼠
    scoreshow.innerHTML=score;//更新分数
}

function startgame() {
    scoreshow.innerHTML=0;
    timeup=false;
    score=0;
    status.innerHTML='Get em!';
    peep();
    setTimeout(()=>{
        timeup=true;
        status.innerHTML='GAME OVER';
    },10000);//设置倒计时
}
//随机选出一个地洞，用于弹出地鼠
function randomtime(min,max) {
    return Math.round(Math.random()*(max-min)+min)
}
//随机弹出一个洞
function randomhole(hole) {
    let i=Math.floor(Math.random()*hole.length);
    let h=hole[i];
    if(h==lasthole){
        console.log('Ah nah thats the same one bud');
        return randomhole(hole);
    }
    lasthole=h;
    return h;
}
function peep() {
    //产生一个随机数，用来设置当前地鼠什么时候消失
    let time=randomtime(300,1000);
    //产生一个随机洞
    let holes=randomhole(hole);
    holes.classList.add('up');
    setTimeout(function () {
        holes.classList.remove('up');
        if(!timeup){
            peep();
        }
    },time)
}