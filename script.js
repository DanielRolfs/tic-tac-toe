let fields = [];
let currtenShape = 'cross';
let gameOver = false;

function fillShape(id){
    if(!fields[id] && !gameOver){    /* !Gegenteil */
    if(currtenShape == 'cross'){
        currtenShape = 'circle';
        document.getElementById('player-2').classList.remove('player-inactive');
        document.getElementById('player-1').classList.add('player-inactive');
    } else {
        currtenShape = 'cross';
        document.getElementById('player-1').classList.remove('player-inactive');
        document.getElementById('player-2').classList.add('player-inactive');
    }

    fields[id] = currtenShape;
    draw();
    checkForWin();
    }       
}

function restart(){
    gameOver = false;
    fields =[];
    document.getElementById('game_over').classList.add('d-none');
    document.getElementById('restart_button').classList.add('d-none');
    
    for(let i=1; i < 9; i++){
        document.getElementById('line-' + i).style.transform = 'scaleX(0)'; 
    }

    for(let i=0; i < 9; i++){
        document.getElementById('circle-' + i).classList.add('d-none');
    }

    for(let i=0; i < 9; i++){
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}

function draw(){
    for(let i=0; i < fields.length; i++){
        if(fields[i] == 'circle'){
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if(fields[i] == 'cross'){
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin(){
    let winner;

    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)'; 
    }
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)'; 
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)'; 
    }
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleY(1)'; 
    }
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleY(1)'; 
    }
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleY(1)'; 
    }
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleY(1.2)';
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleY(1.2)';
    }

    if(winner){
        gameOver = true;
        setTimeout(function(){
            document.getElementById('game_over').classList.remove('d-none');
            document.getElementById('restart_button').classList.remove('d-none');
        }, 2000);
       
    }
}