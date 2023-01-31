# pwix:bootbox

## What is it ?

A thin package for Meteor which encapsulates the creation and the display of modal dialogs:
- either as an `alert` dialog, which just display a message and waits for an aknowledgement of the user,
- or a `confirm` dialog, which waits for a Yes|No decision of the user.

Thanks to [jQuery UI](https://jqueryui.com/), the dialogs are draggable, and can be moved by the user.

## Usage

```
    import { pwixBootbox } from 'meteor/pwix:bootbox';

    alert()

        pwixBootbox.alert( message );

            no title
            btn: OK

        or

        pwixBootbox.alert({
            title: title,
            message: message
            btn: text
        });

    confirm()

        pwixBootbox.confirm( message, ( res ) => {
            rest = true|false
        });

            no title
            btns:
                Cancel  -> false
                OK      -> true

        or

        pwixBootbox.confirm({
            title: title,
            message: message,
            btn_true: text,
            btn_false: text
        }, ( res ) => {
            rest = true|false
        });

        or

        pwixBootbox.confirm({
            title: title,
            message: message,
            btns_family: YESNO | OKCANCEL | OKCLOSE
        }, ( res ) => {
            rest = true|false
        });
```

## NPM peer dependencies

Starting with v 1.1.0, we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.json`. Cf. the [Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies).
Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.1.0:
- @popperjs/core, starting with v 2.11,
- bootstrap, starting with v 5.2,
- jquery-ui-dist, starting with v 1.13.

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

---
P. Wieser
- Last updated on 2023, Jan. 27th
