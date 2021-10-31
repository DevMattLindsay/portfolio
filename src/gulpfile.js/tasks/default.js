var gulp = require('gulp');
var buildTasks = require('../tasks/build.js');
var watchTasks = require('../tasks/watch.js');

gulp.task('default', gulp.series(buildTasks.build, watchTasks.watch_all));
