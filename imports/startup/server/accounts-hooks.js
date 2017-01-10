import { Accounts } from 'meteor/accounts-base';

/**
 * @method onCreateUser
 * @desc Called _server-side_ whenever a new user is created. Allows programmatic
 *  control of the contents of new user documents.
 *  http://docs.meteor.com/api/accounts-multi.html#AccountsServer-onCreateUser
 *
 * @param  {Object} options The information gathered/generated during sign up process.
 * @param  {Object} options.profile Contains info gathered from useraccounts forms
 *  and/or information generated within useraccounts hooks.
 * @param  {Object} user  Created on server. A proposed user object that contains all
 *  automatically generated fields required for the user to log in, including `_id`.
 *
 * @return {Object} user The finalized document to be inserted in Meteor.users collection.
 */
Accounts.onCreateUser((options, user) => {

  // Move value of `favoriteColor` into a top-level field as per Meteor best-practices
  // ...https://guide.meteor.com/accounts.html#top-level-fields
  user.favoriteColor = options.profile.favoriteColor;

  // Initialize count to 0 in a top-level field
  user.count = 0;

  return user;
});
