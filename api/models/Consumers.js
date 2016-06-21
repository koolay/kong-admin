/**
 * Consumer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      id: {
        type: 'string',
          required: true,
          unique: true
      },
      username: {
          type: 'string',
          required: true,
          unique: true
      },
      custom_id: {
          type: 'string',
          required: false
      }

  }
};

