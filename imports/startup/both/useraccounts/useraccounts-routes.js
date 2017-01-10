import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configureRoute('signIn', {
  template: "AtFormContainer"
});

AccountsTemplates.configureRoute('signUp', {
  template: "AtFormContainer"
});
