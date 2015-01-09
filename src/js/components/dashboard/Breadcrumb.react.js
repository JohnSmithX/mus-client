/**
 * Created by xus on 15-1-8.
 */

'use strict';

var React = require('react');

var Semantify = require('react-semantify');
var Breadcrumb = Semantify.Breadcrumb;

var Icon = Semantify.Icon;

var Section = Semantify.Section;
var Segment = Semantify.Segment;

//<div class="ui breadcrumb">
//  <a class="section">Home</a>
//  <i class="right chevron icon divider"></i>
//  <a class="section">Registration</a>
//  <i class="right chevron icon divider"></i>
//  <div class="active section">Personal Information</div>
//</div>

var BCrumb = React.createClass({

  render: function () {
    var segStyle = {
      "border-radius": "0px"
    };

    return (
      <div className="b-crumb">
        <Segment style={segStyle} className="tertiary">
          <Breadcrumb>
            <Section>servers</Section>
            <Icon className="right chevron divider"/>
            <Section>8080</Section>
            <Icon className="right chevron divider"/>
            <Section className="active">charts</Section>
          </Breadcrumb>
        </Segment>
      </div>

    );
  }
});


module.exports = BCrumb;