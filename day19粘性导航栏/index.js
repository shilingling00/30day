let navs=document.getElementById('main');
let tops=navs.offsetTop;

window.onscroll=function () {
    if(window.scrollY>=tops){//滚动的高度大于导航栏的offsettop
        console.log(1);
        document.body.style.paddingTop = `${navs.offsetHeight}px`;
        document.body.classList.add('fixnav')
    }else {
        document.body.style.paddingTop =0
        document.body.classList.remove('fixnav')
    }
};