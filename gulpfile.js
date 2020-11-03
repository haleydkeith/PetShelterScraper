gulp.task('watch', gulp.series(['browserSync', 'sass', 'scripts'], function () {
  gulp.watch('main/*.html', gulp.series(reload));  
  gulp.watch('main/assets/css/**/*.scss', gulp.series(['sass']));
  gulp.watch('main/assets/js/components/*.js', gulp.series(['scripts']));
}));
