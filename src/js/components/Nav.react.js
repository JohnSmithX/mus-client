/**
 * Created by xus on 15-1-8.
 */
'use strict';

var React = require('react');

var Semantify = require('react-semantify');

var Menu = Semantify.Menu;
var Item = Semantify.Item;
var Icon = Semantify.Icon;


var AppNav = React.createClass({
  render: function () {
    var home = (
      <Item>
        <Icon className="home" />
        Home
      </Item>
    );
    return (
      <Menu
        className="fixed"
        children={[home]}
      />
    );
  }
});

module.exports = AppNav;