
var axios = require('axios');
var kongApi = sails.config.kongApi;
axios.defaults.headers.common['apikey'] = sails.config.kongApiKey;
var errorHandle = function(error) {
  if (error instanceof Error) {
    sails.log.error(error);
    return {result: false, msg: 'server error'};
  } else {
    sails.log.error(error);
    return {result: false, msg: error.statusText, code: error.status};
  }

};
var KongApiService = {
    get: function(apiPath, cb) {
        axios.get(kongApi + apiPath)
        .then(function (response) {
           cb(response);
        })
        .catch(function (error) {
            cb(errorHandle(error));
        });

    },
    patch: function(apiPath, param, cb) {
        axios.patch(kongApi + apiPath, param)
        .then(function(response){
            cb({result: true, data: JSON.stringify(response.data)});
        })
        .catch(function(error){
            cb(errorHandle(error));
        });

    },
    post: function(apiPath, param, cb) {
        axios.post(kongApi + apiPath, param)
        .then(function(response){
            cb({result: true, data: JSON.stringify(response.data)});
        })
        .catch(function(error){
            cb(errorHandle(error));
        });

    },
    delete: function(apiPath, cb) {
        axios.delete(kongApi + apiPath)
        .then(function(response) {
            cb({result: true});
        }).catch(function(error){
            cb(errorHandle(error));
        });
    },

};
module.exports = KongApiService;
