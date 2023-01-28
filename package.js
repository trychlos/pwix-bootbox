Package.describe({
    name: 'pwix:bootbox',
    version: '1.0.0',
    summary: 'A Bootstrap-based alert(), confirm() and prompt(), so a client-only Meteor package',
    git: 'https://github.com/trychlos/pwix-bootbox',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'bbBootbox'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:bootbox' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom( '2.9.0' );
    api.use( 'blaze-html-templates', 'client' );
    api.use( 'ecmascript', 'client' );
    api.use( 'less@4.0.0', 'client' );
    api.use( 'pwix:i18n', 'client' );
}

Npm.depends({
    'bootstrap': '5.2.1',
    'jquery-ui-dist': '1.13.2'
});
