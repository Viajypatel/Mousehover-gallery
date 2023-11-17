const throttleFunction=(func, delay)=>{ 
  let prev = 0; 
  return (...args) => {
    let now = new Date().getTime(); 
    console.log(now-prev, delay);   
    if(now - prev> delay){ 
      prev = now;
      return func(...args);  
    }
  }    
}
var centerr=document.querySelector("#centerr");
centerr.addEventListener("mousemove", throttleFunction((event)=>{
    var div=document.createElement("div");
    div.classList.add("imagediv");
    

    var img=document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    div.appendChild(img);
    div.style.left=event.clientX + "px";   
    div.style.top=event.clientY + "px";  
    document.body.appendChild(div);
    gsap.to(".imagediv img",{
        top:"0px",
        ease:"power3",
        duration:1,
    });
    setTimeout(function(){
        div.remove();
    },2000);
},200));

