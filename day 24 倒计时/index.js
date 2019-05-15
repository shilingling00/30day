(function () {
    let counttime=document.getElementsByClassName('show_counttime')[0];
    let endtime=document.getElementsByClassName('show_endtime')[0];
    let buttons=Array.from(document.getElementsByTagName('button'));
    let input=document.getElementsByClassName('input_box')[0];
    let inputs=document.getElementsByClassName('enter')[0];
    buttons.forEach(item=>{item.addEventListener('click',start)});
    let displayintereval;
    function start(e) {
        e.preventDefault();
        timer(this.dataset.time)
    }

    function timer(seconds) {
        clearInterval(displayintereval);
        let endtime=Date.now()+seconds*1000;//Date.now() 方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。
        count(seconds);
        end(endtime);

        displayintereval=setInterval(function () {
            let countt=Math.round((endtime-Date.now())/1000);
            if(countt<0){
                clearInterval(displayintereval)
            }else {
                count(countt);
            }
        },1000)
    }

    function count(seconds) {//倒计时时间
        let minute=Math.floor(seconds/60);
        let sec=seconds%60;
        sec=sec<10?'0'+sec:sec;
        counttime.innerHTML=`${minute}:${sec}`
    }

    function end(endt) {//倒计时到达的时间
        let _end=new Date(endt);
        let hours=_end.getHours();
        let endminute=_end.getMinutes();
        endminute=endminute<10?'0'+endminute:endminute;
        endtime.innerHTML=`${hours}:${endminute}`
    }

    input.addEventListener('submit',function (e) {
        e.preventDefault();
        timer(inputs.value*60);
        this.reset();
        inputs.blur();//blur() 方法用于从单选按钮上移开焦点。
    })
})();