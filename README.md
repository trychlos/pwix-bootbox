pwix:bootbox

Synoptic

    import { bbBootbox } from 'meteor/pwix:bootbox';

    alert()

        bbBootbox.alert( message );

            no title
            btn: OK

        or

        bbBootbox.alert({
            title: title,
            message: message
            btn: text
        });

    confirm()

        bbBootbox.confirm( message, ( res ) => {
            rest = true|false
        });

            no title
            btns:
                Cancel  -> false
                OK      -> true

        or

        bbBootbox.confirm({
            title: title,
            message: message,
            btn_true: text,
            btn_false: text
        }, ( res ) => {
            rest = true|false
        });

        or

        bbBootbox.confirm({
            title: title,
            message: message,
            btns_family: YESNO | OKCANCEL | OKCLOSE
        }, ( res ) => {
            rest = true|false
        });

As of 1.3.0, modal boxes become moveable by the user.
---
P. Wieser
- Last updated on 2023, Jan. 27th
