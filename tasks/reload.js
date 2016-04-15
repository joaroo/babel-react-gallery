var gulp = require('gulp');
var browserSync = require('browser-sync');

var task = function() {
	browserSync.reload();
};
gulp.task('reload-js', ['browserify'], task);
gulp.task('reload-tpl', ['templates'], task);