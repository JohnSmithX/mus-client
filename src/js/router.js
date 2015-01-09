/**
 * Created by xus on 15-1-6.
 */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var App = require('./components/App.react');
var Login =require('./components/Login.react');

var routes = (
  <Route handler={App} path="/">
    <Route name="login" handler={Login} />
  </Route>
);

module.exports = routes;