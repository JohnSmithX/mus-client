/**
 * Created by xus on 14-12-30.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var Actions = {

  create: function (text) {
    AppDispatcher.handleViewAction({
      actionType: Constants.TODO_CREATE,
      text: text
    });
  },

  updateText: function (id, text) {
    AppDispatcher.handleViewAction({
      actionType: Constants.TODO_UPDATE_TEXT,
      id: id,
      text: text
    });
  },

  toggleComplete: function (todo) {
    var id = todo.id;
    if (todo.complete) {
      AppDispatcher.handleViewAction({
        actionType: Constants.TODO_UNDO_COMPLETE,
        id: id
      });
    } else {
      AppDispatcher.handleViewAction({
        actionType: Constants.TODO_COMPLETE,
        id: id
      });
    }
  },

  toggleCompleteAll: function () {
    AppDispatcher.handleViewAction({
      actionType: Constants.TODO_TOGGLE_COMPLETE_ALL
    });
  },

  destroy: function (id) {
    AppDispatcher.handleViewAction({
      actionType: Constants.TODO_DESTROY,
      id: id
    });
  },

  destroyCompleted: function () {
    AppDispatcher.handleViewAction({
      actionType: Constants.TODO_DESTROY_COMPLETED
    });
  }
};

module.exports = Actions;