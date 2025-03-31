import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        console.log('BootScene: Preloading assets...');
        // Load minimal assets needed for the *next* scene (e.g., loading bar, logo)
        // For now, we'll just show a message and transition
        // Example: this.load.image('logo', 'assets/images/logo.png');
        // Example: this.load.image('loading_bar', 'assets/images/loading_bar.png');

         // Placeholder for loading assets - add actual assets later
        this.load.image('sky', 'assets/images/sky.png'); // Example placeholder
        this.load.image('ground', 'assets/images/platform.png'); // Example placeholder
        this.load.image('star', 'assets/images/star.png'); // Example placeholder
        this.load.image('bomb', 'assets/images/bomb.png'); // Example placeholder
        this.load.spritesheet('dude', 'assets/images/dude.png', { frameWidth: 32, frameHeight: 48 }); // Example placeholder
    }

    create() {
        console.log('BootScene: Create');

        // Optionally display a loading message or logo here
        this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 'Loading Miiablo...', {
            font: '32px Arial',
            fill: '#ffffff'
        }).setOrigin(0.5);


        // Start the main game scene (or a Main Menu scene once created)
        // Use a short delay to allow assets to potentially finish loading if needed,
        // or ideally use Phaser's load events for a proper loading screen.
        this.time.delayedCall(1000, () => {
             console.log('BootScene: Starting GameScene');
             this.scene.start('GameScene'); // Change to 'MainMenuScene' when created
        });
    }

    update() {
        // Usually empty in a Boot scene unless managing a loading bar animation
    }
}
