import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.publish('currentUser.fields', function(fields) {

  check(fields, Array);

  const filter = {};
  fields.forEach(function(item) {
    filter[item] = 1;
  });

  return Meteor.users.find({
    "_id": this.userId
  }, {
    fields: filter
  });
});
