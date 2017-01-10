import { AccountsTemplates } from 'meteor/useraccounts:core';
import { onLogout } from './useraccounts-hooks.js';

AccountsTemplates.configure({

  // Defaults
  defaultLayout: 'Layout',
  defaultLayoutRegions: {},
  defaultContentRegion: 'main',

  // Appearance
  showForgotPasswordLink: true,

  // Links
  // ...Redirect to `homeRoutePath` after successful form submission. Default is `/`.
  homeRoutePath: '/hello',

  // Hooks
  onLogoutHook: onLogout
});
