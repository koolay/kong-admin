
var axios = require('axios');

var errorHandle = function(error) {
  if (error instanceof Error) {
    return res.json({result: false, msg: 'server error'});
  } else {
    return res.json({result: false, msg: JSON.stringify(error.data), code: error.status});
  }

};
var KongApiService = {
    get: function(api) {
        axios.get(api)
        .then(function (response) {
           return res.view('apis', response);
        })
        .catch(function (error) {
            console.log(error);
        });

    },
    post: function(api, param) {
        axios.post(api, param)
        .then(function(response){
           return res.json({result: true, data: JSON.stringify(response.data)});
        })
        .catch(function(error){
            return errorHandle(error);
        });

    },
    delete: function(api) {

        axios.delete(api)
        .then(function(response) {
            return res.json({result: true});
        }).catch(function(error){
            return errorHandle(error);
        });
    },

};
module.exports = KongApiService;
