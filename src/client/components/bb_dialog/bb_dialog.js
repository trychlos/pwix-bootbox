/*
 * pwix:bootbox:/src/client/components/bb_dialog/bb_dialog.js
 */

import { Modal } from 'meteor/pwix:modal';

import '../../../common/js/index.js';

import '../../stylesheets/bb_bootbox.less';

import './bb_dialog.html';

Template.bb_dialog.onCreated( function(){
    const self = this;

    self.BB = {
        families: {
            OKCANCEL: [
                {
                    id: Modal.C.Button.CANCEL,
                    dismiss: true,
                    result: false
                },
                {
                    id: Modal.C.Button.OK,
                    dismiss: true,
                    result: true
                }
            ],
            OKCLOSE: [
                {
                    id: Modal.C.Button.CLOSE,
                    dismiss: true,
                    result: false
                },
                {
                    id: Modal.C.Button.OK,
                    dismiss: true,
                    result: true
                }
            ],
            YESNO: [
                {
                    id: Modal.C.Button.NO,
                    dismiss: true,
                    result: false
                },
                {
                    id: Modal.C.Button.YES,
                    dismiss: true,
                    result: true
                }
            ]
        },

        // type = 'true'|'false'
        //  returns the label of the button
        button( type ){
            const data = Template.currentData();
            if( type === 'true' && data.btn_true ){
                return { id: Modal.C.Button.OK, label: data.btn_true, dismiss: true, result: true };
            }
            if( type === 'false' && data.btn_false ){
                return { id: Modal.C.Button.CANCEL, label: data.btn_false, dismiss: true, result: false };
            }
            if( data.btns_family && Object.keys( Bootbox.C.Family ).includes( data.btns_family )){
                const btn = self.BB.findBtn( data.btns_family, type );
                if( btn ){
                    return btn;
                }
            }
            if( type === 'true' ){
                return { id: Modal.C.Button.OK, dismiss: true, result: true };
            }
            if( type === 'false' ){
                return { id: Modal.C.Button.CANCEL, dismiss: true, result: false };
            }
        },

        // search for the type button in the family
        findBtn( family, type ){
            let found = null;
            if( Object.keys( self.BB.families ).includes( family )){
                self.BB.families[family].every(( btn ) => {
                    if( btn.result.toString() === type ){
                        found = btn;
                    }
                    return found === null;
                });
            }
            return found;
        }
    };
});

Template.bb_dialog.onRendered( function(){
    const self = this;

    // set the events target
    Modal.set({ target: self.$(' .bb-dialog' ) });

    // set the buttons
    switch( Template.currentData().bootbox ){
        case Bootbox.C.Calling.ALERT:
            if( Template.currentData().btn ){
                Modal.set({ buttons: { id: Modal.C.Button.OK, label: Template.currentData().btn }});
            } else {
                Modal.set({ buttons: Modal.C.Button.OK });
            }
            break;
        case Bootbox.C.Calling.CONFIRM:
            Modal.set({ buttons: [
                self.BB.button( 'false' ),
                self.BB.button( 'true' ),
            ]});
            break;
    };

    // set the title
    self.autorun(() => {
        Modal.set({ title: Template.currentData().title || '' });
    });
});

Template.bb_dialog.helpers({
    body(){
        return this.message || '';
    }
});

Template.bb_dialog.events({
    // when clicking on the button, call the callback if any
    'md-click .bb-dialog'( event, instance, data ){
        //console.debug( event, data, this );
        if( this.cb ){
            this.cb( data.button.parms.result );
        }
    }
});
