(function(exports) {
    'use strict';

    exports.update = function(restPath, elId, rules) {
        var instance = {
            vue: new Vue({
                el: '#' + elId,
                data: {
                    item: {},
                    id: '',
                },
                methods: {
                    save: function(e) {
                        var self = this;
                        $('.ui.form').form(instance.formRules).form('validate form');
                    },
                    loadData: function() {
                        var self = this;
                        var id = self.id = $('#itemId').val();
                        var path = restPath + '/' + id;
                        axios.get(path)
                            .then(function(response) {
                                self.item = response.data;
                                console.log(self.item);
                            })
                            .catch(function(err) {
                                console.log(err);
                            });
                    },

                },
                ready: function() {
                    this.loadData();
                },

            }),
            update: function() {
                var self = this;
                var formData = $('.ui.form').form('get values');
                var id = $('.ui.form').form('get value', 'id');
                var $btn = $('#btnSave').addClass('disabled');
                axios.put(restPath + '/' + id, formData)
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
            },
            formRules: {

                inline: true,
                on: 'blur',
                fields: rules,
                onSuccess: function() {
                    instance.update();
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
