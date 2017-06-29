/*******************************************************************************
 * @file useraccounts-hooks
 * @overview Contains User Accounts-related hook function definitions. Hook
 * functions are used to inject code into the user accounts process in order to
 * extend, override, or otherwise customize useraccounts' functionality.
 *
 * User Accounts provides 4 hook functions:
 *  `onLogoutHook`   Called upon invocation of `AccountsTemplates.logout()`.
 *                   Allows for custom redirects and/or other actions to be run
 *                   upon user logout.
 *  `onSubmitHook`   Called whenever `pwdForm` is being submitted.
 *  `preSignUpHook`  Called before `pwdForm` is submitted for sign-up.
 *  `postSignUpHook` Called after a new user account is successfully created.
 *
 * More in-depth information is provided for each hook in the User Accounts Guide.
 * @see {@link https://github.com/meteor-useraccounts/core/blob/master/Guide.md#options|User Accounts: Hooks}
 *
 * Note: Our hook functions are defined/declared in this file. They will not be
 * exectued unless they are explicitly included in the User Accounts configuration
 * code. This code is located in `./useraccounts-config.js`.
 */

import { FlowRouter } from 'meteor/kadira:flow-router';

/**
 * @function onLogout
 * @desc Invoked upon execution of `AccountsTemplates.logout()`. Allows for custom
 *  redirects and/or other actions to be executed upon user logout.
 */
export const onLogout = function onLogout() {
  FlowRouter.go('/sign-in');
};
