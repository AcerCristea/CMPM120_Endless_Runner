class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    init() {

        this.WEAK_SHOT_X_VELOCITY = 100
        this.WEAK_SHOT_Y_VELOCITY = -900

        this.PLAYER_VELOCITY = 120

        this.player_collision = false

        this.startTime = this.time.now

        this.score = 0
        this.scoreText
        
        this.health = 100
    }

    create() {
        this.beach = this.add.tileSprite(0,0,640,870,"beach").setOrigin(0)


        this.rock1 = this.physics.add.sprite(Phaser.Math.Between(0, 640),0, "rock")
        this.rock1.body.setImmovable(true)

        this.rock2 = this.physics.add.sprite(Phaser.Math.Between(0, 640),0, "rock")
        this.rock2.body.setImmovable(true)

        this.rock4 = this.physics.add.sprite(Phaser.Math.Between(0, 640),0, "rock")
        this.rock4.body.setImmovable(true)

        this.rock3 = this.physics.add.sprite(Phaser.Math.Between(0, 640),0, "rock")
        this.rock3.body.setImmovable(true)
        this.rock3.setVisible(false)
        this.rock3.setActive(false)

        this.crab1 = this.physics.add.sprite(width, 650, "crab")
        this.crab1.setVelocityX(-100)
        this.crab1.body.setCircle(this.crab1.width/2)
        this.crab1.body.setImmovable(true)

        this.crab2 = this.physics.add.sprite(width, Phaser.Math.Between(500, 810), "crab")
        this.crab2.setVelocityX(-150)
        this.crab2.body.setCircle(this.crab2.width/2)
        this.crab2.body.setImmovable(true)

        this.crab6 = this.physics.add.sprite(width, Phaser.Math.Between(400, 500), "crab")
        this.crab6.setVelocityX(-175)
        this.crab6.body.setCircle(this.crab6.width/2)
        this.crab6.body.setImmovable(true)


        this.crab7 = this.physics.add.sprite(width, Phaser.Math.Between(400, 500), "crab")
        this.crab7.setVelocityX(-125)
        this.crab7.body.setCircle(this.crab7.width/2)
        this.crab7.body.setImmovable(true)

        this.crab3 = this.physics.add.sprite(width, Phaser.Math.Between(100, 300), "crab")
        this.crab3.setVelocityX(-200)
        this.crab3.body.setCircle(this.crab3.width/2)
        this.crab3.body.setImmovable(true)
  
        this.crab4 = this.physics.add.sprite(width, Phaser.Math.Between(300, 610), "crab")
        this.crab4.setVelocityX(-250)
        this.crab4.body.setCircle(this.crab3.width/2)
        this.crab4.body.setImmovable(true)
        this.crab4.setVisible(false)
        this.crab4.setActive(false)

        this.crab5 = this.physics.add.sprite(width, Phaser.Math.Between(100, 300), "crab")
        this.crab5.setVelocityX(-225)
        this.crab5.body.setCircle(this.crab1.width/2)
        this.crab5.body.setImmovable(true)



        this.soccerBall = this.physics.add.sprite(width/2, height/2,"soccerBall")
        this.soccerBall.body.setCircle(this.soccerBall.width/2)
        this.soccerBall.body.setBounce(0.5)
        this.soccerBall.body.setCollideWorldBounds(true) //why doesn't this work
        this.soccerBall.body.setDamping(true).setDrag(0.3)

        this.gameOver = false

        this.player = this.physics.add.sprite(width/2, height - 50,"player", "player3")
        this.player.setCollideWorldBounds(true)
        this.player.body.setCircle(this.player.width/2, 0,30)

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)

        let scoreConfig = {
            fontFamily: "Courier",
            fontSize: "28px",
            backgroundColor: "#FFFFFF",
            color: "#843605",
            align: "right",
            padding: {
              top: 5,
              bottom: 5,
            },
          }


        this.backgroundMusic = this.sound.add('backgroundMusic', { volume: 0.2, loop: true })
        this.backgroundMusic.play()

        this.scoreText = this.add.text(16,16,"Score: 0" + this.score, scoreConfig)
        
        this.healthText = this.add.text(450,16,"Health: " + this.health, scoreConfig)



        this.physics.add.collider(this.soccerBall, this.player, (soccerBall, player) => {

            let shotDirectionX = player.x <= this.soccerBall.x ? 1 : -1 
            //let shotDirectionY = player.y <= this.soccerBall.y ? 1 : -1 
            //will need an if statement here to check if shift for power shot is down
            this.score+=50
            this.soccerBall.body.setVelocityX((this.WEAK_SHOT_X_VELOCITY)*shotDirectionX)
            this.soccerBall.body.setVelocityY((this.WEAK_SHOT_Y_VELOCITY))

            let hitSounds = ["hit1", "hit2"]

            let randomIndex = Math.floor(Math.random()*2)
            let randomHit = hitSounds[randomIndex]
      
            this.sound.play(randomHit)

        })



        this.physics.add.collider(this.rock1, this.player, (rock, player) => {

            this.health -= 2

        })        

        
        this.physics.add.collider(this.rock2, this.player, (rock, player) => {

            this.health -= 2

        })    

        this.physics.add.collider(this.rock4, this.player, (rock, player) => {

            this.health -= 2

        })  

        this.rock3collider = this.physics.add.collider(this.rock3, this.player, (rock, player) => {

            this.health -= 2

        })  

        this.rock3collider.active = false


        this.physics.add.collider(this.soccerBall, this.crab1, (soccerBall, crab) => {

            this.score+=25

            let shotDirectionX = crab.x <= this.soccerBall.x ? 1 : -1 
            let shotDirectionY = crab.y <= this.soccerBall.y ? -1 : 1 

            this.soccerBall.body.setVelocityX((this.WEAK_SHOT_X_VELOCITY)*shotDirectionX)
            this.soccerBall.body.setVelocityY((this.WEAK_SHOT_Y_VELOCITY)*shotDirectionY)

            let hitSounds = ["hit1", "hit2"]

            let randomIndex = Math.floor(Math.random()*2)
            let randomHit = hitSounds[randomIndex]
      
            this.sound.play(randomHit)


        })

        this.physics.add.collider(this.soccerBall, this.crab2, (soccerBall, crab) => {

            this.score+=25

            let shotDirectionX = crab.x <= this.soccerBall.x ? 1 : -1 
            let shotDirectionY = crab.y <= this.soccerBall.y ? -1 : 1 

            this.soccerBall.body.setVelocityX((this.WEAK_SHOT_X_VELOCITY)*shotDirectionX)
            this.soccerBall.body.setVelocityY((this.WEAK_SHOT_Y_VELOCITY)*shotDirectionY)

            let hitSounds = ["hit1", "hit2"]

            let randomIndex = Math.floor(Math.random()*2)
            let randomHit = hitSounds[randomIndex]
      
            this.sound.play(randomHit)

        })

        this.physics.add.collider(this.soccerBall, this.crab3, (soccerBall, crab) => {

            this.score+=25

            let shotDirectionX = crab.x <= this.soccerBall.x ? 1 : -1 
            let shotDirectionY = crab.y <= this.soccerBall.y ? -1 : 1 

            this.soccerBall.body.setVelocityX((this.WEAK_SHOT_X_VELOCITY)*shotDirectionX)
            this.soccerBall.body.setVelocityY((this.WEAK_SHOT_Y_VELOCITY)*shotDirectionY)
            let hitSounds = ["hit1", "hit2"]

            let randomIndex = Math.floor(Math.random()*2)
            let randomHit = hitSounds[randomIndex]
      
            this.sound.play(randomHit)

        })

        this.physics.add.collider(this.soccerBall, this.crab5, (soccerBall, crab) => {

            this.score+=25

            let shotDirectionX = crab.x <= this.soccerBall.x ? 1 : -1 
            let shotDirectionY = crab.y <= this.soccerBall.y ? -1 : 1 

            this.soccerBall.body.setVelocityX((this.WEAK_SHOT_X_VELOCITY)*shotDirectionX)
            this.soccerBall.body.setVelocityY((this.WEAK_SHOT_Y_VELOCITY)*shotDirectionY)
            let hitSounds = ["hit1", "hit2"]

            let randomIndex = Math.floor(Math.random()*2)
            let randomHit = hitSounds[randomIndex]
      
            this.sound.play(randomHit)

        })

        this.physics.add.collider(this.soccerBall, this.crab6, (soccerBall, crab) => {

            this.score+=25

            let shotDirectionX = crab.x <= this.soccerBall.x ? 1 : -1 
            let shotDirectionY = crab.y <= this.soccerBall.y ? -1 : 1 

            this.soccerBall.body.setVelocityX((this.WEAK_SHOT_X_VELOCITY)*shotDirectionX)
            this.soccerBall.body.setVelocityY((this.WEAK_SHOT_Y_VELOCITY)*shotDirectionY)
            let hitSounds = ["hit1", "hit2"]

            let randomIndex = Math.floor(Math.random()*2)
            let randomHit = hitSounds[randomIndex]
      
            this.sound.play(randomHit)

        })

        this.physics.add.collider(this.soccerBall, this.crab7, (soccerBall, crab) => {

            this.score+=25

            let shotDirectionX = crab.x <= this.soccerBall.x ? 1 : -1 
            let shotDirectionY = crab.y <= this.soccerBall.y ? -1 : 1 

            this.soccerBall.body.setVelocityX((this.WEAK_SHOT_X_VELOCITY)*shotDirectionX)
            this.soccerBall.body.setVelocityY((this.WEAK_SHOT_Y_VELOCITY)*shotDirectionY)
            let hitSounds = ["hit1", "hit2"]

            let randomIndex = Math.floor(Math.random()*2)
            let randomHit = hitSounds[randomIndex]
      
            this.sound.play(randomHit)

        })



        this.crab4collider = this.physics.add.collider(this.soccerBall, this.crab4, (soccerBall, crab) => {

            this.score+=25

            let shotDirectionX = crab.x <= this.soccerBall.x ? 1 : -1 
            let shotDirectionY = crab.y <= this.soccerBall.y ? -1 : 1 

            this.soccerBall.body.setVelocityX((this.WEAK_SHOT_X_VELOCITY)*shotDirectionX)
            this.soccerBall.body.setVelocityY((this.WEAK_SHOT_Y_VELOCITY)*shotDirectionY)
            let hitSounds = ["hit1", "hit2"]

            let randomIndex = Math.floor(Math.random()*2)
            let randomHit = hitSounds[randomIndex]
      
            this.sound.play(randomHit)

        })

        this.crab4collider.active = false



    }

    update() {
        
        this.player.anims.play("run", true)

        if(keyLEFT.isDown) {
            this.player.setVelocityX(-this.PLAYER_VELOCITY)
            
        } else if (keyRIGHT.isDown) {
            this.player.setVelocityX(this.PLAYER_VELOCITY)

        } else {
            this.player.body.velocity.x = 0
        }


        this.scoreText.text = "Score: " + this.score

        this.healthText.text = "Health: " + this.health

        this.beach.tilePositionY -= 4
        this.soccerBall.y += 3

        this.rock1.y += 4
        this.rock2.y += 2.5
        this.rock3.y += 3
        this.rock4.y += 2


        if (this.crab1.x <= 0) {
            this.crab1.x = width
            this.crab1.y = Phaser.Math.Between(500, 730)
        }

        if (this.crab2.x <= 0) {
            this.crab2.x = width
            this.crab2.y = Phaser.Math.Between(500, 730)
        }        
        
        if (this.crab3.x <= 0) {
            this.crab3.x = width
            this.crab3.y = Phaser.Math.Between(500, 730)
        }

        if (this.crab4.x <= 0) {
            this.crab4.x = width
            this.crab4.y = Phaser.Math.Between(300, 730)
        }

        if (this.crab5.x <= 0) {
            this.crab5.x = width
            this.crab5.y = Phaser.Math.Between(100, 300)
        }

        if (this.crab6.x <= 0) {
            this.crab6.x = width
            this.crab6.y = Phaser.Math.Between(400, 500)
        }

        if (this.crab7.x <= 0) {
            this.crab7.x = width
            this.crab7.y = Phaser.Math.Between(400, 500)
        }

        if (this.rock1.y >= 870) {
            this.rock1.y = 0
            this.rock1.x = Phaser.Math.Between(0, 640)
        }

        if (this.rock2.y >= 870) {
            this.rock2.y = 0
            this.rock2.x = Phaser.Math.Between(0, 640)
        }

        if (this.rock3.y >= 870) {
            this.rock3.y = 0
            this.rock3.x = Phaser.Math.Between(0, 640)
        } 

        if (this.rock4.y >= 870) {
            this.rock4.y = 0
            this.rock4.x = Phaser.Math.Between(0, 640)
        } 
        
        if(this.time.now - this.startTime >= 30000){
            this.rock3collider.active = true
            this.rock3.setVisible(true)
            this.rock3.setActive(true)
        }

        if(this.time.now - this.startTime >= 30000){
            this.crab4collider.active = true
            this.crab4.setVisible(true)
            this.crab4.setActive(true)
        }


        if (this.soccerBall.y >= 860 || this.health <= 0) {
            //Game Over
            this.sound.play("dead")
            this.backgroundMusic.stop()
            this.scene.start("gameOverScene")

        }


    }

}