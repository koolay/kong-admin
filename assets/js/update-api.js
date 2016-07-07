(function(exports) {
    'use strict';
    exports.updateapis = new Vue({
        el: '#updateapis',
        data: {
            id: '',
            api: {},
        },
        methods: {
            updateApi: function(item) {
                var self = this;

                axios.put("/api/apis/" + item.id).then(function(response) {
                    if (response.data.result) {
                        ui.alert('', '保存成功', 'success');
                        self.items.$remove(item);
                    } else {
                        ui.alert('保存失败', response.data.msg, 'error');
                    }
                }).catch(function(err) {
                    ui.alert('', '保存出错', 'error');
                    console.log(err);
                })

            },
            loadData: function() {
                var self = this;
                var id = self.id = $('#apiId').val();
                var path = '/api/apis/' + id;
                axios.get(path)
                    .then(function(response) {
                        self.api = response.data;
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
