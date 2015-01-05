/**
 * Created by xus on 14-12-30.
 */
var React = require('react');

var ReactPropTypes = React.PropTypes;
var Actions = require('../actions/Actions');
var TextInput = require('./TextInput.react');


var cx = require('react/lib/cx');

var Item = React.createClass({

  propTypes: {
    todo: ReactPropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      isEditing: false
    };
  },

  render: function () {
    var todo = this.props.todo;

    var input;
    if (this.state.isEditing) {
      input = (
        <TextInput
          className="edit"
          onSave={this._onSave}
          value={todo.text}
        />
      );
    }
    return (
      <li
        className={cx({
          'completed': todo.complete,
          'editing': this.state.isEditing
        })}
        key={todo.id}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this._onToggleComplete}
          />
          <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this._onDestroyClick}/>
        </div>
        {input}
      </li>
    );

  },

  _onToggleComplete: function () {
    Actions.toggleComplete(this.props.todo);
  },

  _onDoubleClick: function () {
    this.setState({
      isEditing: true
    });
  },

  _onSave: function () {
    Actions.updateText(this.props.todo.id, text);
    this.setState({
      isEditing: false
    });
  },

  _onDestroyClick: function () {
    Actions.destroy(this.props.todo.id);
  }

});

module.exports = Item;