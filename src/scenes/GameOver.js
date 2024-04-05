class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOverScene')
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

        this.add.image(0,-40,"get_beached").setOrigin(0)


        this.add.text(width/2, height/2 + 30, "Press (R) to Restart",
        menuConfig).setOrigin(0.5)

        this.add.text(width/2, height/2 + 100, "Press ↑ to Main Menu",
        menuConfig).setOrigin(0.5)

        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)


    }

    update() {

        if(Phaser.Input.Keyboard.JustDown(keyRESET)){
            this.sound.play("selection")

            this.scene.start("playScene")
        }

        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            this.sound.play("selection")

            this.scene.start("menuScene")
        }


    }

}


