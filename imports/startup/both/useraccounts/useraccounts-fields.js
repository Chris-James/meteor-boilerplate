/*******************************************************************************
 * @file useraccounts-fields
 * @overview Allows programmatic control over the input fields (or "controls")
 * included in the sign up form. This "programmatic control" encompasses what
 * fields are included or excluded from the form, field types, field styles,
 * field content (placeholders, labels, etc), if & how input is validated,
 * and more.
 *
 * Custom fields are added via `AccountsTemplates.addField()` and default fields
 * can be removed with calls to `AccountsTemplates.removeField()`. Removing default
 * fields is less common but necessary in order to override default settings.
 * @see {@link https://github.com/meteor-useraccounts/core/blob/master/Guide.md#add-a-field|UserAccounts: Adding/Removing Form Fields}
 *
 * Individual input fields are controlled via the properties passed into the
 * `AccountsTemplates.addField()` method. An exhaustive list of field properties
 * can be found in the UserAccounts documentation guide.
 * @see {@link https://github.com/meteor-useraccounts/core/blob/master/Guide.md#form-fields-configuration|UserAccounts: Form Fields Configuration}
 */

import { AccountsTemplates } from 'meteor/useraccounts:core';

// Remove default input fields provided by UserAccounts
AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');

// Add new input fields with custom properties
AccountsTemplates.addFields([
  {
    _id: 'email',
    type: 'email',
    required: true,
    placeholder: "Email address",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: "Please provide a valid email address.",
    template: 'TextInput'
  },{
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 6,
    errStr: "Please include at least 6 characters.",
    template: 'TextInput'
  },{
    _id: "password_again",
    type: "password",
    required: true,
    errStr: "Your passwords must match.",
    placeholder: "Password (again)",
    template: "TextInput"
  },{
    _id: 'favoriteColor',
    type: 'text',
    required: true,
    placeholder: 'Favorite Color',
    template: 'TextInput'
  }
]);
