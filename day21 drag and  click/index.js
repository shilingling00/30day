let item=document.querySelector('.items');
let isdown=false;
let startX;
let scrollLeft;
item.addEventListener('mousedown',function f(e) {
    isdown=true;
    item.classList.add('active');

    startX=e.pageX-item.offsetLeft;
    scrollLeft=item.scrollLeft;
});
item.addEventListener('mouseleave',function () {
    isdown=false;
    this.classList.remove('active');
});
item.addEventListener('mouseup',function () {
    isdown=false;
    this.classList.remove('active')
});
item.addEventListener('mousemove',function (e) {
   if(!isdown) return;
    console.log(item.offsetLeft);
   let x=e.pageX-item.offsetLeft;
    let walk=(x-startX)*3;
    item.scrollLeft=scrollLeft-walk;
});