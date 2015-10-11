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
var gulp = require('gulp')
	uglify = require('gulp-uglify');



gulp.task('scripts',function(){
	// console.log('hello');
	gulp.src('js/*.js')
	.pipe(ugligy())
	.pipe(gulp.dest('/build/js'));
});

gulp.task('styles',function  () {
	console.log('running styles');
});
	
gulp.task('watch',function  () {
	gulp.watch('js/*.js',['scripts']);
})

gulp.task('default',['scripts','styles','watch']);
