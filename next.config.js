require('dotenv').config();
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
const withMDX = require("@next/mdx")();

const mode = 'dev';
const full_build = process.env.NODE_SERV !== "only_server";
const _env = {
    dev: {
        HOST1: process.env.HOST1,
        HOST2: process.env.HOST2,
    }
};
const ENV = {...{env: {..._env[mode]}}};

const DATA = {
    webpack(config, options) {
        const {isServer} = options;
        config.module.rules.push({
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            exclude: config.exclude,
            use: [
                {
                    loader: require.resolve('url-loader'),
                    options: {
                        limit: config.inlineImageLimit,
                        fallback: require.resolve('file-loader'),
                        publicPath: `${config.assetPrefix}/_next/static/images/`,
                        outputPath: `${isServer ? '../' : ''}static/images/`,
                        name: '[name]-[hash].[ext]',
                        esModule: config.esModule || false,
                    },
                },
            ],
        });

        return config;
    },
    async rewrites() {
        if (full_build) {
            return []
        } else {
            return [
                { source: `/api/:path*`, destination: `${ENV.env.HOST2}/api/:path*` }
            ]
        }
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
    ...ENV
}
module.exports = withBundleAnalyzer(withMDX(DATA));
