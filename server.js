'use strict';
var Express         = require( 'express' );
var App             = Express();
var React           = require( 'react' );
var ReactDOM        = require( 'react-dom/server' );
var Jsx             = require( 'node-jsx' ).install();
var Twig            = require('twig');
var Router		    = require('./server/routes.js');

App.set( 'view engine', 'twig' );
App.set( 'views', __dirname + '/views' );

App.use( '/', Router);

App.set( 'port', 8080 );
App.set( 'ip', '127.0.0.1' );

App.listen( App.get( 'port') ,App.get( 'ip'), function() {
    console.log( '✔ Express server listening at %s:%d ', App.get( 'ip'),App.get( 'port'));
});
