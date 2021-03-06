/**
 * PluginsController
 *
 * @description :: Server-side logic for managing plugins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var async = require('async');

module.exports = {

    find: function(req, res) {

        var id = req.param('id');
        if (id) {
            var path = '/plugins/' + id;
            KongApiService.get(path, function(response) {
                if (response.result === false) {
                    return res.json(response);
                }
                var apiId = response.data.api_id;
                KongApiService.get('/apis/' + apiId, function(apiResponse) {
                    return res.json({
                        master: response.data,
                        api: apiResponse.data
                    });
                });
            });

        } else {

            var size = 20;
            var offset = req.param('offset');
            var path = '/plugins?size=' + size;
            path = offset ? path + '&offset=' + offset : path;

            KongApiService.get(path, function(response) {
                var nextUrl = response.data.next;
                if (nextUrl) {
                    offset = url.parse(nextUrl, true).query.offset;
                }
                async.each(response.data.data, function(item, callback) {
                    KongApiService.get('/apis/' + item.api_id, function(data) {
                        item.api_name = data.data.name;
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
        KongApiService.delete('/plugins/' + id, function(response) {
            return res.json(response);
        });
    },

    //POST /apis
    create: function(req, res) {
        var values = req.allParams();
        var api = values.api;
        delete values.api;
        KongApiService.post('/apis/' + req.param('api') + '/plugins/', values, function(response) {
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
            strip_request_path: req.param('strip_request_path') == true,
            preserve_host: req.param('preserve_host') == true,
            upstream_url: req.param('upstream_url')
        };
        KongApiService.patch('/plugins/' + id, param, function(response) {
            return res.json(response);
        });
    },

};
