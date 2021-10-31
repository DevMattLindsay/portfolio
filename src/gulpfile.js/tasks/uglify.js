var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	handleErrors = require('../lib/handleErrors'),
	config = require('../config').config;

function uglify_main() {
	return gulp.src(config.watch.app)
		.pipe(sourcemaps.init())
		.pipe(uglify(config.options.uglify))
		.pipe(concat(config.dest_file.app))
		.pipe(sourcemaps.write('.'))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.dest.app));
};

var uglify_full = gulp.series(uglify_main);
exports.uglify_full = uglify_full;
