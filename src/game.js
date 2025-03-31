import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene'; // A placeholder game scene

// Define the game dimensions (adjust as needed)
const GAME_WIDTH = 1920;
const GAME_HEIGHT = 1080;

// Phaser Game Configuration
export const gameConfig = {
    type: Phaser.AUTO, // Automatically choose WebGL or Canvas
    parent: 'game-container', // ID of the div to contain the game canvas
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    backgroundColor: '#1a1a1a', // A dark background
    physics: {
        default: 'arcade',
        arcade: {
            // debug: process.env.NODE_ENV === 'development', // Enable physics debugging in dev
            gravity: { y: 0 }, // Top-down game, no global gravity needed
        },
    },
    scene: [
        BootScene,
        // Add other scenes here as they are created
        GameScene,
        // e.g., MainMenuScene, CharacterSelectScene, etc.
    ],
    scale: {
         mode: Phaser.Scale.FIT, // Scale the game to fit the container
         autoCenter: Phaser.Scale.CENTER_BOTH, // Center the game canvas
    },
    // Add any global plugins here if needed later
    // plugins: {}
};
