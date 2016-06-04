var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var harp        = require('harp');
var surge       = require('gulp-surge');

/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', function () {
  console.log('serve started');
  harp.server(__dirname, {
    port: 9000
  }, function () {
    browserSync({
      proxy: "localhost:9000",
      open: false,
      /* Hide the notification. It gets annoying */
      notify: {
        // styles: ['opacity: 0.5', 'position: absolute']
      }
    });
    /**
     * Watch for scss changes, tell BrowserSync to refresh main.css
     */
    gulp.watch(["*.css", "*.scss", "assets/styles/**/*.scss", "assets/styles/*.scss"], function () {
      reload("main.css", {stream: true});
      console.log('style change');
    });
    /**
     * Watch for all other changes, reload the whole page
     */
    gulp.watch(["*.html", "*.jade", "*.js", 'assets/scripts/*.js', "*.json", "*.md", "**/*.jade"], function () {
      reload();
      console.log('watch noticed a change. reloading');
    });
  })
  console.log('serve ended')
});

// gulp.tast('build'), function() {
// 	return gulp.src('')
// 		.pipe(shell ([
// 			'harp compile . dist'
// 		]))
// }

gulp.task('surge', function() {
	return surge({
    project: 'dist',            // Path to your static build directory
    domain: 'aaronreq.surge.sh'  // Your domain or Surge subdomain
  })

})


gulp.task('default', function() {
	console.log('Gulp moving fast, you need to cut it');
});