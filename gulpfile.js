var gulp = require('gulp'),    svgSprite = require('gulp-svg-sprite'),    svgmin = require('gulp-svgmin'),    cheerio = require('gulp-cheerio'),    replace = require('gulp-replace'),    spritesmith = require('gulp.spritesmith'),    clean = require('gulp-clean'),    rename = require('gulp-rename'),    merge = require('merge-stream');var assetsDir = 'src/assets/';gulp.task('svg:icon', function () {    return gulp.src(assetsDir + '/svg-icon/*.svg')        // minify svg        .pipe(svgmin({            js2svg: {                pretty: true            }        }))        // remove all fill, style and stroke declarations in out shapes        .pipe(cheerio({            run: function ($) {                $('[fill]').removeAttr('fill');                $('[stroke]').removeAttr('stroke');                $('[style]').removeAttr('style');            },            parserOptions: {xmlMode: true}        }))        // cheerio plugin create unnecessary string '&gt;', so replace it.        .pipe(replace('&gt;', '>'))        // build svg sprite        .pipe(svgSprite({            mode: {                symbol: {                    sprite: "../../../_sprites/sprite-icon.svg",                    render: {                        scss: {                            dest: '../../../scss/sprite/_sprite-icon.scss',                        }                    }                }            }        }))        .pipe(gulp.dest(assetsDir + 'i/sprite/'));});gulp.task('svg:color', function () {    return gulp.src(assetsDir + '/svg-color/*.svg')        .pipe(svgmin({            js2svg: {                pretty: true            }        }))        // remove all fill, style and stroke declarations in out shapes        .pipe(cheerio({            run: function ($) {                // $('[fill]').removeAttr('fill');                $('[stroke]').removeAttr('stroke');                $('[style]').removeAttr('style');            },            parserOptions: {xmlMode: true}        }))        // cheerio plugin create unnecessary string '&gt;', so replace it.        .pipe(replace('&gt;', '>'))        // build svg sprite        .pipe(svgSprite({            shape: {                spacing: {         // Add padding                    padding: 2                }            },            mode: {                css: {                    bust: false,                    sprite: "../../_sprites/sprite-color.svg",                    render: {                        // scss: true,                        scss: {                            // dest: '../../../scss/_sprite-svg-colors.scss',                            dest: '../../assets/scss/sprite/_sprite-svg-color.scss',                        }                    }                },            }        }))        .pipe(rename({suffix: '', basename: "sprite-color"}))        .pipe(gulp.dest(assetsDir));});gulp.task('svg:clean-assets-sprite', function () {    return gulp.src('./assets/_sprites', {allowEmpty: true}).pipe(clean({force: true}));});gulp.task('svg:clean-public-sprite', function () {    return gulp.src('./public/assets/_sprites', {allowEmpty: true}).pipe(clean({force: true}));});gulp.task('svg:copy', function () {    return gulp.src(assetsDir + '/_sprites/*.*')        .pipe(gulp.dest('./public/assets/_sprites'));});gulp.task('sprite2', function () {    let spriteData = gulp.src(`${assetsDir}png-sprite/*.*`).pipe(spritesmith({        imgName: 'png-sprite.png',        cssName: 'png-sprite.css'    }));    return spriteData.pipe(gulp.dest('path/to/output/'));});gulp.task('sprite', function () {    // Generate our spritesheet    let spriteData = gulp.src(`${assetsDir}png-sprite/*.*`)    .pipe(spritesmith({        imgName: '../_sprites/sprite-png.png',        // imgPath: '../images/png-sprite.png',        // imgPath: `${assetsDir}images/`,        cssName: '_sprite-png.scss',        // retinaSrcFilter: 'app/images/sprite-icons/*@2x.png',        // retinaImgName: 'sprite@2x.png',        // retinaImgPath: '../images/sprite@2x.png',        padding: 5    }));    // Pipe image stream onto disk    let imgStream = spriteData.img    .pipe(gulp.dest(`${assetsDir}png-sprite/`));    // Pipe CSS stream onto disk    var cssStream = spriteData.css    .pipe(gulp.dest(`${assetsDir}scss/sprite`));    // Return a merged stream to handle both `end` events    return merge(imgStream, cssStream);});gulp.task('svg', gulp.series(['svg:clean-assets-sprite', 'svg:clean-public-sprite', 'svg:color', 'svg:icon', 'svg:copy']));gulp.task('img', gulp.series(['sprite', 'svg:copy']));