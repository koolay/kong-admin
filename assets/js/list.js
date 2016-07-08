(function(exports) {
    'use strict';
    exports.list = function(restPath, elId) {
        console.log(restPath);
        return new Vue({
            name: '接口',
            restPath: restPath,
            el: '#' + elId,
            data: {
                items: [],
                offset: '',
            },
            methods: {
                delete: function(item) {
                    var self = this;
                    ui.confirm('删除确认', '确定删除' + self.$options.name + item.name + '?', function() {

                        axios.delete(self.$options.restPath + "?id=" + item.id).then(function(response) {
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
                    var path = self.$options.restPath;
                    if (this.offset) {
                        path = path + '&offset=' + this.offset;
                    }
                    axios.get(path)
                        .then(function(response) {
                            ui.hideLoading();
                            self.items = response.data.items;
                            self.offset = response.data.offset;
                        })
                        .catch(function(err) {
                            ui.hideLoading();
                            console.log(err);
                        });
                },
            },
            ready: function() {
                ui.loading();
                console.log('ready ..');
                this.loadData();
            },
        });
    }
})(window);
