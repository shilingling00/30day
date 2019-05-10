let nav=document.querySelector('.top');
let lis=document.querySelectorAll('.navlist>li');
let arrow=document.querySelector('.arrowbox');
lis.forEach(item=>{
    item.addEventListener('mouseenter',enter)
});
lis.forEach(item=>{
    item.addEventListener('mouseleave',leave)
})
function enter() {
    this.classList.add('enter');
    setTimeout(()=>{
        this.classList.contains('enter')&&this.classList.add('enter-active')
    },150);
    arrow.classList.add('open');
    let drop=this.querySelector('.drop');
    let droprect=drop.getBoundingClientRect();
    let navrect=nav.getBoundingClientRect();
    let rects={
        width:droprect.width,
        height:droprect.height,
        left:droprect.left,
        top:droprect.top-navrect.top
    };
    arrow.style.cssText=`width:${rects.width}px;height:${rects.height}px;top:${rects.top}px;left:${rects.left}px`

}
function leave() {
    this.classList.remove('enter','enter-active');
    arrow.classList.remove('open')

}