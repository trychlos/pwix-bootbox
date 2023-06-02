/*
 * pwix:bootbox/src/client/js/startup.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';

Meteor.startup( function(){
    //console.log( 'pwix:bootbox/src/client/js/startup.js Meteor.startup()' );
    pwixI18n.namespace( 'pwixBootbox', pwixBootbox.i18n );
});
