let inp=document.querySelector("input");
let div=document.querySelector("div");
inp.addEventListener("input",function(){
    console.log(inp.value);
    div.innerHTML=inp.value;

})