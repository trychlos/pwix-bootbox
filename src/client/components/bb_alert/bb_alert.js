/*
 * pwix:bootbox:/src/client/components/bb_alert/bb_alert.js
 */

import { pwixI18n as i18n } from 'meteor/pwix:i18n';

import '../../../common/js/index.js';

import '../../stylesheets/bb_bootbox.less';

import './bb_alert.html';

Template.bb_alert.onRendered( function(){
    this.$( '.bb-alert .modal' ).modal( 'show' );

    this.$( '.bb-alert .modal-dialog' ).draggable({
        handle: '.modal-header',
        cursor: 'grab'
    });

    // add a tag class to body element to let the stylesheet identify *this* modal
    $( 'body' ).addClass( 'bbBootbox-bbAlert-class' );
});

Template.bb_alert.helpers({
    body(){
        return Template.currentData().message || '';
    },
    button(){
        return Template.currentData().btn || i18n.label( pwixBootbox.i18n, 'alert.ok_btn' );
    },
    title(){
        return Template.currentData().title || '';
    }
});

Template.bb_alert.events({

    // remove the Blaze element from the DOM
    'hidden.bs.modal .bb-alert'( event, instance ){
        $( 'body' ).removeClass( 'bbBootbox-bbAlert-class' );
        Blaze.remove( instance.view );
    }
});
