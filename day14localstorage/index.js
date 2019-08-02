let list=document.getElementsByClassName('list')[0];
let additem=document.getElementsByClassName('additem')[0];
let button=document.getElementsByClassName('button')[0];
let items=JSON.parse(localStorage.getItem('item'))||[];
additem.addEventListener('submit',add);
list.addEventListener('click',toggledone);
button.addEventListener('click',dobutton);
//将添加的内容存到localstorage中
function add(e) {
    e.preventDefault();
    let text=this.querySelector('[name=add]').value;
    let item={
        text,
        done:false
    };
    items.push(item);
    localStorage.setItem('item',JSON.stringify(items));
    addhtml(items,list);
    this.reset();//reset() 方法可把表单中的元素重置为它们的默认值。
}
//渲染页面
function addhtml(items=[],list) {
    let lis='';
    items.forEach((item,index)=>{
        lis+=`
           <li>
                 <input type="checkbox" id=item${index} data-index=${index} ${item.done ? 'checked' : ''}>
            <label for="item${index}">${(item.text)}</label>
            </li>
           
        `
    });
    list.innerHTML=lis
}

//图标的切换
function toggledone(e){
    if (!e.target.matches('input')) return; // 跳过所有的input，只处理label
    let target=e.target;
    console.log(target);
    let i=target.dataset.index;
    console.log(i);
    items[i].done = !items[i].done;
    localStorage.setItem('item',JSON.stringify(items));
    addhtml(items,list)
}

//三个按钮
function dobutton(e) {
    let action=e.target.dataset.action;
    switch (action) {
        case 'clear':
            items=[];
            break;
        case 'check':
            items.map(item=>{
                return item.done=true;
            });
            break;
        case 'uncheck':
            items.map(item=>{
                return item.done=false;
            });
            break;
        default:
            return;
    }
    localStorage.setItem('item',JSON.stringify(items));
    addhtml(items,list)
}
addhtml(items,list);

// 在关闭浏览器之后清除缓存
// window.onbeforeunload=function (e) {
//     localStorage.removeItem('item');
//
// }