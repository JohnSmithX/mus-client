/**
 * Created by xus on 15-1-8.
 */

'use strict';

var React = require('react');

var Semantify = require('react-semantify');
var Card = Semantify.Card;

//<div class="ui card">
//  <div class="content">
//    <i class="right floated like icon"></i>
//    <i class="right floated star icon"></i>
//    <div class="header">Cute Dog</div>
//    <div class="extra content">
//      <span class="like">
//        <i class="like icon"></i>
//      Like
//      </span>
//      <span class="star">
//        <i class="star icon"></i>
//      Favorite
//      </span>
//    </div>
//  </div>
//</div>

var Server = React.createClass({
  render: function () {
    return (
      <div className="server-card">
        <Card>

        </Card>
      </div>
    );
  }
});
