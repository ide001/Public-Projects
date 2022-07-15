import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { css } from "./gulp/tasks/css.js";
import { images } from "./gulp/tasks/images.js";

function watcher(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.css, css);
    gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.parallel(copy, html, css, images);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task('default', dev);