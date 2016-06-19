/**
 * Jwt.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      consumer_id: {
          type: 'string',
          required: true
      },
      key: {
          type: 'string',
          required: true
      },
      secret: {
          type: 'string',
          required: true
      }
  }
};

