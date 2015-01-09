/**
 * Created by xus on 15-1-8.
 */
'use strict';

var React = require('react');

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

    );
  }
});

module.exports = Layout;