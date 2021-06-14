
    const inp1=document.getElementById('h1');
    const inp2=document.getElementById('h2');
    const inp3=document.getElementById('h3');
    const inp4=document.getElementById('h4');
    const inp5=document.getElementById('h5');
    const gen=document.getElementById('gen');
    gen.onclick=function(){
        let src=inp1.value;
        let alt=inp2.value;
        let width=inp3.value;
        let height=inp4.value;
        let res=`<img src="${src}" alt="${alt}" width="${width}" height="${height}">`
        inp5.value=res;
    }
