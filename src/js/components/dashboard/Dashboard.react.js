/**
 * Created by xus on 15-1-8.
 */

'use strict';

var React = require('react');

var LeftMenu = require('./LeftMenu.react');
var BCrumb = require('./Breadcrumb.react');
var ServerList = require('./ServerList.react');
var RightMenu = require('./RightMenu.react');

var Semantify = require('react-semantify');
var Grid = Semantify.Grid;
var Row = Semantify.Row;
var Column = Semantify.Column;

var Main = React.createClass({
  render: function () {
    return (
      <div className="dashboard">
        <BCrumb/>
        <div className="content">

          <Grid>
            <Row className="mobile only">
              <Column>
                <LeftMenu mobile="secondary pointing"/>
              </Column>
            </Row>
            <Row className="mobile only">
              <Column>
                <ServerList/>
              </Column>
            </Row>
          </Grid>

          <Grid className="three column stackable">
            <Row className="computer only">
              <Column className="four wide">
                <LeftMenu mobile="vertical pointing"/>
              </Column>
              <Column className="nine wide">
                <ServerList/>
              </Column>
              <Column className="three wide">
                <RightMenu/>
              </Column>
            </Row>
          </Grid>

        </div>
      </div>
    );
  }

});

module.exports = Main;
