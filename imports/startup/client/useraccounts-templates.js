import { Template } from 'meteor/templating';

// Substitute custom templates User Accounts' default templates
// ..Find custom templates in `/imports/ui/pages/useraccounts/_components`
Template.atTitleCustom.replaces('atTitle');
Template.atPwdFormBtnCustom.replaces('atPwdFormBtn');
Template.atSignupLinkCustom.replaces('atSignupLink');
