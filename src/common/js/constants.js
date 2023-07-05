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
            btn: Modal.C.Button.CANCEL,
            res: false
        },
        {
            btn: Modal.C.Button.OK,
            res: true
        }
    ],
    OKCLOSE: [
        {
            btn: Modal.C.Button.CLOSE,
            res: false
        },
        {
            btn: Modal.C.Button.OK,
            res: true
        }
    ],
    YESNO: [
        {
            btn: Modal.C.Button.NO,
            res: false
        },
        {
            btn: Modal.C.Button.YES,
            res: true
        }
    ]
};

I18N = "pwix:bootbox:i18n:namespace";
