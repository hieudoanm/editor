// Generated using webpack-cli
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';

// Shared config factory
const createConfig = (target: string) => ({
  mode,
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  entry: './src/background.ts',
  output: {
    path: path.resolve(__dirname, `dist/${target}`), // dist-chrome or dist-firefox
    filename: 'background.js',
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: '.', to: '.', context: 'public' },
        {
          // Copy correct manifest for target
          from: `manifest/manifest.${target}.json`,
          to: 'manifest.json',
          transform(content) {
            // Optionally tweak manifest here if needed
            return content;
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
});

// Export two configs (Chrome + Firefox)
export default [createConfig('chrome'), createConfig('firefox')];
