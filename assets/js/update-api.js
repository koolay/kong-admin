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
            updateApi();
            return false;
        },
        'onFailure': function() {
            return false;
        }
    };

    function updateApi() {
        var self = this;
        var formData = $('.ui.form').form('get values');
        var id = $('.ui.form').form('get value', 'id');
        var $btn = $('#btnSave').addClass('disabled');
        axios.put('/api/apis/' + id, formData)
            .then(function(response) {
                if (response.data.result) {
                    ui.alert('', '保存成功', 'success');
                } else {
                    ui.alert('保存失败', response.data.msg, 'error');
                }
                $btn.removeClass('disabled');
            })
            .catch(function(err) {
                console.log(err);
                ui.alert('保存失败', err, 'error');
                $btn.removeClass('disabled');
            });

    };
    exports.updateapis = new Vue({
        el: '#updateapis',
        data: {
            api: {},
            id: '',
        },
        methods: {
            save: function(e) {
                var self = this;
                $('.ui.form').form(formRules).form('validate form');
            },
            loadData: function() {
                var self = this;
                var id = self.id = $('#apiId').val();
                var path = '/api/apis/' + id;
                axios.get(path)
                    .then(function(response) {
                        self.api = response.data;
                        console.log(self.api);
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            },

        },
        ready: function() {
            console.log('ready ..');
            this.loadData();
        },
    });
})(window);
