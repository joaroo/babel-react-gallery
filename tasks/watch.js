var gulp = require('gulp')
var gutil = require('gulp-util')

gulp.task('watch', ['templates', 'browserify', 'browser-sync'], function () {
  gulp.watch('./src/js/**/*.js', [ /*'lint:js', */ 'reload-js'])
  gulp.watch('./src/**/*.html', ['reload-tpl'])
  gutil.log(gutil.colors.bgGreen('Watching for changes...'))
})
