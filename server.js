/* eslint no-console: ["error", { allow: ["log"] }] */

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: __dirname,
  stats: {
    colors: true,
  },
}).listen(3000, 'localhost', (err) => {
  if (err) console.log(err);

  console.log('Listening at localhost:3000');
});
