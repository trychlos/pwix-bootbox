/*
 * pwix:bootbox:/src/client/components/bb_confirm/bb_confirm.js
 */

import { pwixI18n as i18n } from 'meteor/pwix:i18n';

import '../../../common/js/index.js';

import './bb_confirm.html';

Template.bb_confirm.onCreated( function(){
    const self = this;

    self.BB = {
        families: {
            YESNO : {
                'true': 'yes_btn',
                'false': 'no_btn'
            },
            OKCANCEL: {
                'true': 'ok_btn',
                'false': 'cancel_btn'
            },
            OKCLOSE: {
                'true': 'ok_btn',
                'false': 'close_btn'
            }
        },
        family( f ){
            return self.BB.families[f];
        },
        // type = 'true'|'false'
        //  returns the label of the button
        button( type ){
            const data = Template.currentData();
            if( type === 'true' && data.btn_true ){
                return data.btn_true;
            }
            if( type === 'false' && data.btn_false ){
                return data.btn_false;
            }
            if( data.btns_family && Object.keys( this.bb.families ).includes( data.btns_family )){
                const key = self.BB.family( data.btns_family )[type];
                if( key ){
                    return i18n.label( bbBootbox.i18n, 'confirm.'+key );
                }
            }
            if( type === 'true' ){
                return i18n.label( bbBootbox.i18n, 'confirm.ok_btn' );
            }
            if( type === 'false' ){
                return i18n.label( bbBootbox.i18n, 'confirm.cancel_btn' );
            }
        }
    };
});

Template.bb_confirm.onRendered( function(){
    this.$( '.bb-confirm .modal' ).modal( 'show' );
    /*
    this.$( '.bb-confirm .modal' ).modal({
        backdrop: false,
        show: true
    });
    */
    this.$( '.bb-confirm .modal-dialog' ).draggable({
        handle: '.modal-header',
        cursor: 'grab'
    });
});

Template.bb_confirm.helpers({
    body(){
        return Template.currentData().message || '';
    },
    buttonFalse(){
        return Template.instance().BB.button( 'false' );
    },
    buttonTrue(){
        return Template.instance().BB.button( 'true' );
    },
    title(){
        return Template.currentData().title || '';
    }
});

Template.bb_confirm.events({
    'click .bb-false'( event, instance ){
        Template.currentData().cb( false );
        return false;
    },
    'click .bb-true'( event, instance ){
        Template.currentData().cb( true );
    },

    // remove the Blaze element from the DOM
    'hidden.bs.modal .bb-confirm'( event, instance ){
        Blaze.remove( instance.view );
    }
});
