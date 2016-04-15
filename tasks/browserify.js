var argv = require('yargs').argv;
var browserify = require('browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

var production = !!argv.production;
var watch = argv._.length ? argv._[0] === 'watch' : true;


var task = function() {
    var props = {
        entries: ['./src/js/App.js'],
        debug: !production,
        cache: {},
        packageCache: {},
        plugin: [],
        transform: [['babelify', {
            presets: ["es2015", "react"]
        }]]
    };

    if (watch) {
        props.plugin.push(watchify);
    }

    var bundler = browserify(props);

    var rebundle = function() {
        return bundler.bundle()
            .on('error', function(err) {
                if (err instanceof SyntaxError) {
                    gutil.log(gutil.colors.red('Syntax Error'), err.message);
                    gutil.log(err.codeFrame);
                } else {
                    gutil.log(gutil.colors.red('Error'), err.message);
                }
                this.emit('end');
            })
            .pipe(source('build.js'))
            .pipe(gulp.dest('build/js/'));
    };
    bundler.on('update', rebundle);
    return rebundle();
};

gulp.task('browserify', task);
module.exports = task;
