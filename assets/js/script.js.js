
// this function will clean the selected color when change.
function cleanColors(){
    document.querySelector('#red').style.opacity = 0.2;
    document.querySelector('#yellow').style.opacity = 0.2;
    document.querySelector('#green').style.opacity = 0.2;
}

let timer = 0;

function changeColor (){

timer = setTimeout(() => {
    cleanColors()
    document.querySelector('#traffic-information').innerHTML = 'Siga';
    document.querySelector('#green').style.opacity = 1;
},8000);

timer = setTimeout(() => {
    cleanColors()
    document.querySelector('#traffic-information').innerHTML = 'Atenção';
    document.querySelector('#yellow').style.opacity = 1;
},6000);
    
timer = setTimeout(() => {
    cleanColors()
    document.querySelector('#traffic-information').innerHTML = 'Pare';
    document.querySelector('#red').style.opacity = 1;
},2000);
}

setInterval (changeColor, 20000); 
