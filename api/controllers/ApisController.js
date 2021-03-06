/**
 * ApisController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var url = require('url');

module.exports = {
    find: function(req, res) {
        var id = req.param('id');
        var name = req.param('name');
        if (id) {
            var path = '/apis/' + id;
            KongApiService.get(path, function(response) {
                if (response.result === false) {
                    return res.json(response);
                }
                var path = '/apis/' + id + '/plugins/'
                var api = response.data;
                KongApiService.get(path, function(response) {
                    var plugins = response.data.data;
                    return res.json({
                        master: api,
                        additions: plugins
                    });

                });

            });

        } else {

            var size = 100;
            var offset = req.param('offset');

            var path = '/apis?size=' + size;
            path = offset ? path + '&offset=' + offset : path;
            path = name ? path + '&name=' + name : path;

            KongApiService.get(path, function(response) {
                if (response.result === false) {
                    return res.json(response);
                }
                var nextUrl = response.data.next;
                if (nextUrl) {
                    offset = url.parse(nextUrl, true).query.offset;
                }

                async.each(response.data.data, function(item, callback) {
                    var path = '/apis/' + item.id + '/plugins/';
                    KongApiService.get(path, function(data) {
                        var plugins = data.data.data;
                        var plugins = plugins.map(function(item) {
                            return item.name;
                        });
                        var pluginsStr = plugins.toString();
                        item.plugins = pluginsStr;
                        callback();
                    });
                }, function(error) {

                    return res.json({
                        offset: offset,
                        items: response.data.data
                    });
                });

            });

        }
    },

    //DELETE /apis/<id>
    destroy: function(req, res) {
        id = req.param('id');
        if (!id) {
            return res.json(404, {
                result: false,
                msg: 'id not found'
            });
        }
        KongApiService.delete('/apis/' + id, function(response) {
            if (response.result === false) {
                return res.json(response);
            }
            return res.json(response);
        });
    },

    //POST /apis
    create: function(req, res) {
        var param = {
            name: req.param('name'),
            //request_host: '',//req.param('request_host'),
            request_path: req.param('request_path'),
            strip_request_path: req.param('strip_request_path') == 'on',
            preserve_host: req.param('preserve_host') == 'on',
            upstream_url: req.param('upstream_url')
        };
        KongApiService.post('/apis', param, function(response) {
            if (response.result === false) {
                return res.json(response);
            }
            return res.json(response);
        });
    },

    //POST /batch/apis
    batchCreate: function(req, res) {
        var content = req.param('content');
        if (!content) {
            return res.json({
                result: false,
                msg: 'empty'
            });
        }

        try {
            var apis = JSON.parse(content);
        } catch (e) {
            return res.json({
                result: false,
                msg: '不是有效的json格式'
            });
        }
        if (!_.isArray(apis)) {
            return res.json({
                result: false,
                msg: 'must be array'
            });
        }

        var paramList = apis.map(function(api) {
            return {
                name: api.name,
                request_path: api.request_path,
                strip_request_path: api.strip_request_path,
                preserve_host: api.preserve_host,
                upstream_url: api.upstream_url
            };

        });

        KongApiService.batchPost('/apis', paramList, function(response) {
            return res.json(response);
        });


    },
    update: function(req, res) {
        var id = req.param('id');
        if (!id) {
            return res.json({
                result: false,
                msg: 'id is null'
            });
        }
        var param = {
            name: req.param('name'),
            //request_host: req.param('request_host'),
            request_path: req.param('request_path'),
            strip_request_path: req.param('strip_request_path') == 'on',
            preserve_host: req.param('preserve_host') == 'on',
            upstream_url: req.param('upstream_url')
        };
        KongApiService.patch('/apis/' + id, param, function(response) {
            if (response.result === false) {
                return res.json(response);
            }
            return res.json(response);
        });
    },

    //修改接口插件定义
    updatePlugin: function(req, res) {
        var apiId = req.param('api_id');
        var pluginId = req.param('plugin_id');
        var body = req.body;
        if (!apiId || !pluginId || !body) {
            return res.json({
                result: false,
                msg: 'invalid params'
            });
        }

        var restPath = '/apis/' + apiId + '/plugins/' + pluginId;
        KongApiService.patch(restPath, body, function(response) {
            if (response.result === false) {
                return res.json(response);
            }
            return res.json(response);
        });

    }
};
