/**
 * ApisController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var axios = require('axios');

module.exports = {
    find: function(req, res) {
            axios.get(sails.config.kongApi + '/apis')
        .then(function (response) {
            return res.view('apis', response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },


    destroy: function(req, res) {
        id = req.param('id');
        if (!id) {
            return res.json(404, {result: false, msg:'id not found'});
        }
        axios.delete(sails.config.kongApi + '/apis/' + id, {
            validateStatus: function (status) {
                return status >= 200 && status < 300; // default
           },
        })
        .then(function(response) {
            return res.json({result: true});
        }).catch(function(error){
            return res.json(500, error);
        });
    },

    create: function(req, res) {
        axios.post(sails.config.kongApi + '/apis/', {
            name: req.param('name'),
            request_host: req.param('request_host'),
            request_path: req.param('request_path'),
            strip_request_path: req.param('strip_request_path'),
            preserve_host: req.param('preserve_host'),
            upstream_url: req.param('upstream_url')
        })
        .then(function(response){
            console.log(response);
           return res.json({result: true, data: JSON.stringify(response)});
        })
        .catch(function(error){
            if (error instanceof Error) {
                return res.json({result: false, msg: 'server error'});
              } else {
                return res.json({result: false, msg: error.data.name, code: error.status});
              }
        });
    }
};

