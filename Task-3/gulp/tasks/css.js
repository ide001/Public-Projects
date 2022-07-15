import webpcss from 'gulp-webpcss';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

export const css = () => {
    return app.gulp.src(app.path.src.css, {sourcemaps: true})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "CSS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss(
        {
            webpClass: ".webp",
            noWebpClass: ".no-webp"
        }
    ))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}