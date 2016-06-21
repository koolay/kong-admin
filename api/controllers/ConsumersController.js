/**
 * ConsumersController
 *
 * @description :: Server-side logic for managing consumers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    find: function(req, res) {
           KongApiService.get('/consumers', function(response) {
                return res.view('consumers', response);
        });
    },

    //DELETE /apis/<id>
    destroy: function(req, res) {
        id = req.param('id');
        if (!id) {
            return res.json(404, {result: false, msg:'id not found'});
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
        KongApiService.post('/consumers', param, function(response){
            return res.json(response);
        });
    },

    update: function(req, res) {
        var id = req.param('id');
        if (!id) {
             return res.json({result: false, msg: 'id is null'});
        }
        var param = {
            username: req.param('username'),
            custom_id: req.param('custom_id')
        };
        KongApiService.patch('/consumers/' + id, param, function(response){
            return res.json(response);
        });
    }
};

