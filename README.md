## Packages

### Atmosphere (Meteor) Packages
#### User Accounts

`accounts-password`

Adds support for the password authentication strategy to the Meteor accounts system.

[`useraccounts:flow-routing`](https://github.com/meteor-useraccounts/flow-routing/)

User Accounts add-on package providing routes configuration capability via `kadira:flow-router`.

[`useraccounts:unstyled`](https://github.com/meteor-useraccounts/unstyled/)

Provides highly customizable user accounts UI templates unstyled.

#### UI
[`fourseven:scss`](https://github.com/fourseven/meteor-scss)

Adds support for the compilation of `.scss` files.

[`reactive-dict`](https://github.com/meteor/meteor/tree/master/packages/reactive-dict)

A general-purpose reactive datatype for use with `tracker`. Provides all of the functionality of the `Session` object documented in the main Meteor docs, such as reactive `get`, `set`, and `equals` functions.

#### Data
[`aldeed:collection2-core`](https://github.com/aldeed/meteor-collection2-core/)

Adds support for the collection2 library, used for attaching schemas to MongoDB.

[`check`](https://github.com/meteor/meteor/tree/master/packages/check)

A lightweight package for argument checking and general pattern matching.

[`dburles:collection-helpers`](https://github.com/dburles/meteor-collection-helpers/)

Sets up a transformation on your collections using Meteor's Mongo.Collection `transform` option, allowing for simple models with an interface that's similar to template helpers.

[`mdg:validated-method`](https://github.com/meteor/validated-method)

A wrapper package for `meteor.methods` that enables defining methods in a more structured, robust way.


#### Development

[`aldeed:template-extension`](https://github.com/aldeed/meteor-template-extension/)

Adds template features including global hooks, inheritance, and additional methods not available in the default Meteor templating package. __Required by useraccounts.__

[`meteortoys:allthings`](https://github.com/MeteorToys/allthings/)

In-app development tools. Available in the development environment only.


#### Routing
[`kadira:blaze-layout`](https://github.com/kadirahq/blaze-layout/)

A layout manager designed for use with Blaze and FlowRouter.

[`kadira:flow-router`](https://github.com/kadirahq/flow-router/)

Client side router. Inclues an API for changing URLs, redirecting, and reactively retrieving data from the URL.

### NPM Packages
`babel-runtime`

A default package installed in all new Meteor applications. Adds support for the Babel transpiler, used for converting ES2015+ code into ES5 code.

`bcrypt`

A default package installed in all new Meteor applications. Adds support for the bcrypt encryption library, used in Meteor core for handling various encryption tasks. The NPM version is installed to circumvent falling back to the version bundled with Meteor.

[`lodash.get`]()

[`meteor-node-stubs`](https://github.com/meteor/node-stubs)  

A default package installed in all new Meteor applications. Used for stubbing built-in modules in Node.js.

[`simpl-schema`](https://github.com/aldeed/node-simple-schema)  

Adds support for the SimpleSchema library. SimpleSchema validates JavaScript objects to ensure they match a schema. It can also clean the objects to automatically convert types, remove unsupported properties, and add automatic values such that the object is then more likely to pass validation.
