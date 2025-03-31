// babel.config.js
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            // Target browsers that support ES Modules and modern features
            // Adjust based on your target audience if needed
            esmodules: true,
          },
        },
      ],
    ],
  };
  