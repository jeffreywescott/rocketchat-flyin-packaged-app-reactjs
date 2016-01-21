// flyin is a named function that will replace /me commands
// @param {String} arg1 - the argument

function flyin(command, arg1, item) {
  if (command === 'flyin') {
    if (_.trim(arg1)) {
      var currentUser = Meteor.user()
      var msg = item
      msg.msg = '_' + arg1 + '_'
      Meteor.call('sendMessage', msg)
    }
  }
}

RocketChat.slashCommands.add('flyin', flyin)
