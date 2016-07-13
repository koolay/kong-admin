<template id="plugin-selection-template">
    <div class="ui fluid search selection dropdown">
        <input type="hidden" name="name" @change="select" value="jwt">
        <i class="dropdown icon"></i>
        <div class="default text">选择插件</div>
        <div class="menu">
            <div class="item" v-for="item in items" data-value="{{item}}">{{item}}</div>
        </div>
    </div>
</template>
<script>
Vue.component('plugin-selection', {
    template: '#plugin-selection-template',
    props:[],
    data: function() {
        return { items: ['jwt', 'key-auth'], };
    },
    methods: {
        select: function(e) {
            this.$root.$data.selectedPlugin = e.target.value;
        },
    },
    ready: function() {
        $('.ui.dropdown')
        .dropdown({
            useLabels: false,
            maxSelections: 3
          });
    },
});
</script>
