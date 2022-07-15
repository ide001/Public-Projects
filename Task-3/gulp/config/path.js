import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        images: `${buildFolder}/img/`,
        files: `${buildFolder}/files/`
    },
    src: {
        html: `${srcFolder}/*.html`,
        images: `${srcFolder}/img/**/*.{svg,webp}`,
        css: `${srcFolder}/css/style.css`,
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        css: `${srcFolder}/css/**/*.css`,
        images: `${srcFolder}/img/**/*.{svg,webp}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    srcFolder: buildFolder,
    rootFolder: buildFolder,
    ftp: ``,
}
