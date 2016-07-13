<template id="key-auth-template">
  <label>参数名</label>
    <div class="field">
      <input placeholder="key_names" name="config.key_names" type="text" value="apikey" >
    </div>

    <div class="field">
        <div class="ui checkbox">
          <input name="config.hide_credentials" type="checkbox" >
          <label>hide_credentials</label>
        </div>
    </div>
</template>

<script>
Vue.component('key-auth', {
    template: '#key-auth-template',
    props: ['show'],
});
</script>
