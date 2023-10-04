// printing 100 para
let t1=performance.now();
for(let i=0;i<100;i++)
{
    let para=document.createElement('p');
    para.textContent='this is para'+i;
    document.body.appendChild(para);
   
}
let t2=performance.now();
console.log(t2-t1);

//optimising a bit
let t3=performance.now();
let mydiv=document.createElement('div');

for(let i=1;i<=100;i++)
{
    let element=document.createElement('p');
    element.textContent='this is para'+i;
    mydiv.appendChild(element);
}
document.body.appendChild(mydiv);
let t4=performance.now();
console.log(t4-t3);

// document fragment it is light weight document object and in this reflow repaint nhi hota
let fragment=document.createDocumentFragment();
for(let i=0;i<100;i++)
{
    let para=document.createElement('p');
    para.textContent='this is para'+i;
    fragment.appendChild(para);
}
document.body.appendChild(fragment);//1 reflow ,1 repaint;


// Asynchronous code always use js event loop 
setTimeout(function(){
    console.log("hello everyone");
},5000);