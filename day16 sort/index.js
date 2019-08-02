let music=document.getElementsByClassName(' music')[0];
console.log(music);
var bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled',
    'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
    'Anywhere But Here', 'An Old Dog'
];
//渲染页面
function gethtml(bands,music){
    let lis='';
    bands.forEach(item=>{
        lis+=`<li>${item}</li>`
    });
    music.innerHTML=lis;

}
gethtml(bands,music);

let span=[...document.getElementsByTagName('span')];
console.log(span);
//两个按钮监听点击事件
span.forEach(item=>{
    item.addEventListener('click',sortmusic)
});

function trimblank(item) {
    return item.replace(/^(a|an|the)\s{1}/ig,'');//代表如果字符串前面包涵a 或者an 或者the 中的一个，将其替换成'',trim()代表将新字符串两边的空格去掉。
}

//排序
function sortmusic(e) {
    let  action=this.dataset.action;
    console.log(action);
    if(action=='up'){
        console.log(1);
        bands.sort((a,b)=>{
            return trimblank(a)>trimblank(b)?1:-1
        })
    }else {
        bands.sort((a,b)=>{
            return trimblank(a)>trimblank(b)?-1:1
        })
    };
    gethtml(bands,music);
}