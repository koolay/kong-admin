module.exports.routes = {

  /************** views ********************/
  '/': 'PageController.apis',
  'get /main': 'PageController.main',
  'get /login': 'PageController.login',
  'get /signup': 'PageController.signup',
  '/logout': 'PageController.logout',
  '/profile': 'PageController.profile',

  'get /plugins': 'PageController.plugins',
  'get /plugins/add': 'PageController.addPlugin',

  'get /consumers': 'PageController.consumers',
  'get /consumers/add': 'PageController.addConsumer',
  'get /consumers/update/:id': 'PageController.updateConsumer',

  'get /apis': 'PageController.apis',
  'get /apis/add': 'PageController.addApi',
  'get /apis/update/:id': 'PageController.updateApi',

  /**************  apis  *********************/
  'post /api/login': 'UsersController.login',
  'post /api/signup': 'UsersController.signup',

  'get /api/apis/:id': 'ApisController.find',
  'post /api/apis/:id': 'ApisController.create',


  'get /api/consumers/:id': 'ConsumersController.find',
  'post /api/consumers/:id': 'ConsumersController.create',

  //'put /api/apis/update': 'ApisController.update',
  //'delete /api/apis': 'ApisController.update',

  //'get /api/plugs': 'PluginsController.find',
  //'post /api/plugs/create': 'PluginsController.create',
  //'post /api/plugs/update': 'PluginsController.update',

  //'post /api/users/create': 'UsersController.create',
  //'post /api/users/update': 'UsersController.update',

};
