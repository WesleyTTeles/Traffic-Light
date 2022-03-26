
// this function will clean the selected color when change.
function cleanColors(){
    document.querySelector('#color-2').style.opacity = 0.2;
    document.querySelector('#color-3').style.opacity = 0.2;
    document.querySelector('#color-1').style.opacity = 0.2;
}

let timer = 0;

function changeColor (){

timer = setTimeout(() => {
    cleanColors()
    document.querySelector('#traffic-information').innerHTML = 'Siga';
    document.querySelector('#color-2').style.opacity = 1;
},1000);

timer = setTimeout(() => {
    cleanColors()
    document.querySelector('#traffic-information').innerHTML = 'Pare';
    document.querySelector('#color-1').style.opacity = 1;
},9000);

timer = setTimeout(() => {
    cleanColors()
    document.querySelector('#traffic-information').innerHTML = 'Atenção';
    document.querySelector('#color-3').style.opacity = 1;
},7000);

}
setInterval (changeColor, 16000); 
