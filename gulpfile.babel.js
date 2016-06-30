
import gulp from 'gulp'; // ES6 imports!
import babel from 'gulp-babel';

gulp.task('js', () => { // Arrow functions!!
  // return gulp.src('src/**/*.js')
	// 	.pipe(babel({
	// 		presets: ['es2015']
	// 	}))
	// 	.pipe(gulp.dest('./'))
});

 gulp.task('default', () => {
  //  gulp.watch('./src/**/*.js', ['js']);
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
 });
