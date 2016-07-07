(function(exports) {
    'use strict';

    var formRules = {
        inline: true,
        on: 'blur',
        fields: {
            name: {
                identifier: 'name',
                rules: [{
                    type: 'regExp[/^[a-z0-9_-]{3,50}$/]',
                    prompt: '只能是字母和数字,长度3-50'
                }]
            },
            upstream_url: {
                identifier: 'upstream_url',
                rules: [{
                    type: 'empty',
                    prompt: 'url不合法'
                }]
            },
            request_path: {
                identifier: 'request_path',
                rules: [{
                    type: 'regExp[/^\/.+/]',
                    prompt: '必须是/开头的路径'
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
        axios.post('/api/apis', $('.ui.form').form('get values'))
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
        el: '#addapi',
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
