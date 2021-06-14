
    let inp1=document.getElementById('h1');
    let inp2=document.getElementById('h2');
    let inp3=document.getElementById('h3');
    let inp4=document.getElementById('h4');
    let gen=document.getElementById('gen');
    gen.onclick=function(){
        let tp=inp1.value;
        let txt=inp2.value;
        let res=`<h${tp}>${txt}</h${tp}>`;
        inp3.value=res;
    }