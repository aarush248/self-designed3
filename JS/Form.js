class Form{

    constructor(){

        this.input=createInput("Name/Team")
    
        this.button=createButton("Play")

        this.greeting=createElement("h3")

    }

    hide(){
        this.button.hide()
        this.input.hide();
        this.greeting.hide();
    }

    display(){

        var title = createElement("h2")
        title.html("Hogwarts Quidditch Finals!")
        title.position(displayWidth/2-180, 0)

        this.input.position(displayWidth/2-100, displayHeight/2-100)

        this.button.position(displayWidth/2-100, displayHeight/2-60)
        //this.reset.position(displayWidth-150, 50)
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          fill("white")
          this.greeting.html("Hello " + player.name)
          this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        });
    
        //this.reset.mousePressed(()=>{
          //player.updateCount(0)
          //game.update(0)
          //Player.updateCars(0)
        //})
    
      }
    }
        
    


