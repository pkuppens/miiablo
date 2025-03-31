// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js', // Entry point of your application
    output: {
      path: path.resolve(__dirname, 'dist'), // Output directory
      filename: 'bundle.[contenthash].js', // Output bundle filename with hash for caching
      clean: true, // Clean the output directory before each build
    },
    devtool: isProduction ? false : 'eval-source-map', // Source maps for debugging
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'), // Serve files from the dist directory
      },
      compress: true,
      port: 8080, // Port for the development server
      hot: true, // Enable Hot Module Replacement
      open: true, // Open the browser automatically
    },
    module: {
      rules: [
        {
          test: /\.js$/, // Apply babel-loader to .js files
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          // Asset loader for images (add more rules for audio, fonts if needed)
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
          generator: {
             filename: 'assets/images/[name][ext][query]'
           }
        },
         {
          // Asset loader for audio
          test: /\.(mp3|wav|ogg|m4a)$/i,
          type: 'asset/resource',
           generator: {
             filename: 'assets/audio/[name][ext][query]'
           }
        },
        {
         // Asset loader for fonts
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: 'asset/resource',
         generator: {
           filename: 'assets/fonts/[name][ext][query]'
         }
       },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html', // Use this HTML file as a template
        favicon: './public/favicon.ico', // Include the favicon
        inject: 'body', // Inject the script tag into the body
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/assets', // Copy assets from src/assets
            to: 'assets', // To the dist/assets directory
            noErrorOnMissing: true // Don't error if the assets folder doesn't exist yet
          },
        ],
      }),
    ],
    resolve: {
      extensions: ['.js'], // Allow importing .js files without the extension
    },
  };
};
