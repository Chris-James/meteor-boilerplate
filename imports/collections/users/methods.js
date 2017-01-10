import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

/**
 * @function updateUser
 * @desc Updates one or more fields in target user's database document.
 *
 * @param {String} userId The unique `_id` of the user to update
 * @param {Object} field Contains the specific field(s) to update and their
 *  associated data as key-value pairs.
 *
 */
export const updateUser = new ValidatedMethod({
  name: 'user.update',
  validate: null,
  run({userId, field}) {
    Meteor.users.update({
      _id: userId
    }, {
      $set: field
    });
  }
});
