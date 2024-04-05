class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene")
    }

    create() {

        let menuConfig = {
            fontFamily: "Comic Sans MS",
            fontSize: "35px",
            color: "#FFFFFF",
            align: "right",
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
        }

        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
      
        this.add.image(-10,-150,"title").setOrigin(0)

        this.add.text(game.config.width/2, game.config.height/2 + 200, "Press ↑ to Start",
        menuConfig).setOrigin(0.5)

        this.add.text(game.config.width/2, game.config.height/2 + 150, "Use ←→ arrows to move",
        menuConfig).setOrigin(0.5)

        menuConfig.fontSize = "28px"

        this.add.text(game.config.width/2, game.config.height/2, "Don't let the ball get passed you!",
        menuConfig).setOrigin(0.5)

        this.add.text(game.config.width/2, game.config.height/2 + 30, "Be careful of the rocks in the beach!",
        menuConfig).setOrigin(0.5)

        this.add.text(game.config.width/2, game.config.height/2 + 380, "Made by Acer Cristea",
        menuConfig).setOrigin(0.5)

        menuConfig.fontSize = "10px"


        this.add.text(game.config.width/2, game.config.height/2 + 410, "Used Uppbeat for backround music",
        menuConfig).setOrigin(0.5)

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {

            this.sound.play("selection")

            this.scene.start('playScene')
        }
    }
}
//scene.object.setScrollFactor(0)

//any object that's in a scene, will not scroll with the screen, like a UI
//can use numbers as well to create parrallex
