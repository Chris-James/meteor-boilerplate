import { AccountsTemplates } from 'meteor/useraccounts:core';
import { onLogout } from './useraccounts-hooks.js';

AccountsTemplates.configure({

  // Defaults
  defaultLayout: 'Layout',
  defaultLayoutRegions: {},
  defaultContentRegion: 'main',

  // Appearance
  showForgotPasswordLink: true,

  // Validation
  negativeValidation: true,   // Highlight input elements in case of negative validation.

  // Links
  homeRoutePath: '/hello',    // Redirect target after successful form submission. Default is `/`.

  // Hooks
  onLogoutHook: onLogout
});
