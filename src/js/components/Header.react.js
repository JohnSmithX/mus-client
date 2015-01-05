/**
 * Created by xus on 14-12-30.
 */
'use strict';
var React = require('react');
//var Actions = require('../actions/Actions');
var TextInput = require('./TextInput.react');
var mui = require('material-ui');

var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var IconButton = mui.IconButton;
var LeftNav = mui.LeftNav;
var MenuItem = mui.MenuItem;


var menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'css-framework', text: 'CSS Framework' },
  { route: 'components', text: 'Components' },
  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  {
    type: MenuItem.Types.LINK,
    payload: 'https://github.com/callemall/material-ui',
    text: 'GitHub'
  },
];

var Header = React.createClass({
  getInitialState: function () {
    return {
      isDocked: false
    };
  },
  render: function () {
    var menuButton = <IconButton touch={true} icon="action-view-list" onClick={this._onClick}/>;
    var leftNav = <LeftNav ref="leftNav" docked={false}  header={menuButton} menuItems={menuItems}/>;
    var leftBar = <ToolbarGroup float="left" children={[menuButton, leftNav]}/>;
    var rightBar = <ToolbarGroup float="left"/>;
    return (
      <div className="toolbar">
        <Toolbar children={[leftBar, rightBar]}/>
      </div>
    );
  },

  _onClick: function (e) {
    this.refs.leftNav.toggle();
    this.setState({
      isDocked: !this.state.isDocked
    });
  }
});

module.exports = Header;