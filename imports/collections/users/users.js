import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

// For historical reasons, the `profile` field on every user is automatically
// writeable by that user from the client. It’s also automatically published to
// the client for that particular user. To eliminate this security risk deny all
// client-side updates to user documents.
// see: https://guide.meteor.com/accounts.html#dont-use-profile
Meteor.users.deny({
  update() {
    return true;
  },
});

const emailSchema = new SimpleSchema({
  address: String,
  verified: Boolean
});

const userSchema = new SimpleSchema({
  // Required by Meteor
  _id: String,
  emails: [emailSchema],
  createdAt: String,
  services: {
    type: Object,
    blackbox: true
  },
  // Application
  favoriteColor: String,
  count: SimpleSchema.Integer
});

Meteor.users.attachSchema(userSchema);
