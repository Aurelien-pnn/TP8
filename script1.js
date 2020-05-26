function changementDeCouleur(){
    let button = document.getElementById("id1");
    let max = 256;
    let R = Math.floor(Math.random()*max);
    let G = Math.floor(Math.random()*max);
    let B = Math.floor(Math.random()*max);

    button.style.backgroundColor="rgb("+ R +","+ G +","+ B +")";
}

