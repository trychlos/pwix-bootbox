# pwix:bootbox

## What is it ?

A thin package for Meteor which encapsulates the creation and the display of modal dialogs:

- either as an `alert` dialog, which just display a message and waits for an aknowledgement of the user,

- or a `confirm` dialog, which waits for a Yes|No decision of the user.

Thanks to the [pwix:modal](https://github.com/trychlos/pwix-modal/) package, the dialogs are draggable, and can be moved by the user.

## Usage

```
    import { Bootbox } from 'meteor/pwix:bootbox';

    alert()

        Bootbox.alert( message );

            no title
            btn: OK

        or

        Bootbox.alert({
            title: title,
            message: message,
            btn: text,
            cb: cb
        });

    confirm()

        Bootbox.confirm( message, ( res ) => {
            res = true|false
        });

            no title
            btns:
                Cancel  -> false
                OK      -> true

        or

        Bootbox.confirm({
            title: title,
            message: message,
            btn_true: text,
            btn_false: text
        }, ( res ) => {
            res = true|false
        });

        or

        Bootbox.confirm({
            title: title,
            message: message,
            btns_family: Bootbox.C.Family.YESNO | Bootbox.C.Family.OKCANCEL | Bootbox.C.Family.OKCLOSE
        }, ( res ) => {
            res = true|false
        });
```

Note that provided arguments are directly passed to `Modal.run()` method. You may so configure the opened modal as you want. See the `pwix:modal` documentation.

## Configuration

None at the moment.

## NPM peer dependencies

Starting with v 1.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.5.0:
```
    'lodash': '^4.17.21'
```

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

## Translations

New and updated translations are willingly accepted, and more than welcome. Just be kind enough to submit a PR on the [Github repository](https://github.com/trychlos/pwix-bootbox/pulls).

---
P. Wieser
- Last updated on 2023, Sep. 18th
