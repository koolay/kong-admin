(function(exports) {
    'use strict';
    exports.detail = function(consumerId, elId) {
        return new Vue({
            el: '#' + elId,
            data: {
                id: '',
                item: {},
                additions: {
                    jwt:[],
                    'key-auth': [],
                    acls: [],
                },
            },
            methods: {
                loadData: function() {
                    var self = this;
                    var path = '/api/consumers/' + consumerId;
                    axios.get(path)
                        .then(function(response) {
                            ui.hideLoading();
                            self.item = response.data.master;
                        })
                        .catch(function(err) {
                            ui.hideLoading();
                            console.log(err);
                        });
                },
                deleteCredential: function(consumer, credential, pluginName) {

                    var self = this;
                    ui.confirm('删除确认', '确定移除凭证吗?', function() {
                        var path = '/api/consumers/' + consumer.id + "/" + pluginName + '/' + credential.id;
                        console.log(path);
                        axios.delete(path).then(function(response) {
                            if (response.data.result) {
                                ui.alert('', '删除成功', 'success');
                                self.additions[pluginName].$remove(credential);
                            } else {
                                ui.alert('删除失败', response.data.msg, 'error');
                            }
                        }).catch(function(err) {
                            ui.alert('', '删除出错', 'error');
                            console.log(err);
                        })
                    });
                },
                createCredential: function(consumer, pluginName, data) {
                    var self = this;
                    data = data ? data : {};
                    ui.confirm('确认', '确定要为用户' + consumer.username + '创建' + pluginName + '的凭证吗?', function() {
                        axios.post('/api/consumers/' + consumer.id + "/" + pluginName, data).then(function(response) {
                            if (response.data.result) {
                                ui.alert('', '创建成功', 'success');
                                self.additions[pluginName].push(response.data);
                            } else {
                                ui.alert('创建失败', response.data.msg, 'error');
                            }
                        }).catch(function(err) {
                            ui.alert('', '创建出错', 'error');
                            console.log(err);
                        })
                    });

                },
                createGroup: function(consumer, pluginName) {
                    var self = this;
                    ui.prompt('添加用户组', '添加用户组', '组名', function(groupName) {
                        self.createCredential(consumer, pluginName, {'group': groupName});
                    });
                },
                showCredential: function(consumer, pluginName) {

                    ui.loading();
                    var self = this;
                    // load credintial
                    axios.get('/api/consumers/' + consumerId + '/' + pluginName)
                        .then(function(response) {
                            ui.hideLoading();
                            self.additions[pluginName] = response.data.items;
                            console.log(self.additions);
                        })
                        .catch(function(err) {
                            ui.hideLoading();
                            console.log(err);
                        });

                },
            },
            ready: function() {
                console.log('ready!');
                ui.loading();
                this.loadData();
            },
        });
    }
})(window);
