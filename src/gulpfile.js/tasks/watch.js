var gulp = require('gulp'),
	watch = require('gulp-watch'),
	config = require('../config').config,
	browserSync = require('browser-sync').create(),
	sassTasks = require('../tasks/sass.js'),
	uglifyTasks = require('../tasks/uglify.js');

function watch_all(done) {
	if (config.options.browserSync.disabled) {
		gulp.watch(config.watch.style, gulp.series(sassTasks.sass_full));
		gulp.watch(config.watch.app, gulp.series(uglifyTasks.uglify_full));
	} else {
		browserSync.init(config.options.browserSync);
		gulp.watch(config.watch.style, gulp.series(sassTasks.sass_full)).on('change', browserSync.reload);
		gulp.watch(config.watch.app, gulp.series(uglifyTasks.uglify_full)).on('change', browserSync.reload);
		for (var i = 0; i < config.watch.extra.length; i++) {
			gulp.watch(config.watch.extra[i]).on('change', browserSync.reload);
		}
	}
	done();
};

var watch_all = gulp.series(watch_all);
exports.watch_all = watch_all;
