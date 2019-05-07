const hero = document.querySelector('.content');
const text = hero.querySelector('.text');
const walk = 90;  // 鼠标左右移动共移动的距离

function draw(e){
    const { offsetWidth: width, offsetHeight: height} = hero;
    let { offsetX: x, offsetY: y} = e;

    // 使鼠标移动到中间元素上，x、y的值连续变化
    if(e.target !== this){
        // if(e.target == text){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    // const xaisx = (x/width*walk)-(walk/2);
    // const yaisx = (y/height*walk)-(walk/2);
    const xaisx = Math.floor((x/width*walk)-(walk/2));
    const yaisx = Math.floor((y/height*walk)-(walk/2));
    text.style.textShadow = `
    ${xaisx}px ${yaisx * -1}px 2px rgba(0,255,0,0.7),
    ${xaisx * -1}px ${yaisx}px 2px rgba(255,0,0,0.7),
    ${yaisx}px ${xaisx * -1}px 2px rgba(188,188,188,0.7),
    ${yaisx * -1}px ${xaisx}px 2px rgba(0,0,255,0.7)      
    `; // 多写几个就有了霓虹灯的效果
}
hero.addEventListener('mousemove',draw);