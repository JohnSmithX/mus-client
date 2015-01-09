/**
 * Created by xus on 15-1-8.
 */
'use strict';

var React = require('react');
var Semantify = require('react-semantify');
var Menu = Semantify.Menu;
var Item = Semantify.Item;
var Icon = Semantify.Icon;


var AppSidebar = React.createClass({

  render: function () {
    var home = (
      <Item className="active">
        <Icon className="home" />
        Home
      </Item>
    );
    var mail = (
      <Item>
        <Icon className="mail" />
        Mail
      </Item>
    );
    var user = (
      <Item>
        <Icon className="user" />
        User
      </Item>
    );
    return (
      <Menu
        className="secondary vertical pointing"
        children={[home, mail, user]}
      />
    );
  }

});

module.exports = AppSidebar;