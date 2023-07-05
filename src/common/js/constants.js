/*
 * pwix:bootbox/src/common/js/constants.js
 */

import { Modal } from 'meteor/pwix:modal';

Bootbox.C = {

    // the calling function
    Calling: {
        ALERT: 'ALERT',
        CONFIRM: 'CONFIRM'
    },

    // the buttons families an app may ask
    Family: {
        OKCANCEL: 'OKCANCEL',
        OKCLOSE: 'OKCLOSE',
        YESNO: 'YESNO'
    }
};

// private
Bootbox._btnDefs = {
    OKCANCEL: [
        {
            id: Modal.C.Button.CANCEL,
            result: false
        },
        {
            id: Modal.C.Button.OK,
            result: true
        }
    ],
    OKCLOSE: [
        {
            id: Modal.C.Button.CLOSE,
            result: false
        },
        {
            id: Modal.C.Button.OK,
            result: true
        }
    ],
    YESNO: [
        {
            id: Modal.C.Button.NO,
            result: false
        },
        {
            id: Modal.C.Button.YES,
            result: true
        }
    ]
};

I18N = "pwix:bootbox:i18n:namespace";
