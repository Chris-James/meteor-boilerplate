import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './hello.html';

Template.Hello.onCreated(function onHelloCreated() {

  const instance = this;

  instance.state = new ReactiveDict();

  instance.autorun(() => {
    instance.subscribe('currentUser.fields', ['count', 'favoriteColor']);

    if (instance.subscriptionsReady()) {

      const user = Meteor.user();
      const count = user.get('count');
      const favoriteColor = user.get('favoriteColor');

      instance.state.set('counter', count);
      instance.state.set('favoriteColor', favoriteColor);

    }
  });
});

Template.Hello.events({
  'click .js-increment-count'(event, instance) {
    const count = instance.state.get('counter');

    // Increment the counter when button is clicked
    instance.state.set('counter', count + 1);
  },
  'click .js-sign-out'(event, instance) {
    AccountsTemplates.logout();
  }
});
