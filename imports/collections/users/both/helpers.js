import { Meteor } from 'meteor/meteor';

const get = require('lodash.get');

Meteor.users.helpers({
  /**
   * @method get
   * @desc Return the value of a top-level field on user's database document.
   * @see https://lodash.com/docs/4.17.4#get
   *
   * @param {Array|String} path The path of the field to retrieve.
   * @returns {*} The value of `field` or '' if value is undefined
   * @example
   *
   * user = {'name': {'firstName': 'Jo', 'lastName': 'Smith'}, ...};
   * user.get('name.firstName');
   * // => 'Jo'
   *
   * user.get(['name', 'firstName']);
   * // => 'Jo'
   *
   */
  get(path) {
    return get(this, path, '');
  }
});
