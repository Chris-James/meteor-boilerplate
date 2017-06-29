import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

/*******************************************************************************
 * currentUser
 * Publishes some or all of the current user's Mongo document.
 *
 * @param {arr|str} [fields] The specific fields of the document to publish. If
 * no fields are specified the publication will return the entire document.
 */
Meteor.publish('currentUser', function(fields) {

  check(fields, Match.OneOf(String, Array, undefined));

  // Iteratively add each field to an object that will be used as the projection.
  // see: https://docs.mongodb.com/manual/reference/method/db.collection.find/#find-projection
  const filter = {};

  if (fields) {
    if (typeof fields === "string") {
      filter[fields] = 1;
    } else {
      fields.forEach(item => filter[item] = 1);
    }
  }

  return Meteor.users.find({
    "_id": this.userId
  }, {
    fields: filter
  });
});
