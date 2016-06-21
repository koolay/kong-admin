/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    api: function(req, res) {
        return res.view('add-api');
    },
    updateApi: function(req, res) {
        KongApiService.get('/apis/' + req.param('id'), function(response) {
            return res.view('update-api', response.data);
        })
    }

};

