class Game {
    constructor(){

    }

    //read the gameState value from the database
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }

    //write the gameState to the database
    updateState(State){
        database.ref("/").update({
            gameState:State
        })
    }

    start(){
        if(gameState === 0){
            player = new Player;
            player.getCount()
            form = new Form()
            form.display()
        }
    }
    

}