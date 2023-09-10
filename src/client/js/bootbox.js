/*
 * pwix:bootbox/src/client/js/bootbox.js
 */

import { Modal } from 'meteor/pwix:modal';

import _ from 'lodash';

import '../components/bb_dialog/bb_dialog.js';

/**
 * Display a message with a single button to acknowledge the dialog
 * @param {String} message to be displayed
 * 
 *  or
 * @param {Object} obj with fields as:
 *  - title: dialog title, defaulting to empty
 *  - message: dialog message, defaulting to empty
 *  - btn: button text, defaulting to 'OK'
 *  - cb: a function called when the user clicks the 'OK' button
 */
Bootbox.alert = function(){
    //console.log( 'bb.alert()', arguments );
    if( arguments.length >= 1 ){
        let args = {};
        if( _.isString( arguments[0] )){
            args.message = arguments[0];
        } else {
            args = { ...arguments[0] };
        }
        Modal.run({
            mdBody: 'bb_dialog',
            mdCloseByBackdrop: false,
            bootbox: Bootbox.C.Calling.ALERT,
            ...args
        });
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
    //console.debug( arguments );
    if( arguments.length >= 2 ){
        let args = {};
        if( _.isString( arguments[0] )){
            args.message = arguments[0];
        } else {
            args = { ...arguments[0] };
        }
        args.cb = arguments[1];
        Modal.run({
            mdBody: 'bb_dialog',
            mdCloseByBackdrop: false,
            bootbox: Bootbox.C.Calling.CONFIRM,
            ...args
        });
    } else {
        console.error( 'pwix:bootbox/confirm() expects two arguments' );
    }
};
