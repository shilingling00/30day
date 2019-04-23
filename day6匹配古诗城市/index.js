let url='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cityes=[];
let search=document.querySelector('.search');
let list=document.querySelector('.list');
search.addEventListener('change',filtermatch);
search.addEventListener('keyup',filtermatch);

//fetch请求获取数据
fetch(url)
    .then(response=>{
        if(response.ok){
            return response.json();
        }else {
           return Promise.reject({
               status:response.status,
               statusText:response.responseText,
           })
        }
    })
    .then(data=>{
        cityes.push(...data);
        console.log(cityes);
    })
    .catch(e=>{
        console.log({'status':e.status,'text':e.statusText})
    });

//防抖函数
function debounce(func,wait) {
    let timeout;
    return function () {
        let _this=this;
        let arg=arguments;
        clearTimeout(timeout);
        timeout=setTimeout(func.bind(_this,arg),wait)
    }
}

//根据输入的内容查找
function filtermatch() {
    if(this.value){
        let reg=new RegExp(this.value,'ig');
        let match=cityes.filter(item=>{
            return reg.test(item.city)||reg.test(item.state)
        });
        if(match.length>0){
            render(match)
        }else {
            list.innerHTML=`<li>抱歉，没有查找到匹配项！</li>`;
        }

    }else {
        list.innerHTML=`
            <li>Filter by a city</li>
            <li>or a state</li>
        `
    }
}

//将查找出来的内容渲染出来
function render(match) {
    let frag=document.createDocumentFragment();//创建一个文档碎片，减少dom回流重绘
    match.forEach(item=>{
        let li=document.createElement('li');
        let p=document.createElement('p');
        let reg=new RegExp(search.value,'ig');
        //将匹配到的关键词用带样式的形式进行替换。
        let city=item.city.replace(reg,`<span style="color: green">${search.value}</span>`);
        let state=item.state.replace(reg,`<span style="color:green">${search.value}</span>`);
        li.innerHTML=city;
        p.innerHTML=state;
        li.appendChild(p);
        frag.appendChild(li);
    })
    list.innerHTML='';
    list.appendChild(frag);
}