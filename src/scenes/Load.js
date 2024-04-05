class Load extends Phaser.Scene {
    constructor() {
        super("loadScene")
    }

    preload() {

        this.load.path = "./assets/"
        this.load.image("beach", "beachBackground.png")
        this.load.image("soccerBall", "soccer_ball.png")
        this.load.image("crab", "crab.png")    
        this.load.atlas("player", "spritesheet.png", "walking.json")

        this.load.image("rock", "rock.png")
        this.load.image("get_beached", "get_beached.png")

        this.load.image("title", "title.png")

        this.load.audio("dead", "dead.wav")
        this.load.audio("hit1", "hit1.wav")
        this.load.audio("hit2", "hit2.wav")
        this.load.audio("selection", "selection.wav")
        this.load.audio('backgroundMusic', 'background_music.mp3');       

    }


    create() {


        this.anims.create({
            key: "run",
            frames: this.anims.generateFrameNames("player", {
                prefix: "player",
                start: 1,
                end: 3
            }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'idle',
            defaultTextureKey: 'player',
            frames: [
                { frame: 'player2' }
            ],
            repeat: -1
        })



        this.scene.start("menuScene")
    }
}