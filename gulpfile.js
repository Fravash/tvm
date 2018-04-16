var gulp 		= require("gulp"),
	watch 		= require("gulp-watch"),
	browserSync = require("browser-sync"),
	less 		= require("gulp-less")
	reload		= browserSync.reload;

var config = {
    server: {
        baseDir: "./"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task("less", function () {
  	return gulp.src('./styles.less')
	    .pipe(less())
	    .pipe(gulp.dest('./'))
	    .pipe(reload({stream: true}));
});

gulp.task("webserver", function () {
	browserSync(config);
});

gulp.task("watch", function () {
	watch(["blocks/**/*.less", "styles.less"], function(event, cb) {
 		gulp.start("less");
	})
});

gulp.task("default", ["less", "webserver", "watch"]);