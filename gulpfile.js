var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

var path = {
  base: './src',
  dest: './dist'
};

// Basic Gulp task syntax
gulp.task('hello', function() {
  console.log('Hello Alex!');
})

// Development Tasks
// -----------------

// Start Pug
gulp.task('pug', function(){
  gulp.src(`${path.base}/**/*.pug`)
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(path.dest))
});

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: path.dest
    }
  })
})

gulp.task('sass', function() {
  // gulp.src()
  return gulp.src(`${path.base}/**/*.sass`) // Gets all files ending with .scss in scss and children dirs
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(path.dest + '/css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})

// Watchers
gulp.task('watch', function() {
  gulp.watch(path.base + '/**/*.pug', ['pug']);
  gulp.watch(path.base + '/**/*.sass', ['sass']);
  gulp.watch(path.base + '/**/*.js', ['js']);
  gulp.watch(path.dest + '/**/*.*', browserSync.reload);
})

// Optimization Tasks
// ------------------

// Optimizing CSS and JavaScript
gulp.task('useref', function() {

  return gulp.src('*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

// Optimizing Images

// Copying fonts
gulp.task('fonts', function() {
  return gulp.src('./fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

// Cleaning
gulp.task('clean', function() {
  return del.sync(path.dest);
})

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images']);
});

gulp.task('js', function () {
  return gulp.src(path.base + '/**/*.js')
    .pipe( gulp.dest(path.dest) );
});

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['clean'], ['pug', 'sass', 'js', 'browserSync'], 'watch',
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence(['clean'], ['pug', 'sass', 'js'],
    callback
  )
})
