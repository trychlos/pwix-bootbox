# pwix:bootbox

## What is it ?

A thin package for Meteor which encapsulates the creation and the display of modal dialogs:

- either as an `alert` dialog, which just display a message and waits for an aknowledgement of the user,

- or a `confirm` dialog, which waits for a Yes|No decision of the user.

Thanks to the [pwix:modal](https://github.com/trychlos/pwix-modal/) package, the dialogs are draggable, and can be moved by the user.

## Usage

```js
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

## What does it provide ?

### `Bootbox`

A globally exported object with following properties:

#### Methods

##### `Bootbox.alert()`

##### `Bootbox.configure()`

See [below](#configuration).

##### `Bootbox.confirm()`

## Configuration

The package's behavior can be configured through a call to the `Bootbox.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `position`

    The default positionning of the dialog boxes.

    See `pwix:modal` for the possible values.

    Defaults to `Modal.C.Position.AUTO`.

- `verbosity`

    Define the expected verbosity level.

    The accepted value can be any or-ed combination of following:

    - `Forms.C.Verbose.NONE`

        Do not display any trace log to the console

    - `Forms.C.Verbose.CONFIGURE`

        Trace `Forms.configure()` calls and their result

        this is the default value.

Please note that `Bootbox.configure()` method should be called in the same terms both in client and server sides.

Remind too that Meteor packages are instanciated at application level. They are so only configurable once, or, in other words, only one instance has to be or can be configured. Addtionnal calls to `Bootbox.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

`Bootbox.configure()` is a reactive data source.

## NPM peer dependencies

Starting with v 1.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.6.0:

```js
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
- Last updated on 2026, Apr. 2nd
