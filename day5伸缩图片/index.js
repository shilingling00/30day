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
}
function openactive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('openactive');
    }
}