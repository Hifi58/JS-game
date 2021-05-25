const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;

//déplacement vers le haut avec blocage

document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowUp') {
    if(player.offsetTop > 0){
    playerWalk = playerWalk + 1;
    player.style.top = (player.offsetTop - moveSize) + "px";
    
//changement d'images un pas sur deux

    if(playerWalk % 2 == 0){
    player.style.backgroundImage = "url(img/up.png)";
    }else{
            player.style.backgroundImage = "url(img/wup.png)";
        };
    };  

//déplacement sur la droite avec blocage

    }else if (event.code == 'ArrowRight') {
        if(player.offsetLeft < 744){
    playerWalk = playerWalk + 1;
    player.style.left = (player.offsetLeft + moveSize) + "px";

    if(playerWalk % 2 == 0){
        player.style.backgroundImage = "url(img/right.png)";
    }else{
                player.style.backgroundImage = "url(img/wright.png)";
            };
        };

//déplacement vers le bas avec blocage

    }else if (event.code == 'ArrowDown') {
     if(player.offsetTop < 744){  
    playerWalk = playerWalk + 1;
    player.style.top = (player.offsetTop + moveSize) + "px";
    
    if(playerWalk % 2 == 0){
        player.style.backgroundImage = "url(img/face.png)";
    }else{
                player.style.backgroundImage = "url(img/wface.png)";
            };
 };

//déplacement vers le bas déplacement sur la gauche avec blocage

} else if (event.code == 'ArrowLeft') {
        if(player.offsetLeft > 0){
    playerWalk = playerWalk + 1;
    player.style.left = (player.offsetLeft - moveSize) + "px";
    if(playerWalk % 2 == 0){
        player.style.backgroundImage = "url(img/left.png)";
    }else{
                player.style.backgroundImage = "url(img/wleft.png)";
            };
    }
   }
   });
   