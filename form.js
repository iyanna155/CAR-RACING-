class Form {
    constructor(){

    }

    display(){
        var title = createElement("h1")
        title.html("car racing")
        title.position(130,0)
        var input = createInput("name")
        input.position(130,160)
        var button = createButton("PLAY")
        button.position(250,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            player.updateInfo(name)
            playerCount++
            player.updateCount(playerCount)
            var greeting = createElement("h2")
            greeting.html("Hello "+name)
            greeting.position(130,160)
        })

    }

}