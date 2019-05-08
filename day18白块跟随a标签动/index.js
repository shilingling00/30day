let a=[...document.querySelectorAll('a')];
a.forEach(item=>{
    item.addEventListener('mouseenter',hightlight)
});
//创建一个一个span 元素
let Span=document.createElement('span');
Span.setAttribute('class','light');
document.body.appendChild(Span);

function hightlight(e) {
    let rect=this.getBoundingClientRect();//返回元素的大小及其相对于视口的位置。
    console.log(rect);
    let rects={
        width:rect.width,
        height:rect.height,
        top:rect.top+window.scrollY,
        left:rect.left+window.scrollX
    };
    Span.style.cssText+=`width:${rects.width}px;height:${rects.height}px;top:${rects.top}px;left:${rects.left}px;display:block`;// 采用cssText写法片段式样式改变，可以减少回流和重绘，
}

//监听窗口大小的变化，隐藏span元素，防止窗口大小变化，而span位置不移动
window.onresize=function () {
    location.reload();//用于重新加载当前文档
    Span.style.display='none';
};