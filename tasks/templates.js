var gulp = require('gulp');
var task = function() {
	gulp.src('src/**/*.html')
		.pipe(gulp.dest('build/'));
};

gulp.task('templates', task);
module.exports = task;