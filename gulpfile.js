'use strict';

// init
var gulp = require('gulp'),
    watch = require('gulp-watch'),        // Наблюдение за изменениями файлов
    prefixer = require('gulp-autoprefixer'), // Автоматически добавляет вендорные префиксы к CSS свойствам
    uglify = require('gulp-uglify'),       // Сжимать наш JS
    rigger = require('gulp-rigger'),       // Позволяет импортировать один файл в другой простой конструкцией
    sass = require('gulp-sass'),         // для компиляции нашего SCSS кода
    sourcemaps = require('gulp-sourcemaps'),   // Для генерации css sourscemaps, помогает нам при отладке кода
    cleanCSS = require('gulp-clean-css'),   // Сжатие CSS кода
    imagemin = require('gulp-imagemin'),     // Сжатие картинок
    pngquant = require('imagemin-pngquant'), // Сжатие картинок | работа с PNG
    plumber = require('gulp-plumber');     // Ловим ошибки, чтобы не прервался watch

var path = {
  build: {
    js: 'local/templates/kdteam/js/',
    css: 'local/templates/kdteam/css/',
    images: 'local/templates/kdteam/images/',
  },
  src: {
    js: 'gulp/js/**/**/*.js',
    css: 'gulp/css/**/**/**/*.scss',
    images: 'gulp/images/**/**/**/*.*',

  },
  watch: {
    js: 'gulp/js/**/**/*.js',
    css: 'gulp/css/**/**/**/*.scss',
    images: 'gulp/images/**/**/**/*.*',
  },
};


gulp.task('js:build', function() {
  gulp.src(path.src.js).
      pipe(plumber()).
      pipe(rigger()).
      pipe(sourcemaps.init()).
      pipe(uglify()).
      pipe(sourcemaps.write()).
      pipe(plumber.stop()).
      pipe(gulp.dest(path.build.js));
});

gulp.task('css:build', function() {
  gulp.src(path.src.css).
      pipe(plumber()).
      pipe(sourcemaps.init()).
      pipe(sass()).
      pipe(prefixer()).
      pipe(cleanCSS()).
      pipe(sourcemaps.write()).
      pipe(plumber.stop()).
      pipe(gulp.dest(path.build.css));
});

gulp.task('images:build', function() {
  gulp.src(path.src.images).pipe(plumber()).pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()],
    interlaced: true,
  })).pipe(plumber.stop()).pipe(gulp.dest(path.build.images));
});

gulp.task('build', [
  'js:build',
  'css:build',
  'images:build',
]);

gulp.task('watch', function() {

  watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
  });

  watch([path.watch.css], function(event, cb) {
    gulp.start('css:build');
  });

  watch([path.watch.images], function(event, cb) {
    gulp.start('images:build');
  });

});

gulp.task('default', ['build', 'watch']);