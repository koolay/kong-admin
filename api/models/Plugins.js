/**
 * Plugin.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        plugin_name: {
            type: 'string',
            required: true
        },
        consumer_id: {
            type: 'string',
            required: true
        },
        api_name: {
            type: 'string',
            required: true
        },
        config: {
            type: 'string',
            required: false
        }

    }
};

