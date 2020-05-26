function changementDeCouleur(mouseEvent){
    let x = event.clientX;
    let y = event.clientY;

    let button = document.getElementById("id1");
    let max = 256;
    let R = Math.floor(Math.random()*max);
    let G = Math.floor(Math.random()*max);
    let B = Math.floor(Math.random()*max);

    button.style.backgroundColor="rgb("+ R +","+ G +","+ B +")";

    console.log("Position en X : " + x);
    console.log("Position en Y : " + y);
}

function main(){
    let button = document.getElementById("id1");
    button.onmousemove = changementDeCouleur;
}

main();