
'use strict'


// Export

module.exports = {

	app: {
		name: 'Hotel',
	},
	use: {
		templates: '.pug',
		scripts: '.js',
		styles: '.scss',
	},

	build: {
    	babel: true, // нужен ли транспайлер Babel для JS
		//imagemin: [ 'png', 'jpg' ],
		bundles: [ 'css', 'js' ],
		autoprefixer: [ 'last 3 versions', 'ie 10', 'ie 11' ],
		globalStyles: 'app/scss/vars.scss' ,
		mainBundle: 'app',
		mainLevel: 'develop'
	},

	autoCreate: {
		onlyOnWatch:false, // создаем файлы только во время watch'а
		files: [ '.scss', '.js' ], // у новых сущностей будет стиль и скрипт
		levels: [ 'develop' ], // новые блоки создаются только на уровне develop
		ignoreNodes: [ /__[\w]/i ], // все элементы будут проигнорированы
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

