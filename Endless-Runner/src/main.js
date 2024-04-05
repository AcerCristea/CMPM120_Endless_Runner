// Acer Cristea
// Game Title: Dribble Master
// Hours Spent: Approximately 27
// Creative Tilt:
// In my Dribble Master I use multiple collision detectors to create a pinball like experience. 
// I'm proud of the way I kept track of time and implemented the collision for objects only after a certain amount of time. 
// I also like the way I twisted the idea from the Golf in class example to create a cool and very different experience.
// I'm proud of the artwork which took way too long to make, and the overall idea of having to keep track of and control multiple things in an Endless Runner

'use strict'

// define and configure main Phaser game object
let config = {
    type: Phaser.AUTO,
    height: 870,
    width: 640,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    render:{
        pixelArt:true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,

        }
    },
    scene: [ Load, Menu, Play, GameOver]
}

let game = new Phaser.Game(config)


let keyLEFT, keyRIGHT, keyUP, keyDOWN, keyRESET

let { width, height } = game.config