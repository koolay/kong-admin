<template id="jwt-template">
    <div class="field">
      <input placeholder="uri_param_names" name="config.uri_param_names" type="text" value="jwt" >
    </div>
    <div class="field">
      <input placeholder="exp,nbf" name="config.claims_to_verify" type="text" value="exp">
    </div>
    <div class="field">
     <input placeholder="default iss" name="config.key_claim_name" type="text" value="iss">
    </div>
</template>
<script>
Vue.component('jwt', {
    template: '#jwt-template',
    props:['plugin'],
    ready: function() {
        this.$on('select', function(e) {
            console.log(e);
        });
    },

});
</script>
