let bod=document.querySelector("body");
let btn=document.querySelector(".emp");
let pname=document.querySelector(".profilename");
let pabout=document.querySelector(".profileabout");
let bio=document.querySelector(".aty");



if(localStorage.getItem('bodColor')==='white'){
    bod.style.backgroundColor="white";
    pname.style.color="black";
    pabout.style.color="black";
    btn.style.color="black";
    btn.innerHTML=("DARK");
    bio.style.color="black";
    }
else{
    bod.style.backgroundColor="black";
    pname.style.color="white";
    pabout.style.color="white";
    bio.style.color="white";
    btn.style.color="white";
    btn.innerHTML=("LIGHT");
    localStorage.setItem('bodColor','black');
}

btn.addEventListener("click",()=>{
if (bod.style.backgroundColor==="black"){
    bod.style.backgroundColor="white";
    pname.style.color="black";
   pabout.style.color="black"; 
    bio.style.color="black";
    btn.style.color="black";
    btn.innerHTML=("DARK");
    localStorage.setItem('bodColor','white');
}
else{
    bod.style.backgroundColor="black";
    pname.style.color="white";
    pabout.style.color="white";
    bio.style.color="white";
    btn.style.color="white";
    btn.innerHTML=("LIGHT");
    localStorage.setItem('bodColor','black');
}
});

let cv=document.querySelector(".profilecvbtn");
cv.addEventListener("click",()=>{
    alert("NO CV ADDED");
});
