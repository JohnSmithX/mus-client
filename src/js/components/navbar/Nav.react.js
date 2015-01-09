/**
 * Created by xus on 15-1-8.
 */
'use strict';

var React = require('react');

var Semantify = require('react-semantify');

var Menu = Semantify.Menu;
var Item = Semantify.Item;
var Icon = Semantify.Icon;

var BottomProg = require('./BottomProg.react');

var Nav = React.createClass({
  render: function () {
    var home = (
      <Item>
        <Icon className="home"/>
        Home
      </Item>
    );
    return (
      <div className="navbar">
        <Menu
          id="top-menu"
          className="main"
          children={[home]}
        />
        <BottomProg/>
      </div>


    );
  }
});

module.exports = Nav;