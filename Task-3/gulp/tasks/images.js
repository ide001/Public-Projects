import webp from "gulp-webp";

export const images = () => {
    return app.gulp.src(app.path.src.images, {sourcemaps: true})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "IMG",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
}