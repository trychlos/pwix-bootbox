/*
 * pwix:bootbox/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

if( false ){
    // packages white listing
}

checkNpmVersions({
    'lodash': '^4.17.21'
},
    'pwix:bootbox'
);
