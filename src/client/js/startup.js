/*
 * pwix:bootbox/src/client/js/startup.js
 */

import { pwixI18n as i18n } from 'meteor/pwix:i18n';

Meteor.startup( function(){
    //console.log( 'pwix:bootbox/src/client/js/startup.js Meteor.startup()' );
    i18n.set( 'bbBootbox', bbBootbox.strings );
});
