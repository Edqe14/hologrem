/* eslint-disable @typescript-eslint/no-var-requires */
const { version } = require('./package.json');
const withPWA = require('next-pwa');

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
module.exports = withPWA({
  webpack(config, options) {
    const { webpack } = options;

    config.node = {
      __dirname: true,
    };

    // Define value to inject
    config.plugins.push(
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(version),
        BACKEND_PORT: 3001,
      })
    );

    // Webpack rules
    config.module.rules.push({
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: false,
            name: 'static/assets/images/[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
  poweredByHeader: false,
  pwa: {
    dest: 'public',
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [
      {
        urlPattern: /\/_next\/image/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'images',
          expiration: {
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
        },
      },
    ],
  },
});
