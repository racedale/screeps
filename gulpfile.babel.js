
 import gulp from 'gulp'; // ES6 imports!

// gulp.task('js',
//   gulp.src('src')
//
// );

 gulp.task('default', () => { // Arrow functions!!
   gulp.watch('./src/**/*.js', ['js'])
    .on('change', (e) => {  // Arrow functions!!
      console.log(`File ${e.path} was ${e.type}, running JS task...`); // Template strings and interpolation!!
    });
 });
