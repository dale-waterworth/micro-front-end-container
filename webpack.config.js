const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const {ModuleFederationPlugin} = require("webpack").container;
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {

    const env = dotenv.config().parsed;

    console.log('ENV - ', env)


    return {
        entry: "./src/index.tsx",
        mode: "development",
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            port: 3002,
        },
        output: {
            publicPath: "http://localhost:3002/",
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        module: {
            rules: [

                {
                    test: /\.jsx?$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                    options: {
                        presets: ["@babel/preset-react"]
                    },
                }, {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                "@babel/preset-typescript",
                            ],
                        },
                    },
                }, {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                }, {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
           // new webpack.DefinePlugin({'process.env.PUBLIC_URL': JSON.stringify(env.PUBLIC_URL)}),
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
            new ModuleFederationPlugin({
                name: "micro-frontend",
                library: { type: "var", name: "micro-frontend" },
                remotes: {
                    reactApp: "reactApp",
                   // reactApp: "reactApp@http://localhost:3001/remoteEntry.js",
                },
                shared: {
                    ...["react", "react-dom"],
                    react: {
                        eager: true,
                    }
                }
            }),
        ],
    };
};