/*
 * pwix:bootbox/src/common/js/config.js
 */

//console.log( 'pwix:bootbox/src/common/js/config.js defining globally exported pwixBootbox object' );

pwixBootbox = {
    // client-specific data and functions
    client: {},

    conf: {
    },

    // should be *in same terms* called both by the client and the server
    configure: function( o ){
        console.log( 'pwix:bootbox configure() with', o );
        pwixBootbox.conf = {
            ...pwixBootbox.conf,
            ...o
        };
    },

    // internationalization
    i18n: {},

    // server-specific data and functions
    server: {}
};
