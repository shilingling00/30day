let checkbox=document.querySelectorAll('.checkbox input[type="checkbox"]');
let box=Array.from(checkbox);//将累数组转化为数组
box.forEach(item=>{//监听click事件
    item.addEventListener('click',choose)
});
let lastinput;//按下shift前的元素
let onoff;//按下shift前input选中的状态
function choose(e) {
    if(e.shiftKey){
        let second=box.indexOf(this);//获取按下shift后选中的那个input的index值
        let first=box.indexOf(lastinput);//获取在按shift之前input的index值
        let action=box.slice(Math.min(second,first),Math.max(second,first));//截取按shift前后元素索引,通过math函数确定大小，保证正反都能进行多选
        action.forEach(item=>{
            item.checked=onoff
        })
        console.log(second,first,action);
    }
    lastinput=this;
    onoff=lastinput.checked?true:false;
    console.log(lastinput,onoff);
}