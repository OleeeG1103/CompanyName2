var gulp = require("gulp"),
    sass = require("gulp-sass"),
    concat = require("gulp-concat"),
    imagemin = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant"),
    browserSync = require("browser-sync").create();


gulp.task("sass", function () {
    return gulp.src("scss/style.scss")  
        .pipe(sass().on("error", sass.logError)) 
        .pipe(gulp.dest("css")); 

});

gulp.task("watch", function () {
    gulp.watch("scss/*.scss", gulp.series("sass")); 

});

gulp.task("default", gulp.parallel("sass", "watch"));











