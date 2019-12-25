
'use strict'


// Export

module.exports = {

	app: {
		name: 'Demo',
	},
	use: {
		templates: '.pug',
		scripts: '.js',
		styles: '.scss',
	},

	build: {
    	babel: true, // нужен ли транспайлер Babel для JS
		imagemin: [ 'png', 'jpg' ],
		bundles: [ 'css', 'js' ],
		autoprefixer: [ 'last 3 versions', 'ie 10', 'ie 11' ],
		globalStyles: 'app/scss/vars.scss' ,
		mainBundle: 'app',
		mainLevel: 'develop'
	},

	autoCreate: {
		onlyOnWatch: false,
		files: [ '.scss, .js' ],
		levels: [ 'develop' ],
		ignoreScript: [ /(_|--)[\w]/i  ], // игнорируем модификаторы при создании скриптов
	},

	dist: {
		styles: 'styles',
		fonts: 'styles/fonts',
		img: 'styles/img',
		symbol: 'styles/img',
		scripts: 'scripts',
		static: 'static',
		favicons: 'favicons',
	},

	favicons: {
		android: false,
		appleIcon: false,
		appleStartup: false,
		coast: false,
		favicons: true,
		firefox: false,
		windows: false,
		yandex: false,
	},

	HTMLBeautify: {
		preserve_newlines: false,
	},
	addContent: {
		scss: '.[name] {}', 
	  },

}

