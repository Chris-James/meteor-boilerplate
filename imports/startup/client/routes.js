import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import "top-level" pages
import '/imports/ui/pages/layout/';
import '/imports/ui/pages/useraccounts/';
import '/imports/ui/pages/landing-page/';
import '/imports/ui/pages/hello/';

// Define route `triggers`
//  These allow you to perform actions before entering & after exiting a route

FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn], {
  // Protect desired private routes with `.ensureSignedIn`
  except: ['LandingPage']
});

// Define routes
FlowRouter.route('/', {
  name: 'LandingPage',
  action() {
    BlazeLayout.render('Layout', { main: 'LandingPage' });
  }
})

FlowRouter.route('/hello', {
  name: 'Hello',
  action() {
    BlazeLayout.render('Layout', { main: 'Hello' });
  },
});
