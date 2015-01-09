/**
 * Created by xus on 15-1-8.
 */

'use strict';

var React = require('react');

var Semantify = require('react-semantify');
var Card = Semantify.Card;
var Progress = Semantify.Progress;

var CheckBox = Semantify.Checkbox;

//<div class="ui toggle checkbox">
//  <input type="checkbox" name="public">
//    <label>Subscribe to weekly newsletter</label>
//  </div>
var Server = React.createClass({
  render: function () {
    var barStyle = {
      "-webkit-transition": "300ms",
      "transition": "300ms",
      "width": "75%"
    };
    return (
      <div className="server-card">
        <Card>
          <div className="content">
            <div className="header">8080</div>
            <div className="meta">
              <span className="category">runing</span>
            </div>
            <Progress className="green small" percent={75}>
              <div className="bar" style={barStyle}>
                <div className="progress">75%</div>
              </div>
            </Progress>
            <CheckBox className="toggle checked">
              <input type="checkbox" nameName="public"/>
              <label>Subscribe to weekly newsletter</label>
            </CheckBox>
            <CheckBox className="toggle checked">
              <input type="checkbox" nameName="public"/>
              <label>Subscribe to weekly newsletter</label>
            </CheckBox>
          </div>
        </Card>
      </div>
    );
  }
});

module.exports = Server;