let lis=[...document.querySelectorAll('li')];
let  button=document.getElementsByTagName('button')[0];
let input=document.getElementsByTagName('input')[0];
button.addEventListener('click',totalTime);

lis.forEach(item=>{
    let datatime=item.dataset.time;
    item.innerHTML=item.innerHTML+'--------时长'+datatime;
});

function totalTime() {
    let sum=lis.reduce((cal,item)=>{
        let datatime=item.dataset.time;
        //数组的解构赋值。这里是将时和秒数进行切割形成新的数组，然后对数组中的每一项用parseFloat()进行字符串转换为数值，然后进行解构赋值，例如：[mins,seconds]=[03,58];这里将03赋值给mins,将58赋值给seconds.
        let [mins,seconds]=datatime.split(":").map(item=>parseFloat(item));//split把一个字符串按照指定字符分割成字符串数组。
        return  cal+(mins*60+seconds);
    },0);// 0作为第一次调用 callback 的第一个参数。
    console.log(sum);
    input.value=Math.floor(sum/3600)+'小时'+Math.floor(sum%3600/60)+'分钟'+Math.floor(sum%60)+'秒';
}

