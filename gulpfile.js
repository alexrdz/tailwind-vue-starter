const gulp = require('gulp');
const paths = require('path');
const purgecss = require('gulp-purgecss');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const plumber = require('gulp-plumber');
const minify = require('gulp-minify-css');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

gulp.task('clean', () => {
  return gulp.src('./dist/static/css/*.css')
    .pipe(plumber())
    .pipe(purgecss({
      content: [`./dist/**/*.js`],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html', 'js']
        }
      ]
    }))
    .pipe(gulp.dest('./dist/static/css'));
});
