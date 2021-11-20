module.exports = {
  mode: 'production',             // Modo de ejecucion de Webpack 
  entry: './src/main.ts',         // Punto de entrada para Webpack
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,            // Permite procesar archivos ".ts"
        use: 'ts-loader',         // Defininmos que use el plugin que instalamos
        exclude: /node_modules/   // Omita directorios
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],   // Extensiones que soportamos dentro de nuestro proyecto
  },
  output: {
    filename: 'bundle.js',        // indicamos el nombre de nuestro archivo resultante
  }
}

