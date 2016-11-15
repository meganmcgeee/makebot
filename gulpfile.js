/* eslint-disable import/no-extraneous-dependencies */
const babel = require('gulp-babel');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
/* eslint-enable import/no-extraneous-dependencies */

gulp.task('js', () => {
  gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ['latest'] }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('lib'));
});

gulp.task('default', ['js'], () => {
  gulp.watch('src/**/*.js', ['js']);
});
