function space() {
    var spacing=document.querySelector('#spacing');
    console.log(spacing.value);
    document.body.style.setProperty('--spacing', spacing.value+'px');//setProperty() 方法用于设置一个新的 CSS 属性，同时也可以修改 CSS 声明块中已存在的属性。
}
function blurs() {
    console.log(1);
    var blur=document.querySelector('#blurs');
    console.log(blur);
    console.log(blur.value);
    document.body.style.setProperty('--blur',blur.value+'px')
}
function color() {
    var base=document.querySelector('#base');
    document.body.style.setProperty('--basecolor',base.value)
}