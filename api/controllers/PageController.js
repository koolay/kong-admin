/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  main: function (req, res) {
    return res.view('main');
  },
  login: function(req, res) {
    if (req.user) {return res.redirect('/home');}
    return res.view('user/login', {layout:null});
  },
  logout: function(req, res) {
    return res.view('user/logout');
  },
  signup: function(req, res) {
    return res.view('user/signup', {layout:null});
  },
  profile: function(req, res) {
    return res.view('user/profile');
  },

  apis: function(req, res) {
      return res.view('apis');
  },
  addApi: function(req,res) {
      return res.view('add-api');
  },
  updateApi: function(req,res) {
      return res.view('update-api');
  },
  plugins: function(req, res) {
      return res.view('plugins');
  },
  addPlugin: function(req, res) {
      return res.view('add-plugin');
  },
  consumers: function(req, res) {
       return res.view('consumers');
  },
  addConsumer: function(req, res) {
      return res.view('add-consumer');
  },
  updateConsumer: function(req, res) {
      return res.view('update-consumer');
  },

};

