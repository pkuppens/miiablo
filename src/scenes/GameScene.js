import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
        this.player = null;
        this.cursors = null;
    }

    preload() {
        console.log('GameScene: Preload (Assets should be loaded in BootScene ideally)');
        // Assets needed specifically for this scene that weren't preloaded
        // Ideally, most assets are loaded in BootScene or a dedicated PreloadScene
    }

    create() {
        console.log('GameScene: Create');
        this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'sky').setScale(2); // Example background

        // Example: Add a simple player sprite
        this.player = this.physics.add.sprite(100, 450, 'dude');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true); // Prevent player from leaving the screen

         // Example animation (using the placeholder 'dude' spritesheet)
         this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });


        // Enable keyboard input
        this.cursors = this.input.keyboard.createCursorKeys();

        // Simple text instructions
        this.add.text(16, 16, 'Game Scene - Use Arrow Keys to Move (Placeholder)', {
            fontSize: '24px',
            fill: '#fff'
        });
    }

    update(time, delta) {
        // Game loop logic goes here
        if (!this.player || !this.cursors) return;

        // Basic placeholder movement
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            // Ensure the 'left' animation exists and plays correctly
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            // Ensure the 'right' animation exists and plays correctly
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);

            // --- SOLUTION ---
            // Instead of playing a potentially problematic single-frame animation,
            // stop the current animation and set the texture to a specific idle frame.
            this.player.anims.stop();

            // Set to frame 4, assuming it's the intended idle frame.
            // *** IMPORTANT: Make sure frame 4 EXISTS in your 'dude.png' spritesheet! ***
            // If frame 4 doesn't exist, use a valid frame index (e.g., 0).
            try {
                 // Using setTexture is safer if the animation definition itself was the issue.
                 // We assume the 'dude' texture key is correct.
                this.player.setTexture('dude', 4);
            } catch (e) {
                console.error("Error setting idle frame. Does frame 4 exist in 'dude' spritesheet?", e);
                // Fallback to frame 0 if frame 4 fails
                try {
                    this.player.setTexture('dude', 0);
                } catch (e2) {
                     console.error("Error setting fallback idle frame 0.", e2);
                     // If even frame 0 fails, something is wrong with the 'dude' asset loading/key.
                }
            }
            // --- END SOLUTION ---
        }

        // Placeholder - No vertical movement logic for top-down (adjust later)
         if (this.cursors.up.isDown /* && this.player.body.touching.down */) {
             // No jump needed for top-down ARPG usually
             // this.player.setVelocityY(-330);
        }
    }
}
