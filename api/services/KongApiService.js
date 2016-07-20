var axios = require('axios');
var kongApi = sails.config.kongApi;
axios.defaults.headers.common['apikey'] = sails.config.kongApiKey;
var errorHandle = function(error) {
    if (error instanceof Error) {
        return {
            result: false,
            msg: 'server error'
        };
    } else {
        var errmsg = '';
        if (error.data) {
            var errmsg = (typeof error.data) == 'string' ? error.data : error.data[Object.keys(error.data)[0]];
        } else {
            var errmsg = error.statusText;
        }
        return {
            result: false,
            msg: errmsg,
            code: error.status
        };
    }

};
var KongApiService = {
    get: function(apiPath, cb) {
        axios.get(kongApi + apiPath)
            .then(function(response) {
                cb(response);
            })
            .catch(function(error) {
                cb(errorHandle(error));
            });

    },
    patch: function(apiPath, param, cb) {
        axios.patch(kongApi + apiPath, param)
            .then(function(response) {
                cb({
                    result: true,
                    data: JSON.stringify(response.data)
                });
            })
            .catch(function(error) {
                cb(errorHandle(error));
            });

    },
    post: function(apiPath, param, cb) {
        axios.post(kongApi + apiPath, param)
            .then(function(response) {
                cb({
                    result: true,
                    data: JSON.stringify(response.data)
                });
            })
            .catch(function(error) {
                cb(errorHandle(error));
            });

    },
    batchPost: function(apiPath, paramList, cb) {

        var tasks = [];
        for (var i = 0; i < paramList.length; i++) {
            var param = paramList[i];
            var fn = function(callback) {
                axios.post(kongApi + apiPath, param)
                    .then(function(response) {
                        callback(null, {
                            result: true,
                            data: JSON.stringify(response.data)
                        });
                    })
                    .catch(function(error) {
                        callback(null, errorHandle(error));
                    });
            };
            tasks.push(fn);
        }

        async.parallel(tasks,
            function(err, results) {
                var result = results[0];
                sails.log.info(results);
                cb(result);
            });

    },
    delete: function(apiPath, cb) {
        axios.delete(kongApi + apiPath)
            .then(function(response) {
                cb({
                    result: true
                });
            }).catch(function(error) {
                cb(errorHandle(error));
            });
    },

};
module.exports = KongApiService;
