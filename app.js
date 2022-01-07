let hour=document.querySelector('#hour');
let minute=document.querySelector('#minute');
let second=document.querySelector('#second');

let start=document.querySelector('#start');
let stopt=document.querySelector('#stop');
let reset=document.querySelector('#reset');

let s=0;
let s2=0;
let m=0;
let m2=0;
let h=0;
let h2=0;




start.addEventListener("click" , Timer);


function Timer(){

     
    var starttimer=setInterval(StartTimer , 999);

    reset.addEventListener("click" , function(){
        hour.innerHTML="0";
        minute.innerHTML="00";
        second.innerHTML="00";
        s=0; s2=0; m=0; m2=0; h=0; h2=0;
        clearInterval(starttimer);
    });
    
stopt.addEventListener("click" , StopTimer);

function StopTimer(){
   clearInterval(starttimer);
}
    function StartTimer(){

        second.innerHTML=String(s2)+s;
        s++;
        if(s==11){
            s=0;
            s2++;
            second.innerHTML=String(s2)+s;
            if(s2==6){
                s2=0;
                m++;
               minute.innerHTML=String(m2)+m;
               
               if(m==11){
                   m=0;
                   m2++;
                   minute.innerHTML=String(m2)+m;
                   if(m2==6){
                       m2=0;
                       h++;
                   }
               }
            }
        }
    }
};
