/**
 * Created by xus on 14-12-30.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');

var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = {};

function create(text) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  }
}

function update(id, updates) {
  _todos[id] = assign({}, _todos[id], updates)
}

function updateAll(updates) {
  for (var id in _todos) {
    update(id, updates);
  }
}

function destroy(id) {
  delete _todos[id];
}

function destroyCompleted() {
  for (var id in _todos) {
    if (_todos[id].complete) {
      destroy(id);
    }
  }
}

var Store = assign({}, EventEmitter.prototype, {
  areAllComplete: function () {
    for (var id in _todos) {
      if (!_todos[id].complete) {
        return false;
      }
    }
    return true;
  },

  getAll: function () {
    return _todos;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {
    case Constants.TODO_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
      }
      break;

    case Constants.TODO_TOGGLE_COMPLETE_ALL:
      if (Store.areAllComplete()) {
        updateAll({complete: false});
      } else {
        updateAll({complete: true});
      }
      break;

    case Constants.TODO_UNDO_COMPLETE:
      update(action.id, {complete: false});
      break;

    case Constants.TODO_COMPLETE:
      update(action.id, {complete: true});
      break;

    case Constants.TODO_UPDATE_TEXT:
      text = action.text.trim();
      if (text !== '') {
        update(action.id, {text: text});
      }
      break;

    case Constants.TODO_DESTROY:
      destroy(action.id);
      break;

    case Constants.TODO_DESTROY_COMPLETED:
      destroyCompleted();
      break;

    default:
      return true;
  }

  // This often goes in each case that should trigger a UI change. This store
  // needs to trigger a UI change after every view action, so we can make the
  // code less repetitive by putting it here.  We need the default case,
  // however, to make sure this only gets called after one of the cases above.
  Store.emitChange();

  return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = Store;