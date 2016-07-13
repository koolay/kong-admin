(function(exports) {
    'use strict';
    exports.detail = function(restPath, elId) {
        return new Vue({
            restPath: restPath,
            el: '#' + elId,
            data: {
                id: '',
                item: {},
                additions: {}
            },
            methods: {
                loadData: function() {
                    var self = this;
                    var path = self.$options.restPath;
                    axios.get(path)
                        .then(function(response) {
                            ui.hideLoading();
                            self.item = response.data.master;
                            self.additions = response.data.additions;
                        })
                        .catch(function(err) {
                            ui.hideLoading();
                            console.log(err);
                        });
                },
                deletePlugin: function(plugin) {

                    var self = this;
                    ui.confirm('删除确认', '确定移除插件' + plugin.name + '?', function() {

                        axios.delete('/api/plugins/' + plugin.id).then(function(response) {
                            if (response.data.result) {
                                ui.alert('', '删除成功', 'success');
                                self.additions.$remove(plugin);
                            } else {
                                ui.alert('删除失败', response.data.msg, 'error');
                            }
                        }).catch(function(err) {
                            ui.alert('', '删除出错', 'error');
                            console.log(err);
                        })
                    });
                },
            },
            filters: {
                moment: function(timestamp) {
                    return moment(timestamp).format('YY-MM-DD HH:mm:ss');
                }
            },
            ready: function() {
                console.log('ready!');
                ui.loading();
                this.loadData();
            },
        });
    }
})(window);
