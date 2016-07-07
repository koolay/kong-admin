(function(exports) {
    'use strict';

    var formRules = {
        inline: true,
        on: 'blur',
        fields: {
            name: {
                identifier: 'name',
                rules: [{
                    type: 'empty',
                    prompt: '请选择插件'
                }]
            },
            api: {
                identifier: 'api',
                rules: [{
                    type: 'empty',
                    prompt: 'api名称或id'
                }]
            },

        },
        onSuccess: function() {
            addApi();
            return false;
        },
        'onFailure': function() {
            return false;
        }
    };

    function addApi() {
        var $btn = $('#btnSave').addClass('disabled');
        axios.post('/api/plugins', $('.ui.form').form('get values'))
            .then(function(response) {
                if (response.data.result) {
                    ui.alert('', '保存成功', 'success');
                } else {
                    ui.alert('', response.data.msg, 'error');
                }
                $btn.removeClass('disabled');
            })
            .catch(function(err) {
                $btn.removeClass('disabled');
                console.log(err);
                ui.alert('保存失败', response.data.msg, 'error');
            });
    };
    exports.addapi = new Vue({
        el: '#addplugin',
        data: {},
        methods: {
            save: function(e) {
                var self = this;
                $('.ui.form').form(formRules).form('validate form');
            },
        },
        ready: function() {
            console.log('ready ..');
        },
    });
})(window);
