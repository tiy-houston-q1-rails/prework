var gulp = require("gulp");
var deploy = require("gulp-gh-pages");
var options = {};

gulp.task('deploy', function () {
  gulp.src("_book/**/*")
    .pipe(deploy(options));
});
