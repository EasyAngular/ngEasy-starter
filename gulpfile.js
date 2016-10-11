var gulp = require('gulp');
var webpack = require('gulp-webpack');

/* Mixed */
var ext_replace = require('gulp-ext-replace');

/* CSS */
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');
var sass = require('gulp-sass');

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-css', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(postcss([precss, autoprefixer, cssnano]))
        .pipe(sourcemaps.write())
        .pipe(ext_replace('.css'))
        .pipe(gulp.dest('./static'));
});

gulp.task('build-ts', function () {
    return gulp.src('./src/dev/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
        .pipe(gulp.dest('./app'));
});

gulp.task('webpack', function () {
    return gulp.src('./src/dev/prod.ts')
        .pipe(webpack({
            entry: {
                main: './src/dev/prod.ts'
            },
            output: {
                filename: 'bundle.js'
            },
            module: {
                loaders: [
                    {test: /\.ts$/, loader: 'ts'}
                ]
            },
            resolve: {
                extensions: ['', '.js', '.ts']
            },
            devtool: 'source-map'
        }))
        .pipe(gulp.dest('./release'));
});

gulp.task('final-css', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(postcss([precss, autoprefixer, cssnano]))
        .pipe(sourcemaps.write())
        .pipe(ext_replace('.css'))
        .pipe(gulp.dest('./release'));
});

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['build-css']);
    gulp.watch('./src/dev/**/*.ts', ['build-ts']);
});

gulp.task('default', ['watch', 'build-css', 'build-ts']);
gulp.task('release', ['webpack', 'final-css']);