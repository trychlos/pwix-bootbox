/*
 * pwix:bootbox/src/common/js/i18n.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';

Bootbox.i18n = {
    'en_US': {
        alert: {
            ok_btn: 'OK'
        },
        confirm: {
            ok_btn: 'OK',
            cancel_btn: 'Cancel',
            close_btn: 'Close',
            yes_btn: 'Yes',
            no_btn: 'No'
        }
    },

    'fr_FR': {
        alert: {
            ok_btn: 'OK'
        },
        confirm: {
            ok_btn: 'OK',
            cancel_btn: 'Annuler',
            close_btn: 'Fermer',
            yes_btn: 'Oui',
            no_btn: 'Non'
        }
    }
};

Bootbox.i18n.en = Bootbox.i18n.en_US;
Bootbox.i18n.fr = Bootbox.i18n.fr_FR;

pwixI18n.namespace( I18N, Bootbox.i18n );

/**
 * @returns {String} the i18n namespace of this package
 */
Bootbox.i18n.namespace = function(){
    return I18N;
};
