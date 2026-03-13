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
    },

    // verbosity levels
    Verbose: {
        NONE:      0,
        CONFIGURE: 0x01 <<  0
    }
};

// private

I18N = "pwix:bootbox:i18n:namespace";
