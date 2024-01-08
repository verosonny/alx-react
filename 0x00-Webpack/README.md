Setting up Webpack for a basic project involves configuring entry points, output, loaders, plugins, code splitting, and a development server. Let's break down each step:

### 1. Install Webpack and Basic Dependencies:

```bash
npm init -y
npm install webpack webpack-cli --save-dev
```

### 2. Create Project Structure:

Create the following project structure:

```plaintext
project-root
│   index.html
│   package.json
│   webpack.config.js
└───src
    │   index.js
```

### 3. Configure `webpack.config.js`:

```javascript
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
```

### 4. Install Babel and Configure `.babelrc`:

```bash
npm install babel-loader @babel/core @babel/preset-env --save-dev
```

Create a `.babelrc` file:

```json
// .babelrc
{
  "presets": ["@babel/preset-env"]
}
```

### 5. Create `index.html`:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webpack Basic Project</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

### 6. Create `index.js`:

```javascript
// src/index.js
console.log('Hello, Webpack!');
```

### 7. Add npm scripts:

Update your `package.json`:

```json
// package.json
{
  "scripts": {
    "build": "webpack",
    "start": "webpack serve --open"
  }
}
```

### 8. Install Webpack Dev Server:

```bash
npm install webpack-dev-server --save-dev
```

### 9. Run the Project:

Build the project:

```bash
npm run build
```

Start the development server:

```bash
npm start
```

This configuration includes entry points, output, loaders (for Babel), a plugin (HtmlWebpackPlugin), and a development server. You can expand upon this setup as your project grows and add more features like code splitting, additional plugins, and optimization configurations.