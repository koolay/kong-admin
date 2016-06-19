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
    create: function(req, res) {

    }
};

