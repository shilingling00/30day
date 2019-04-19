let list=document.querySelectorAll('.item');
console.log(list);
list.forEach(item=>{
    item.addEventListener('click',open)
});
list.forEach(item=>{
    item.addEventListener('transitionend',openactive)
})

function open() {
    this.classList.toggle('open');
    //classList 属性返回元素的类名，作为 DOMTokenList 对象。
    // 该属性用于在元素中添加，移除及切换 CSS 类。
}
function openactive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('openactive');
    }
}