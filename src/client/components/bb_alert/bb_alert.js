/*
 * pwix:bootbox:/src/client/components/bb_alert/bb_alert.js
 */

import { pwixI18n as i18n } from 'meteor/pwix:i18n';

import '../../../common/js/index.js';

import './bb_alert.html';

Template.bb_alert.onRendered( function(){
    this.$( '.bb-alert .modal' ).modal( 'show' );
    /*
    this.$( '.bb-alert .modal' ).modal({
        backdrop: false,
        show: true
    });
    */
    this.$( '.bb-alert .modal-dialog' ).draggable({
        handle: '.modal-header',
        cursor: 'grab'
    });
});

Template.bb_alert.helpers({
    body(){
        return Template.currentData().message || '';
    },
    button(){
        return Template.currentData().btn || i18n.label( bbBootbox.i18n, 'alert.ok_btn' );
    },
    title(){
        return Template.currentData().title || '';
    }
});

Template.bb_alert.events({

    // remove the Blaze element from the DOM
    'hidden.bs.modal .bb-alert'( event, instance ){
        Blaze.remove( instance.view );
    }
});
