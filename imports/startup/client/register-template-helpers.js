import { Template } from 'meteor/templating';

/*******************************************************************************
 * get
 * Returns a value from current template instance's `state` ReactiveDict.
 *
 * @param {str} field The specific property to retrieve.
 * @return {*} The current value of `field`.
 */
Template.registerHelper('get', function(field) {
  const instance = Template.instance();
  return instance.state.get(field);
});
