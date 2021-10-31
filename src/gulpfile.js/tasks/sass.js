var gulp = require('gulp'),
	sass = require('gulp-sass')(require('sass')),	
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	config = require('../config').config,
	config_cssmin = require('../config').cssmin;

function style() {
	return gulp.src(config.src.style)
		.pipe(sass(config.options.style).on('error', sass.logError))
		.pipe(cleanCSS(config.options.clean_css))
		.pipe(concat(config.dest_file.style))
		.pipe(gulp.dest(config.dest.style));
};

var sass_full = gulp.series(style);
exports.sass_full = sass_full;
