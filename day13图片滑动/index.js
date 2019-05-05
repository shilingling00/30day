let imgs=Array.from(document.getElementsByTagName('img'));
window.addEventListener('scroll',throttle(handle,100));

//节流函数
function throttle(func,wait) {
    let timeflag;
    return function () {
        let content=this;
        let arg=arguments;
        if(!timeflag){
            timeflag=setTimeout(function () {
                timeflag=null;
                func.apply(content,arg)
            },wait)
        }
    }
}
function handle() {
    imgs.forEach(item=>{
        let imghalf=(window.scrollY+window.innerHeight)>item.offsetTop+item.height/2;//说明图片一半露出来了
        let imgall=window.scrollY<item.offsetTop+item.height;//图片没有完全滑入顶部
        if(imghalf&&imgall){
            item.classList.add('active')
        }else {
            item.classList.remove('active')
        }
    })
}