// // PLAYING WITH UGLIFY
// var gulp = require('gulp')
// 	uglify = require('gulp-uglify');



// gulp.task('scripts',function(){
// 	// console.log('hello');
// 	gulp.src('js/*.js')
// 	.pipe(ugligy())
// 	.pipe(gulp.dest('/build/js'));
// });

// gulp.task('styles',function  () {
// 	console.log('running styles');
// });
	
// gulp.task('default',['scripts','styles']);
// -----------------------------------------------------------
// // PLAYING WITH Watch
// var gulp = require('gulp')
// 	uglify = require('gulp-uglify');



// gulp.task('scripts',function(){
// 	// console.log('hello');
// 	gulp.src('js/*.js')
// 	.pipe(ugligy())
// 	.pipe(gulp.dest('/build/js'));
// });

// gulp.task('styles',function  () {
// 	console.log('running styles');
// });
	
// gulp.task('watch',function  () {
// 	gulp.watch('js/*.js',['scripts'])
// })

// gulp.task('default',['scripts','styles','watch']);

// ------------------------------------------------------------
// PLAYING WITH Watch
var gulp = require('gulp');
var jade = require('gulp-jade');



gulp.task('jade',function(){
	console.log('hello');
	gulp.src('public/**/*.jade')
	.pipe(jade({
      pretty: true
    }))
	.pipe(gulp.dest('public/'));


});


gulp.task('styles',function  () {
	console.log('running styles');
});
	
gulp.task('watch',function  () {
	gulp.watch('public/**/*.jade',['jade']);
})

gulp.task('default',['jade','styles','watch']);
