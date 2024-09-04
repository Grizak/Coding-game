// Create the game configuration
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

// Initialize the game
const game = new Phaser.Game(config);

// Preload function: Load assets like images and sounds here
function preload() {
  this.load.image('sky', 'https://labs.phaser.io/assets/skies/space3.png');
  this.load.image('villager', 'https://labs.phaser.io/assets/sprites/phaser-dude.png');
}

// Create function: Add game objects like villagers or background
function create() {
  this.add.image(400, 300, 'sky'); // Add background image
  this.villager = this.add.sprite(400, 300, 'villager'); // Add the villager sprite

  // Reference to the 'this' context for use in player code
  window.gameScene = this; // Make the game scene available globally for running player code
}

// Update function: Update the game frame by frame
function update() {
  // Empty for now
}

// Initialize CodeMirror for the in-game code editor
window.onload = function() {
  var editor = CodeMirror(document.getElementById('editor'), {
      mode: "javascript",
      lineNumbers: true
  });

  // Sample code for moving the villager
  editor.setValue("");

  // Add a button to run the code
  const runButton = document.getElementById('runButton');

  runButton.onclick = function() {
      const playerCode = editor.getValue();  // Get code from the editor
      try {
          eval(playerCode);  // Evaluate the code (runs it in the game context)
      } catch (e) {
          console.error(e);  // Log any errors in the code to the console
      }
  };
};
