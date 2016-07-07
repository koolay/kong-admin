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
                    prompt: '只能是字母和数字,长度3-20'
                }]
            },
        },
        onSuccess: function() {
            update();
            return false;
        },
        'onFailure': function() {
            return false;
        }

    };

    function update() {
        var self = this;
        var formData = $('.ui.form').form('get values');
        var id = $('.ui.form').form('get value', 'id');
        var $btn = $('#btnSave').addClass('disabled');
        axios.put('/api/consumers/' + id, formData)
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
    exports.updateconsumer = new Vue({
        el: '#updateconsumer',
        data: {
            consumer: {},
            id: '',
        },
        methods: {
            save: function(e) {
                var self = this;
                $('.ui.form').form(formRules).form('validate form');
            },
            loadData: function() {
                var self = this;
                var id = self.id = $('#consumerId').val();
                var path = '/api/consumers/' + id;
                axios.get(path)
                    .then(function(response) {
                        self.consumer = response.data;
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
