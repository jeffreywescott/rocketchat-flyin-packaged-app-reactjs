function flyin(command, ignore, item) {
  if (command === 'flyin') {
    console.log('flyin called')
  }
}

Meteor.startup(function() {
  RocketChat.slashCommands.add('flyin', flyin)
})
