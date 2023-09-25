const display=document.getElementById("display");
let  buttons = Array.from(document.getElementsByClassName("buttons"));
const numbers=document.querySelector("#numbers");
const del=document.getElementById("#del");
const  clear=document.querySelector("#clear");
const equal=document.getElementById("equal");
let setColors=[
{backg:`"\"yellow\""` ,
color:`"\"black\""`},
{backg:`"\"blue\""`, 
color:`"\"yellow\""`},
{backg:`"\"green\""`,
color:`"\"blue\""`},
{backg:`"\"purple\""` ,
color:`"\"white\""`}
]

let complements=["AWSOME","COOL BRAH","AMAZING","NOMA!!","KALI","EISH SAWAA!!"];
const setComplements=document.getElementById("complement");





buttons.map(button =>{
    button.addEventListener("click", (e)=>{
        switch(e.target.innerText){
            default:
                
                display.innerText+=e.target.innerText;
                
                break;
            case "C":
                display.innerText="0";
            break;
            case "←":

                display.innerText=display.innerText.slice(0,-1);
            break;
            case "=":
                try {
                    display.innerText=eval(display.innerText);
                    
                } 
                catch (error) {
                    display.innerText="Syntax error";
                }
                
                break;
        }
    });
   
});


    equal.addEventListener("click",function (){
        let randomColor=Math.floor(Math.random () * setColors.length);
        let randomComplement=Math.floor(Math.random() * complements.length);
        setComplements.style.backgroundColor=setColors[randomColor].backg;               
        setComplements.style.color=setColors[randomColor].color;
        setComplements.innerText=complements[randomComplement];
        setComplements.style.visibility="visible";                
                        
    })

    equal.addEventListener("mouseout", ()=>{
        setComplements.style.transition="visibility";
        setComplements.style.transitionDuration="1s";          
        setComplements.style.visibility="hidden";     
    })