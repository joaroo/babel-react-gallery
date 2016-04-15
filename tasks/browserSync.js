var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./build"
		},
		port: process.env.PORT || 3000
	});
});