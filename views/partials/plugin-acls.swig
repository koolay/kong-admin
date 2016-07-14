<template id="acls-template">
    <label>whitelist</label>
    <div class="field">
      <input placeholder="whitelist" name="config.whitelist" type="text">
    </div>
    <label>blacklist</label>
    <div class="field">
     <input placeholder="blacklist" name="config.blacklist" type="text">
    </div>
</template>
<script>
Vue.component('acl', {
    template: '#acls-template',
    props:['plugin'],
    ready: function() {
        this.$on('select', function(e) {
            console.log(e);
        });
    },

});
</script>
