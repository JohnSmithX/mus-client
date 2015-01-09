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
      <Item className="title">
        Home
      </Item>
    );
    return (
      <div className="navbar">

        <Menu
        className="main"
        >
          <div className="container">
            {home}
          </div>
          <BottomProg/>
        </Menu>


      </div>


    );
  }
});

module.exports = Nav;