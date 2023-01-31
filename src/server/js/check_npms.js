/*
 * pwix:bootbox/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

if( false ){
    require( '@popperjs/core/package.json' );
    require( 'bootstrap/package.json' );
    require( 'jquery-ui-dist/package.json' );
}

checkNpmVersions({
    '@popperjs/core': '^2.11.6',
    'bootstrap': '^5.2.1',
    'jquery-ui-dist': '^1.13.2'
}, 'pwix:bootbox' );
