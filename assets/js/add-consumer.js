(function(exports) {
    'use strict';

    var formRules = {

        inline: true,
        on: 'blur',
        fields: {
            username: {
                identifier: 'username',
                rules: [{
                    type: 'regExp[/^[a-z0-9_-]{3,20}$/]',
                    prompt: '只能是字母和数字下划线,长度3-20'
                }]
            },
        },
        onSuccess: function() {
            add();
            return false;
        },
        onFailure: function() {
            return false;
        }

    };

    function add() {

        var $btn = $('#btnSave').addClass('disabled');
        axios.post('/api/consumers', $('.ui.form').form('get values'))
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
        el: '#addconsumer',
        data: {},
        methods: {
            save: function(e) {
                console.log('save');
                var self = this;
                $('.ui.form').form(formRules).form('validate form');
            },
        },
        ready: function() {
            console.log('ready ..');
        },
    });
})(window);
