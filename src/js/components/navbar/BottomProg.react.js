/**
 * Created by xus on 15-1-8.
 */
'use strict';

var React = require('react');

var Semantify = require('react-semantify');

var Progress = Semantify.Progress;
var Segment = Semantify.Segment;



var BottomProg = React.createClass({

  render: function () {

    var barStyle = {
      "-webkit-transition": "300ms",
      "transition": "300ms",
      "width": "26%"
    };

    var progressStyle = {
      "border-radius": "0px"
    };

    return (
      <Progress
        style={progressStyle}
        className="bottom attached"
        percent={25}
      >
        <div
          style={barStyle}
          className="bar"
        ></div>
      </Progress>
    );
  }
});

module.exports = BottomProg;