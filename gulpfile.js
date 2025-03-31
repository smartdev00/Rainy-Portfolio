import gulp from 'gulp';
import source from 'vinyl-source-stream';
import browserify from 'browserify';
import uglify from 'gulp-uglify';
import streamify from 'gulp-streamify';
import babelify from 'babelify';

function compileJS(file){
  return browserify('src/'+file+'.js',{debug:true})
    .transform(babelify)
    .transform('glslify')
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source(file+'.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('demo/js'));
}
gulp.task('default', function() {
  console.log('running...')
})
// gulp.task('default',['js1','js2','js3'],function(){
//   console.log('running...')
// });
gulp.task('js1',function(){
  return compileJS('index');
});
gulp.task('js2',function(){
  compileJS('index2');
});
gulp.task('js3',function(){
  compileJS('index3');
});
