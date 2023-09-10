/*
 * pwix:bootbox:/src/client/components/bb_dialog/bb_dialog.js
 */

import { Modal } from 'meteor/pwix:modal';
import { pwixI18n } from 'meteor/pwix:i18n';

import '../../../common/js/index.js';

import '../../stylesheets/bb_bootbox.less';

import './bb_dialog.html';

Template.bb_dialog.onCreated( function(){
    const self = this;

    self.BB = {
        families: {
            YESNO : {
                'true': Modal.C.Button.YES,
                'false': Modal.C.Button.NO
            },
            OKCANCEL: {
                'true': Modal.C.Button.OK,
                'false': Modal.C.Button.CANCEL
            },
            OKCLOSE: {
                'true': Modal.C.Button.OK,
                'false': Modal.C.Button.CLOSE
            }
        },

        // type = 'true'|'false'
        //  returns the label of the button
        button( type ){
            const data = Template.currentData();
            if( type === 'true' && data.btn_true ){
                return { id: Modal.C.Button.OK, label: data.btn_true, result: true };
            }
            if( type === 'false' && data.btn_false ){
                return { id: Modal.C.Button.CANCEL, label: data.btn_false, result: false };
            }
            if( data.btns_family && Object.keys( Bootbox.C.Family ).includes( data.btns_family )){
                const btn = self.BB.findBtn( data.btns_family, type );
                if( btn ){
                    return btn;
                }
            }
            if( type === 'true' ){
                return { id: Modal.C.Button.OK, result: true };
            }
            if( type === 'false' ){
                return { id: Modal.C.Button.CANCEL, result: false };
            }
        },

        // search for the type button in the family
        findBtn( family, type ){
            let found = null;
            Object.keys( Bootbox._btnDefs ).every(( f ) => {
                if( f === family ){
                    Bootbox._btnDefs[f].every(( btn ) => {
                        if( btn.result.toString() === type ){
                            found = btn;
                            return false;
                        }
                        return true;
                    });
                    return false;
                }
                return true;
            });
            return found;
        }
    };
});

Template.bb_dialog.onRendered( function(){
    const self = this;

    // set the events target
    Modal.set({ target: $(' .bb-dialog' ) });

    // set the title
    self.autorun(() => {
        Modal.set({ title: Template.currentData().title || '' });
    });

    // set the buttons
    self.autorun(() => {
        switch( Template.currentData().bootbox ){
            case Bootbox.C.Calling.ALERT:
                if( Template.currentData().btn ){
                    Modal.setButtons({ id: Modal.C.Button.OK, label: Template.currentData().btn });    
                }
                break;
            case Bootbox.C.Calling.CONFIRM:
                Modal.setButtons([
                    self.BB.button( 'false' ),
                    self.BB.button( 'true' ),
                ]);
                break;
        }
    });
});

Template.bb_dialog.helpers({
    body(){
        return Template.currentData().message || '';
    }
});

Template.bb_dialog.events({
    // when clicking on the button, call the callback if any
    'md-click .bb-dialog'( event, instance, data ){
        //console.debug( event, data );
        if( Template.currentData().bootbox === Bootbox.C.Calling.CONFIRM ){
            if( Template.currentData().cb ){
                Template.currentData().cb( data && data.btnObj ? data.btnObj.result : null );
            }
        }
    },

    // alert Bootbox has a single button, but may also be closed via the header cross close button
    //  so we consider that close is same than acknowledge in this case
    'md-close .bb-dialog'( event, instance ){
        //console.debug( event );
        if( Template.currentData().bootbox === Bootbox.C.Calling.ALERT ){
            if( Template.currentData().cb ){
                Template.currentData().cb();
            }
        }
    }
});
