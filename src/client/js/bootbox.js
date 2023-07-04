/*
 * pwix:bootbox/src/client/js/bootbox.js
 */
import '../components/bb_alert/bb_alert.js';
import '../components/bb_confirm/bb_confirm.js';

/**
 * Display a message with a single button to acknowledge the dialog
 * @param {String} message to be displayed
 * 
 *  or
 * @param {Object} obj with fields as:
 *  - title: dialog title, defaulting to empty
 *  - message: dialog message, defaulting to empty
 *  - btn: button text, defaulting to 'OK'
 */
Bootbox.alert = function(){
    //console.log( 'bb.alert()', arguments );
    if( arguments.length >= 1 ){
        let args = {};
        if( typeof arguments[0] === 'string' ){
            args.message = arguments[0];
        } else {
            args = { ...arguments[0] };
        }
        Blaze.renderWithData( Template.bb_alert, args, $( 'body' )[0] );
    } else {
        console.error( 'pwix:bootbox/alert() expects (at least) one argument' );
    }
};

/**
 * Display a message with a OK/Cancel couple of buttons
 * @param {String} message to be displayed
 * @param {Functions} cb a callback function which will be invoked with a boolean true if OK, or false if Cancel
 * 
 *  or
 * @param {Object} obj with fields as:
 *  - title: dialog title, defaulting to empty
 *  - message: dialog message, defaulting to empty
 *  - btn_true: button 'true' text, defaulting to 'OK'
 *  - btn_false: button 'false' text, defaulting to 'Cancel'
 * @param {Functions} cb a callback function which will be invoked with a boolean true if OK, or false if Cancel
 * 
 *  or
 * @param {Object} obj with fields as:
 *  - title: dialog title, defaulting to empty
 *  - message: dialog message, defaulting to empty
 *  - btn_family: type de buttons YESNO, OKCANCEL or OKCLOSE
 * @param {Functions} cb a callback function which will be invoked with a boolean true if OK, or false if Cancel
 */
Bootbox.confirm = function(){
    if( arguments.length >= 2 ){
        let args = {};
        if( typeof arguments[0] === 'string' ){
            args.message = arguments[0];
        } else {
            args = { ...arguments[0] };
        }
        args.cb = arguments[1];
        Blaze.renderWithData( Template.bb_confirm, args, $( 'body' )[0] );
    } else {
        console.error( 'pwix:bootbox/confirm() expects two arguments' );
    }
};
