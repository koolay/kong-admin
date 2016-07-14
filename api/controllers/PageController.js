/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res) {
        return res.view('main');
    },
    login: function(req, res) {
        if (req.user) {
            return res.redirect('/home');
        }
        return res.view('user/login', {
            layout: null
        });
    },
    logout: function(req, res) {
        return res.view('user/logout');
    },
    signup: function(req, res) {
        return res.view('user/signup');
    },
    profile: function(req, res) {
        return res.view('user/profile');
    },

    api: function(req, res) {
        return res.view('api-detail');
    },
    apis: function(req, res) {
        return res.view('apis');
    },
    addApi: function(req, res) {
        return res.view('add-api');
    },
    updateApi: function(req, res) {

        KongApiService.get('/apis/' + req.param('id'), function(response) {
            return res.view('update-api', response.data);
        })
    },
    plugins: function(req, res) {
        return res.view('plugins');
    },
    addPlugin: function(req, res) {
        return res.view('add-plugin');
    },
    updatePlugin: function(req, res) {
        return res.view('update-plugin');
    },
    consumer: function(req, res) {
        return res.view('consumer-detail');
    },
    consumers: function(req, res) {
        return res.view('consumers');
    },
    addConsumer: function(req, res) {
        return res.view('add-consumer');
    },
    updateConsumer: function(req, res) {
        return res.view('update-consumer');
    },

};
