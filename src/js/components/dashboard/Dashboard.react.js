/**
 * Created by xus on 15-1-8.
 */

'use strict';

var React = require('react');

var LeftMenu = require('./LeftMenu.react');
var BCrumb = require('./Breadcrumb.react');
var Semantify = require('react-semantify');

var Main = React.createClass({
  render: function () {
    return (
      <div className="dashboard">
        <BCrumb/>
        <div className="content">
          <LeftMenu/>
        </div>
      </div>
    );
  }

});

module.exports = Main;
