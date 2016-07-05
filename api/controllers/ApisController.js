/**
 * ApisController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var url = require('url');
var axios = require('axios');

module.exports = {
    find: function(req, res) {
        var size = parseInt(req.param('per_page'));
        var page = parseInt(req.param('page'));
        var offset = req.param('offset');
        var path = '/apis?size=' + size;
        path = offset ? path + '&offset=' + offset : path;

        KongApiService.get(path, function(response) {
            var next = response.data.next;
            if (next) {
                next = '/api/apis?size=' + size + '&offset=' + url.parse(next, true).query.offset;
            }

            return res.json({
                links: {
                    pagination: {
                        total: response.data.total,
                        per_page: size,
                        current_page: page,
                        last_page: 4,
                        next_page_url: next,
                    }
                },
                data: response.data.data
            });
        });
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
            return res.json(response);
        });
    },

    //POST /apis
    create: function(req, res) {
        var param = {
            name: req.param('name'),
            //request_host: '',//req.param('request_host'),
            request_path: req.param('request_path'),
            strip_request_path: req.param('strip_request_path') == true,
            preserve_host: req.param('preserve_host') == true,
            upstream_url: req.param('upstream_url')
        };
        KongApiService.post('/apis', param, function(response) {
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
        KongApiService.patch('/apis/' + id, param, function(response) {
            return res.json(response);
        });
    }
};
