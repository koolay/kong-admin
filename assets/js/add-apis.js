(function(exports) {
    'use strict';
    var rules = {
        content: {
            identifier: 'content',
            rules: [{
                type: 'empty',
                prompt: 'json content 不能为空'
            }]
        },
    };
    var formRules = {
        inline: true,
        on: 'blur',
        fields: rules,
        onSuccess: function() {
            add();
            return false;
        },
        onFailure: function() {
            return false;
        }
    };
    var vue = new Vue({
        el: '#addapis',
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
    var add = function() {
        var $btn = $('#btnSave').addClass('disabled');
        axios.post('/api/batch/apis', $('.ui.form').form('get values'))
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
})(window);
