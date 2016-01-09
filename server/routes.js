var Express  = require( 'express' );
var Router   = Express.Router();
var React    = require( 'react' );
var ReactDOM = require( 'react-dom/server' );

function requireUncached(module){
    delete require.cache[require.resolve(module)];
    return require(module);
}

function createReactHTML( page, information ){
    // note: directory is based on the modules file location;
    var Core = React.createFactory( requireUncached( '../views/pages/page_' + page + '.jsx'  ) );
    return ReactDOM.renderToString( Core(information) );
}

// Index page
Router.get( '/', function(req, res){
    var data = {}
    var stuff = createReactHTML('index', data );
    res.render('index', {
        site: {},
        react: stuff
    });
});

module.exports = Router;
