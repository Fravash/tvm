var gulp 		   = require("gulp"),
	watch 		   = require("gulp-watch"),
	browserSync    = require("browser-sync"),
	sourcemaps     = require('gulp-sourcemaps'),
	less 		   = require("gulp-less"),
	nunjucks 	   = require('gulp-nunjucks-html'),
    autoprefixer   = require('gulp-autoprefixer'),
	reload		   = browserSync.reload;

var config = {
    server: {
        baseDir: "./"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('html', () => {
    return gulp.src("pages/*.html")
        .pipe(nunjucks({
            searchPaths: ["blocks"]
        }))
        .pipe(gulp.dest("./"))
        .pipe(reload({stream: true}));
});

gulp.task("less", function () {
  	return gulp.src('./styles.less')
  		.pipe(sourcemaps.init())
	    .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8'],
            cascade: false
        }))
	    .pipe(sourcemaps.write())
	    .pipe(gulp.dest('./'))
	    .pipe(reload({stream: true}));
});

gulp.task("webserver", function () {
	browserSync(config);
});

gulp.task("watch", function () {
	watch(["blocks/**/*.less", "styles.less"], function(event, cb) {
 		gulp.start("less");
	});
	watch(["blocks/**/*.html", "pages/*.html"], function(event, cb) {
        gulp.start('html');
    });
});

gulp.task("default", ["html", "less", "webserver", "watch"]);