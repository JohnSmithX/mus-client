/**
 * Created by xus on 15-1-8.
 */

'use strict';

var React = require('react');

var Semantify = require('react-semantify');
var Card = Semantify.Card;


//<a className="ui card" href="http://www.dog.com">
//  <div className="content">
//    <div className="header">Cute Dog</div>
//    <div className="meta">
//      <span className="category">Animals</span>
//    </div>
//    <div className="description">
//      Click to view more information about this dog at dog.com
//    </div>
//  </div>
//  <div className="extra content">
//    <div className="right floated author">
//      <img className="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt
//      </div>
//    </div>
//  </a>

var Server = React.createClass({
  render: function () {
    return (
      <div className="server-card">
        <Card>
          <div className="content">
            <div className="header">Cute Dog</div>
            <div className="meta">
              <span className="category">Animals</span>
            </div>
            <div className="description">
              Click to view more information about this dog at dog.com
            </div>
          </div>
        </Card>
      </div>
    );
  }
});

module.exports = Server;