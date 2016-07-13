(function(exports) {
    'use strict';

    exports.add = function(restPath, elId, rules) {
        console.log('add .');
        var instance = {
            vue: new Vue({
                el: '#' + elId,
                data: { selectedPlugin: 'jwt', },
                methods: {
                    save: function(e) {
                        var self = this;
                        $('.ui.form').form(instance.formRules).form('validate form');
                    },
                },
                ready: function() {
                    console.log('ready ..');
                },
            }),
            add: function() {
                var $btn = $('#btnSave').addClass('disabled');
                axios.post(restPath, $('.ui.form').form('get values'))
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
            },
            formRules: {

                inline: true,
                on: 'blur',
                fields: rules,
                onSuccess: function() {
                    instance.add();
                    return false;
                },
                onFailure: function() {
                    return false;
                }
            },

        };
        return instance;
    }
})(window);
