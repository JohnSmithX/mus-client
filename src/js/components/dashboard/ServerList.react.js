/**
 * Created by xus on 15-1-9.
 */
'use strict';

var React = require('react');


var Server = require('./Server.react');
var Semantify = require('react-semantify');
var Grid = Semantify.Grid;
var Column = Semantify.Column;


var ServerList = React.createClass({
  render: function () {
    return (
      <div className='server-list'>
        <Grid className="two column stackable">
          <Column>
            <Server/>
          </Column>
          <Column>
            <Server/>
          </Column>
          <Column>
            <Server/>
          </Column>
        </Grid>
      </div>
    );
  }
});


module.exports = ServerList;