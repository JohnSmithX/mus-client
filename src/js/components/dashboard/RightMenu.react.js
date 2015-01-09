/**
 * Created by xus on 15-1-9.
 */
'use strict';


var React = require('react');

var Semantify = require('react-semantify');
var Button = Semantify.Button;
var Icon = Semantify.Icon;

//<div class="ui labeled icon button">
//  <i class="pause icon"></i>
//  Pause
//</div>

var RightMenu = React.createClass({

  render: function () {
    return (
      <div className="right-menu">
        <Button className="labeled green icon">
          <Icon className="plus"/>
          Create
        </Button>
      </div>
    );
  }
});

module.exports = RightMenu;