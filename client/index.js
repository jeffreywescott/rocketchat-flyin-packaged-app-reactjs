function flyin(command, arg1, item) {
	if (command === 'flyin') {
		var tmpl = RocketChat.TabBar.getTemplate()
		if (tmpl !== 'flyin') RocketChat.TabBar.setTemplate('flyin')
		if (RocketChat.TabBar.isFlexOpen()) {
			RocketChat.TabBar.closeFlex()
		} else {
			RocketChat.TabBar.openFlex()
		}
  }
}

Meteor.startup(function() {
	RocketChat.TabBar.addButton({
		groups: ['channel', 'privategroup', 'directmessage'],
		id: 'fly-in',
		title: 'Fly-in',
		icon: 'icon-rocket',
		template: 'flyin',
		order: 11
	})

	RocketChat.slashCommands.add('flyin', flyin, {
		description: 'Show / hide the panel',
	})
})
