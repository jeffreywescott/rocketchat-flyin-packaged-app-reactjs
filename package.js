Package.describe({
	name: 'jeffreywescott:rocketchat-flyin-packaged-app-reactjs',
	version: '0.0.1',
	summary: 'Test /slash commands to fly-in a tab',
	git: 'https://github.com/jeffreywescott/rocketchat-flyin-packaged-app-reactjs.git'
})

Npm.depends({
  'packaged-app-reactjs':'0.1.3'
})

Package.onUse(function(api) {
	api.versionsFrom('1.2');

	api.use([
		'rocketchat:lib'
	])

	// client
	api.use([
		'cosmos:browserify@0.9.3',
		'templating'
	], 'client')
	api.addFiles([
		'client/index.js',
		'client/package.browserify.js',
		'client/package.browserify.options.json',
		'client/views/flyin.html',
		'client/views/flyin.js',
		'.npm/package/node_modules/packaged-app-reactjs/lib/app.css'
	], ['client'])
	api.export('render', 'client')

	// server
	api.addFiles('server/index.js', ['server'])
})

Package.onTest(function(api) {

})
