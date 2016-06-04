var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var harp        = require('harp');
// var surge       = require('gulp-surge');
var shell       = require('gulp-shell');

/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', function () {
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
});



// gulp.task('build'), function() {
// 	return gulp.src('')
// 		.pipe(shell ([
// 			// 'harp compile . dist'
// 			'harp compile'
// 		]))
// }

// gulp.task('surge', function() {
// 	return surge({
//     project: 'dist',            // Path to your static build directory
//     domain: 'aaronreq.surge.sh'  // Your domain or Surge subdomain
//   })

// })

gulp.task('test', function() {
	console.log('Gulp moving fast, you need to cut it');
	console.log(sources.images);
});



/*
 *  CUSTOM COMPILE
 */

var jade = require('gulp-jade');
var sass = require('gulp-sass');

var sources = {
  jade: './*.jade',
  root: ['CNAME', 'robots.txt', 'favicon.ico'],
  style: 'assets/styles/*.scss',
  script: 'assets/scripts/*.js',
  images: ['assets/images/**/*.png','assets/images/**/*.jpg','assets/images/**/*.gif','assets/images/**/*.jpeg']
}

var destination = {
  script: 'test-public/assets/scripts',
  style:  'test-public/assets/styles',
  img:  'test-public/assets/images',
  public: 'test-public'
}

// Jade Compile
gulp.task('compile-jade', function(event) {
  return gulp.src(sources.jade)
    .pipe(jade({
    	pretty: true
    }))
    .pipe(gulp.dest(destination.public))
});

/*
 * Sass Compile
 */
gulp.task('compile-style', function() {
  return gulp.src(sources.style)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(destination.style));
});

gulp.task('compile-scripts', function() {
  return gulp.src(sources.script)
    .pipe(gulp.dest(destination.script));
});

gulp.task('compile-img', function() {
  return gulp.src(sources.images)
    .pipe(gulp.dest(destination.img));
});

gulp.task('compile-other', function() {
  return gulp.src(sources.root)
    .pipe(gulp.dest(destination.public));
});

gulp.task('compile', ['compile-jade', 'compile-style', 'compile-scripts', 'compile-img', 'compile-other'], function() {
	console.log('compile complete');
})






