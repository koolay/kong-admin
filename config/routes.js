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
  'get /plugins/update/:id': 'PageController.updatePlugin',

  'get /consumers': 'PageController.consumers',
  'get /consumers/detail/:id': 'PageController.consumer',
  'get /consumers/add': 'PageController.addConsumer',
  'get /consumers/update/:id': 'PageController.updateConsumer',

  'get /apis': 'PageController.apis',
  'get /apis/detail/:id': 'PageController.api',
  'get /apis/add': 'PageController.addApi',
  'get /apis/batch/add': 'PageController.addApis',
  'get /apis/update/:id': 'PageController.updateApi',

  /**************  apis  *********************/
  'post /api/login': 'UsersController.login',
  'post /api/signup': 'UsersController.signup',

  'get /api/apis': 'ApisController.find',
  'get /api/apis/:id': 'ApisController.find',
  'post /api/apis': 'ApisController.create',
  'post /api/batch/apis': 'ApisController.batchCreate',
  'put /api/apis/:id': 'ApisController.update',
  'put /api/apis/:api_id/plugins/:plugin_id': 'ApisController.updatePlugin',
  'delete /api/apis/:id': 'ApisController.destroy',

  'get /api/consumers': 'ConsumersController.find',
  'get /api/consumers/:id': 'ConsumersController.find',
  'get /api/consumers/:consumer_id/:plugin_name': 'ConsumersController.listCredential',
  'post /api/consumers': 'ConsumersController.create',
  'put /api/consumers/:id': 'ConsumersController.update',
  'post /api/consumers/:consumer_id/:plugin_name': 'ConsumersController.createCredential',
  'delete /api/consumers/:consumer_id/:plugin_name/:credential_id': 'ConsumersController.deleteCredential',
  'delete /api/consumers/:id': 'ConsumersController.destroy',

  'get /api/plugins': 'PluginsController.find',
  'get /api/plugins/:id': 'PluginsController.find',
  'post /api/plugins': 'PluginsController.create',
  'delete /api/plugins/:id': 'PluginsController.destroy',

};
