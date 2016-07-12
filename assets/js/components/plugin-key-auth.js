// define
var keyAuthComponent= Vue.extend({
  template:
'<div class="field">' +
  '<input placeholder="key_names" name="config.key_names" type="text" value="apikey" >' +
'</div>' +
'<div class="field">'+
  '<input placeholder="hide_credentials" name="config.hide_credentials" type="text" value="exp">' +
'</div>'
});

// register
Vue.component('plugin-key-auth', keyAuthComponent);
