import { AccountsTemplates } from 'meteor/useraccounts:core';
import { FlowRouter } from 'meteor/kadira:flow-router';

/**
 * @function onLogout
 * @desc Invoked upon execution of `AccountsTemplates.logout()`. Allows for custom
 *  redirects and/or other actions to be executed upon user logout.
 */
export const onLogout = function onLogout() {
  FlowRouter.go('/sign-in');
};
