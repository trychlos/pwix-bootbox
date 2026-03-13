/*
 * pwix:bootbox/src/common/js/configure.js
 */

import _ from 'lodash';

import { Logger } from 'meteor/pwix:logger';
import { ReactiveVar } from 'meteor/reactive-var';

const logger = Logger.get();

let _conf = {};
Bootbox._conf = new ReactiveVar( _conf );

Bootbox._defaults = {
    position: 0,
    verbosity: Bootbox.C.Verbose.CONFIGURE
};

/**
 * @summary Package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @locus Anywhere
 * @param {Object} o the runtime configuration of the package
 * @returns {Object} the package configuration
 */
Bootbox.configure = function( o ){
    if( o && _.isObject( o )){
        // check that keys exist
        let built_conf = {};
        Object.keys( o ).forEach(( it ) => {
            if( Object.keys( Bootbox._defaults ).includes( it )){
                built_conf[it] = o[it];
            } else {
                logger.warn( 'configure() ignore unmanaged key \''+it+'\'' );
            }
        });
        if( Object.keys( built_conf ).length ){
            _conf = _.merge( Bootbox._defaults, _conf, built_conf );
            Bootbox._conf.set( _conf );
            logger.verbose({ verbosity: _conf.verbosity, against: Bootbox.C.Verbose.CONFIGURE }, 'configure() with', built_conf );
        }
    }
    // also acts as a getter
    return Bootbox._conf.get();
};

_conf = _.merge( {}, Bootbox._defaults );
Bootbox._conf .set( _conf );
