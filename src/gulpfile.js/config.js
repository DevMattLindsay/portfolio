/**
 * Gulp configuration file
 */

// basic paths

var sass_src = 'sass';
var app_src = 'js';
var min_dest = '../public/min';
var proxy = 'http://localhost:3000/'

module.exports = {

	config: {
		src: {
			style: sass_src + '/style.scss'
		},
		watch : {
			style: sass_src + '/**/*',
			app: app_src + '/**/*',
			extra : [ // extra directories to watch for browserSync auto refresh
				'../views/*.ejs'
			]
		},
		dest: {
			style: min_dest,
			app: min_dest
		},
		dest_file: {
			style: 'style.min.css',
			app: 'app.min.js'
		},
		options: {
			clean_css: {
				advanced: true,	// set "false" for faster operation, but slightly larger output files
				keepSpecialComments: 0
			},
			style : {
				outputStyle: 'compressed'
			},
			browserSync: {
				disabled: false,
				open: false,
				proxy: proxy
			},
			uglify : {

			}
		}
	}

};
