const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;

document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowUp') {
    
    playerWalk = playerWalk + 1;
    player.style.top = (player.offsetTop - moveSize) + "px";
    if(playerWalk % 2 == 0){
    player.style.backgroundImage = "url(img/up.png)";
}else{
            player.style.backgroundImage = "url(img/wup.png)";
        };
        
    } else if (event.code == 'ArrowRight') {
    playerWalk = playerWalk + 1;
    player.style.left = (player.offsetLeft + moveSize) + "px";
    if(playerWalk % 2 == 0){
        document.getElementById('player').style.backgroundImage = "url(img/right.png)";
    }else{
                player.style.backgroundImage = "url(img/wright.png)";
            };
    
    } else if (event.code == 'ArrowDown') {
    playerWalk = playerWalk + 1;
    player.style.top = (player.offsetTop + moveSize) + "px";

    if(playerWalk % 2 == 0){
        player.style.backgroundImage = "url(img/face.png)";
    }else{
                player.style.backgroundImage = "url(img/wface.png)";
            };

    } else if (event.code == 'ArrowLeft') {
    playerWalk = playerWalk + 1;
    player.style.left = (player.offsetLeft - moveSize) + "px";
    if(playerWalk % 2 == 0){
        player.style.backgroundImage = "url(img/left.png)";
    }else{
                player.style.backgroundImage = "url(img/wleft.png)";
            };
    }
   });
   