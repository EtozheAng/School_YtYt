const { src, dest, watch, parallel, series, task } = require('gulp')
const ghPages = require('gulp-gh-pages')

const scss = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const del = require('del')
const browserSync = require('browser-sync').create()

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/',
    },
    notofy: false,
  })
}

task('deploy', function () {
  return src('./dist/**/*').pipe(ghPages())
})

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({ outputStyle: 'expanded' }))
    .pipe(concat('style.min.css'))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 10 version'],
        grid: true,
      })
    )
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    'app/js/main.js',
    'app/js/quiz.js',
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function images() {
  return src('app/images/**/*.*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest('dist/images'))
}

function building() {
  return src(['app/**/*.html', 'app/css/style.min.css', 'app/js/main.min.js'], {
    base: 'app',
  }).pipe(dest('dist'))
}

function cleanDist() {
  return del('dist')
}

function watching() {
  watch(['app/scss/**/*.scss'], styles)
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
  watch(['app/**/*.html']).on('change', browserSync.reload)
}

exports.styles = styles
exports.scripts = scripts
exports.browsersync = browsersync
exports.watching = watching
exports.images = images
exports.cleanDist = cleanDist
exports.build = series(cleanDist, images, building)

exports.default = parallel(styles, scripts, browsersync, watching)
