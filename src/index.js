import Phaser from 'phaser';
import { gameConfig } from './game'; // Assuming gameConfig is exported from game.js

console.log('Miiablo starting...');

// Ensure the DOM is ready before creating the game instance
window.onload = () => {
    const game = new Phaser.Game(gameConfig);
    console.log('Phaser Game instance created.');
};
