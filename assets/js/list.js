(function(exports) {
    'use strict';
    exports.list = function(restPath, elId, name) {
        console.log(restPath);
        return new Vue({
            name: name,
            restPath: restPath,
            el: '#' + elId,
            data: {
                items: [],
                offset: '',
                key: '',
            },
            methods: {
                delete: function(item, deletingName) {
                    var self = this;
                    ui.confirm('删除确认', '确定删除' + self.$options.name + deletingName + '?', function() {

                        axios.delete(self.$options.restPath + "/" + item.id).then(function(response) {
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
                search: function() {
                    var self = this;
                    self.loadData();
                },
                loadData: function() {
                    var self = this;
                    var path = self.$options.restPath;
                    if (self.offset) {
                        path = path + '?offset=' + this.offset;
                    }
                    if (self.key) {
                        path = path + '?name=' + self.key;
                    }
                    axios.get(path)
                        .then(function(response) {
                            ui.hideLoading();
                            if (response.data.result === false) {
                                ui.alert('出错', response.data.msg, 'error');
                            }
                            self.items = response.data.items;
                            self.offset = response.data.offset;
                        })
                        .catch(function(err) {
                            ui.hideLoading();
                            ui.alert('出错', '服务器端错误', 'error');
                            console.log(err);
                        });
                },
            },
            filters: {
                moment: function(timestamp) {
                    return moment(timestamp).format('YY-MM-DD HH:mm:ss');
                }
            },
            ready: function() {
                ui.loading();
                console.log('ready ..');
                this.loadData();
            },
        });
    }
})(window);
