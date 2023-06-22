/*
 * pwix:bootbox:/src/client/components/bb_alert/bb_alert.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';

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
        return Template.currentData().btn || pwixI18n.label( I18N, 'alert.ok_btn' );
    },
    title(){
        return Template.currentData().title || '';
    }
});

Template.bb_alert.events({

    // when clicking on the button, call the callback if any
    'click .js-close'( event, instance ){
        if( Template.currentData().cb ){
            Template.currentData().cb();
        }
    },

    // remove the Blaze element from the DOM
    'hidden.bs.modal .bb-alert'( event, instance ){
        $( 'body' ).removeClass( 'bbBootbox-bbAlert-class' );
        Blaze.remove( instance.view );
    }
});
