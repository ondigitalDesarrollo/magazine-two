const gulp 			      = require('gulp'),
    	sass   			    = require('gulp-sass'),
    	pug				      = require('gulp-pug'),
    	autoprefixer	  = require('autoprefixer'),
      browserSync     = require('browser-sync').create();

/* Server */
gulp.task('default',['css'], function() {
	browserSync.init({
		server: './dist/'
	});
	gulp.watch('./dev/scss/**/*.scss', ['css']);
  gulp.watch('./dist/*html').on('change', browserSync.reload);
  gulp.watch('./dev/**/*.pug', ['pug']);
});

/* CSS */
gulp.task('css', function() {
    gulp.src("./dev/scss/*.scss")
        .pipe(sass({
          outputStyle: 'expanded'
        }))
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});



/* PUG */
gulp.task('pug', function(){
  gulp.src('./dev/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./dist/'))
});
