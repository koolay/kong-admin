/**
 * ConsumersController
 *
 * @description :: Server-side logic for managing consumers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    find: function(req, res) {

        var id = req.param('id');
        if (id) {
            var path = '/consumers/' + id;
            KongApiService.get(path, function(response) {
                return res.json({
                    master: response.data,
                    additions: []
                });
            });

        } else {

            var size = 20;
            var offset = req.param('offset');
            var path = '/consumers?size=' + size;
            path = offset ? path + '&offset=' + offset : path;

            KongApiService.get(path, function(response) {
                var nextUrl = response.data.next;
                if (nextUrl) {
                    offset = url.parse(nextUrl, true).query.offset;
                }

                return res.json({
                    offset: offset,
                    items: response.data.data
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
        KongApiService.delete('/consumers/' + id, function(response) {
            return res.json(response);
        });
    },

    //POST /apis
    create: function(req, res) {
        var param = {
            username: req.param('username'),
            //  custom_id: req.param('custom_id')
        };
        KongApiService.post('/consumers', param, function(response) {
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
            username: req.param('username'),
            custom_id: req.param('custom_id')
        };
        KongApiService.patch('/consumers/' + id, param, function(response) {
            return res.json(response);
        });
    },

    //Create a credential
    createCredential: function(req, res) {
        var id = req.param('consumer_id');
        var pluginName = req.param('plugin_name');
        if (!id || !pluginName) {
            sails.log.info('false');

            return res.json({
                result: false,
                msg: 'invalid params'
            });
        }
        var path = '/consumers/' + id + '/' + pluginName;
        KongApiService.post(path, {}, function(response) {
            sails.log.info(response);
            return res.json({
                result: true,
                data: response
            });

        });
    },
    listCredential: function(req, res) {
        var id = req.param('consumer_id');
        var pluginName = req.param('plugin_name');
        if (!id || !pluginName) {
            return res.json({
                result: false,
                msg: 'invalid params'
            });
        }
        var path = '/consumers/' + id + '/' + pluginName;
        KongApiService.get(path, function(response) {
            return res.json({
                result: true,
                items: response.data.data
            });

        });

    },
    deleteCredential: function(req, res) {
        var id = req.param('consumer_id');
        var pluginName = req.param('plugin_name');
        var credentialId = req.param('credential_id');
        if (!id || !pluginName || !credentialId) {
            return res.json({
                result: false,
                msg: 'invalid params'
            });
        }
        var path = '/consumers/' + id + '/' + pluginName + '/' + credentialId;
        KongApiService.delete(path, function(response) {
            return res.json(response);
        });
    },

};
