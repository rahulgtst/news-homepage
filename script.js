const menu=document.getElementById('menu');
const navLink=document.getElementsById('navLink');
const body=document.getElementsByName('body');

let isOpen=false;


menu.addEventListener('click',()=>{
    if(!isOpen){
        
        menu.src='./assets/images/close.png';
    }
    else{
        menu.src='./assets/images/menu.png';
    }
});