(function(exports) {
    'use strict';
    exports.apis = new Vue({
        el: '#plugins',
        data: {
            items: [],
            offset: '',
        },
        methods: {
            formatDate: function(value, fmt) {},
            delete: function(item) {
                var self = this;
                ui.confirm('删除确认', '确定删除插件' + item.name + '?', function() {

                    axios.delete("/api/plugins?id=" + item.id).then(function(response) {
                        if (response.data.result) {
                            ui.alert('', '删除成功', 'success');
                            self.items.$remove(item);
                        } else {
                            ui.alert('删除失败', response.data.msg, 'error');
                        }
                    }).catch(function(err) {
                        ui.alert('', '删除出错', 'error');
                        console.log(err);
                    })
                });

            },
            loadData: function() {
                var self = this;
                var path = '/api/plugins';
                if (this.offset) {
                    path = path + '&offset=' + this.offset;
                }
                axios.get(path)
                    .then(function(response) {
                        self.items = response.data.items;
                        self.offset = response.data.offset;
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
