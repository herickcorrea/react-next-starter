const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
// const withImages = require('next-images');

module.exports = withCss(withLess(
    {
        webpack(config, options) 
        {
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 100000,
                        name: '[path][name].[ext]?[contenthash]',
                        publicPath: '/_next/static',
                        outputPath: "static"
                    }
                },
            });

            return config;
        }
    }
));