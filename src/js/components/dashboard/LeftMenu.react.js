/**
 * Created by xus on 15-1-8.
 */
'use strict';

var React = require('react');

var Semantify = require('react-semantify');
var Menu = Semantify.Menu;
var Item = Semantify.Item;
var Icon = Semantify.Icon;


//<div class="ui secondary vertical pointing menu">
//  <a class="active item">
//    <i class="home icon"></i> Home
//  </a>
//  <a class="item">
//    <i class="mail icon"></i> Messages
//  </a>
//  <a class="item">
//    <i class="user icon"></i> Friends
//  </a>
//</div>

var LeftMenu = React.createClass({

  render: function () {
    var servers = (
      <Item className="active">
        <Icon className="list layout"/>
      servers
      </Item>
    );

    var charts = (
      <Item>
        <Icon className="bar chart"/>
        charts
      </Item>
    );

    var settings = (
      <Item>
        <Icon className="settings"/>
        settings
      </Item>

    );


    return (
      <div className="left-menu">
        <Menu
          className={this.props.mobile}
          children={[servers, charts, settings]}
        />
      </div>

    );

  }
});

module.exports = LeftMenu;