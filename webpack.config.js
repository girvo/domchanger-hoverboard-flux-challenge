module.exports = {
    entry: './src/index.js',
    
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: 'style!css' 
            },
            { 
                test: /\.jsx?$/, 
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,                
                query: {
                    optional: ['runtime'],
                    stage: 0
                }
            }
        ]
    },
    
    devServer: {
        port: 1977
    }
};
