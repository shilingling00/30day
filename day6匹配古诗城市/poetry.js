let url='https://gist.githubusercontent.com/liyuechun/f00bb31fb8f46ee0a283a4d182f691b4/raw/3ea4b427917048cdc596b38b67b5ed664605b76d/TangPoetry.json';
let poetry=[];
let search=document.querySelector('.search');
let list=document.querySelector('.list');
//fetch请求获取数据,存入poetry中
fetch(url)
    .then(response=>{
        if(response.ok){
            return response.json();
        }else{
            return Promise.reject({
                status:response.status,
                statusText:response.statusText
            })
        }

    })
    .then(data=>{
        poetry.push(...data);
        console.log(poetry);
    })
    .catch(e=>{
        console.log({'status':e.status,'text':e.statusText})
    });

//防抖函数
function debounce(fun,wait) {
    let time;
    return function () {
        let _this=this;
        let arg=arguments;
        clearTimeout(time);
        time=setTimeout(fun.bind(_this,arg),wait)
    }
}

//根据input框输入内容查找
function filtermatch() {
    if(this.value){
        let reg=new RegExp(this.value,'ig');
        let match=poetry.filter(item=>{
            return reg.test(item.title)||reg.test(item.detail_author)||reg.test(item.detail_text);
        });
        console.log(match);
        if(match.length>0){//查找出来的个数大于0，就执行render函数
            render(match)
        }else {
            list.innerHTML='';
            list.innerHTML=`
                    <li>抱歉，没有查找到匹配项！</li>
            `
        }
    }else {
        list.innerHTML=`
                        <li>输入诗人名字</li>
                        <li>输入关键字，找一首诗</li>
        `
    }
}

//根据拿到的数据进行渲染，并让字体高亮
function render(match) {
    let frag=document.createDocumentFragment();
    match.forEach(item=>{
        let li=document.createElement('li');
        let p=document.createElement('p');
        let reg=new RegExp(search.value,'ig');
        //将匹配到的关键词用带样式的形式进行替换。
        let text=item.detail_text.replace(reg,`<span style="color:green">${search.value}</span>`);
        let author=item.detail_author[0].replace(reg,`<span style="color: green">${search.value}</span>`);//detail_author是
        let title=item.title.replace(reg,`<span>${search.value}</span>`);
        li.innerHTML=text;
        p.innerHTML=title+'-'+author;
        li.appendChild(p);
        frag.appendChild(li);
    });
    list.innerHTML='';
    list.appendChild(frag);
};

//input框监听事件
search.addEventListener('change',debounce(filtermatch,500));
search.addEventListener('keyup',debounce(filtermatch,500));