var gulp = require('gulp');
var sassTasks = require('../tasks/sass.js');
var uglifyTasks = require('../tasks/uglify.js');

var build = gulp.series(sassTasks.sass_full, uglifyTasks.uglify_full);
exports.build = build;
