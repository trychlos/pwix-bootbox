# pwix:bootbox

## What is it ?

A thin package for Meteor which encapsulates the creation and the display of modal dialogs:
- either as an `alert` dialog, which just display a message and waits for an aknowledgement of the user,
- or a `confirm` dialog, which waits for a Yes|No decision of the user.

Thanks to [jQuery UI](https://jqueryui.com/), the dialogs are draggable, and can be moved by the user.

### Usage

```
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
```

---
P. Wieser
- Last updated on 2023, Jan. 27th
