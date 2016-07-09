(function(exports) {
    'use strict';
    exports.detail = function(consumerId, elId) {
        return new Vue({
            el: '#' + elId,
            data: {
                id: '',
                item: {},
                additions: {
                    jwt: [],
                },
            },
            methods: {
                loadData: function() {
                    var self = this;
                    var getConsumerDetail = function() {
                        var path = '/api/consumers/' + consumerId;
                        return axios.get(path);
                    };
                    // load jwt credintial
                    var getCredential = function() {
                        return axios.get('/api/consumers/' + consumerId + '/jwt')
                    };

                    axios.all([getConsumerDetail(), getCredential()])
                        .then(axios.spread(function(consumerResponse, credentialResponse) {
                            ui.hideLoading();
                            self.item = consumerResponse.data.master;
                            self.additions.jwt = credentialResponse.data.items;
                            console.log(self.additions);
                        }))
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
                createCredential: function(consumer, pluginName) {
                    var self = this;
                    ui.confirm('确认', '确定要为用户' + consumer.username + '创建' + pluginName + '的凭证吗?', function() {
                        axios.post('/api/consumers/' + consumer.id + "/" + pluginName).then(function(response) {
                            if (response.data.result) {
                                ui.alert('', '创建成功', 'success');
                                self.additions.jwt.push(response.data);
                            } else {
                                ui.alert('创建失败', response.data.msg, 'error');
                            }
                        }).catch(function(err) {
                            ui.alert('', '创建出错', 'error');
                            console.log(err);
                        })
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
