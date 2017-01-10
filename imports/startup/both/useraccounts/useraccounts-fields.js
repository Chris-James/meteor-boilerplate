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
    errStr: 'Invalid email',
    template: 'TextInput'
  },{
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 6,
    errStr: 'At least 6 characters',
    template: 'TextInput'
  },
  {
    _id: 'favoriteColor',
    type: 'text',
    required: true,
    placeholder: 'Favorite Color',
    template: 'TextInput'
  }
]);
