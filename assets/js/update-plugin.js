(function(exports) {
    'use strict';

    var elId = 'updateplugin';
    var formRules = {
        inline: true,
        on: 'blur',
        fields: {},
        onSuccess: function() {
            var formData = $('.ui.form').form('get values');
            var id = $('.ui.form').form('get value', 'id');
            var apiId = $('.ui.form').form('get value', 'apiId');
            var $btn = $('#btnSave').addClass('disabled');
            var restPath = '/api/apis/' + apiId +'/plugins/'+ id;
            delete formData['apiId'];
            axios.put(restPath, formData)
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
            return false;
        },
        onFailure: function() {
            return false;
        }
    };
    new Vue({
        el: '#' + elId,
        data: {
            item: {},
            api: {},
            id: '',
            selectedPlugin: 'jwt',
        },
        methods: {
            save: function(e) {
                var self = this;
                $('.ui.form').form(formRules).form('validate form');
            },
            loadData: function() {
                console.log('loading..');
                var self = this;
                var id = self.id = $('#itemId').val();
                var path = '/api/plugins/' + id;
                axios.get(path)
                    .then(function(response) {
                        ui.hideLoading();
                        self.item = response.data.master;
                        self.selectedPlugin = response.data.master.name;
                        self.api = response.data.api;
                    })
                    .catch(function(err) {
                        ui.hideLoading();
                        console.log(err);
                    });
            },

        },
        ready: function() {
            ui.loading();
            this.loadData();
        },

    });

})(window);
