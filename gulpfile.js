var gulp = require('gulp');  
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

var sassFiles = "scss/main.scss",  
    cssDest = "css/";
//SCSS to CSS and Autoprefixer
gulp.task('sass', function(){  
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ["last 15 versions", "> 1%", "ie 8", "ie 7", "Firefox ESR"]
		}))
        .pipe(gulp.dest(cssDest));
});
//GULP watcher
gulp.task('watch',function() {  
    gulp.watch(sassFiles,['sass']);
});

