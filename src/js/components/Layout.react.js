/**
 * Created by xus on 15-1-8.
 */
'use strict';

var React = require('react');

var Nav = require('./navbar/Nav.react');

var Dashboard = require('./dashboard/Dashboard.react.js');

var Layout = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <Dashboard/>
      </div>
    );
  }
});


module.exports = Layout;