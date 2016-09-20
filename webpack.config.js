/**
 * Created by jfeng on 9/20/16.
 */
module.exports = {
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:8080',
            './js/index'
        ]
    },
    output: {
        filename: 'public/bundle.js'
    }
};

// source come from
// https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html