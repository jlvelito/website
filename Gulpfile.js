var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('js/min/')
    ],
    cb
  );
});

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});


gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css/min'));
});

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 1%']
};


gulp.task('autoprefixer', function () {
    return gulp.src('css/min/style.css')
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('./css/min/'));
});

//Watch tasks
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
    gulp.watch('css/*.css',['minify-css']);
    gulp.watch('css/min/*.css',['autoprefixer']);
    gulp.watch('js/*.js',['compress']);
});

