import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './hello.html';

Template.Hello.onCreated(function onHelloCreated() {

  const instance = this;

  instance.counter = new ReactiveVar();
  instance.favoriteColor;

  instance.autorun(() => {
    instance.subscribe('currentUser.fields', ['count', 'favoriteColor']);

    if (instance.subscriptionsReady()) {

      const user = Meteor.user();
      const count = user.get('count');
      const favoriteColor = user.get('favoriteColor');

      instance.counter.set(count);
      instance.favoriteColor = favoriteColor;

    }
  });
});

Template.Hello.helpers({
  counter() {
    const instance = Template.instance();
    return instance.counter.get();
  },
  favoriteColor() {
    const instance = Template.instance();
    return instance.favoriteColor;
  }
});

Template.Hello.events({
  'click .js-increment-count'(event, instance) {
    const count = instance.counter.get();

    // Increment the counter when button is clicked
    instance.counter.set(count + 1);
  },
  'click .js-sign-out'(event, instance) {
    AccountsTemplates.logout();
  }
});
