/**
 * Created by xus on 15-1-8.
 */
'use strict';

var React = require('react');

<<<<<<< HEAD
var AppNav = require('./Nav.react');
var AppSidebar = require('./Sidebar.react');



var Layout = React.createClass({

  render: function () {
    return (
      <div>
        <AppNav />
        <div className="main">
          <div className="side-menu">
            <AppSidebar/>
          </div>
          <div>
            Hello world
          </div>
        </div>
      </div>

=======
var Nav = require('./navbar/Nav.react');

var Dashboard = require('./dashboard/Dashboard.react.js');

var Layout = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <Dashboard/>
      </div>
>>>>>>> origin/master
    );
  }
});

<<<<<<< HEAD
=======

>>>>>>> origin/master
module.exports = Layout;