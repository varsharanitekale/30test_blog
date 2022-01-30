const inputval=document.getElementById("title1");
const textarea=document.getElementById("textarea");
const addvalue=document.getElementById("addbtn");
const del= document.getElementById("delete");
const update=document.getElementById("update");

const blog=document.querySelector(".blog");
addvalue.addEventListener('click', ()=>{
    const getval=inputval.value;
    const getval1=textarea.value;
    let h3= document.createElement("h3");
    let p= document.createElement("h3");
    p.innerHTML=getval1;
    p.style.marginLeft="250px";


    h3.style.marginLeft="200px";
    h3.innerHTML=getval;
    blog.appendChild(h3);
    blog.appendChild(p);
    window.localStorage.setItem("Title", getval);
    window.localStorage.getItem("Title");
    window.localStorage.setItem("content", getval1);
    window.localStorage.getItem("content");



    
});
