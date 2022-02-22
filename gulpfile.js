// Core dependencies
const gulp = require( "gulp" )

// External dependencies
const autoprefixer = require( "autoprefixer" )
const del = require( "del" )
const gulpif = require( "gulp-if" )
const postcss = require( "gulp-postcss" )
const rename = require( "gulp-rename" )
const rtlcss = require( "gulp-rtlcss" )
const sass = require( "gulp-dart-sass" )
const stylelint = require( "@ronilaukkarinen/gulp-stylelint" )

/* Start docs tasks */
gulp.task( "docs:clean", () => {
    return del( [
        "docs/assets/css"
    ] )
} )

gulp.task( "docs:lint", () => {
    return gulp.src( "docs/_sass/**/*.scss" )
        .pipe( stylelint( {
            failAfterError: true,
            reporters: [
                { formatter: "verbose", console: true },
            ]
        } ) )
} )

gulp.task( "docs:compile:main", () => {
    return gulp.src( "docs/_sass/docs.scss" )
        .pipe( sass.sync( {
            outputStyle: "compressed"
        } ).on( "error", sass.logError ) )
        .pipe( postcss( [
            autoprefixer( {
                cascade: true
            } )
        ] ) )
        .pipe( gulp.dest( "docs/assets/css" ) )
} )
gulp.task( "docs:compile:rtl", () => {
    return gulp.src( "docs/_sass/rtl.scss" )
        .pipe( sass.sync( {
            outputStyle: "compressed"
        } ).on( "error", sass.logError ) )
        .pipe( postcss( [
            autoprefixer( {
                cascade: true
            } )
        ] ) )
        .pipe( rtlcss() )
        .pipe( gulp.dest( "docs/assets/css" ) )
} )

gulp.task( "docs:watch", ( done ) => {
    gulp.watch( "docs/_sass/**/*.scss", gulp.series( "docs:compile" ) )

    done()
} )

gulp.task( "docs:compile", gulp.series( "docs:clean", "docs:lint", "docs:compile:main", "docs:compile:rtl" ) )
/* End docs tasks */

gulp.task( "clean", () => {
    return del( [
        "dist"
    ] )
} )

gulp.task( "lint", () => {
    return gulp.src( "src/**/*.scss" )
        .pipe( stylelint( {
            failAfterError: true,
            reporters: [
                { formatter: "verbose", console: true },
            ]
        } ) )
} )

const compile = ( style, rtl = false ) => {
    return gulp.src( "src/select2-bootstrap-5-theme.scss" )
        .pipe( sass.sync( {
            outputStyle: style
        } ).on( "error", sass.logError ) )
        .pipe( postcss( [
            autoprefixer( {
                cascade: true
            } )
        ] ) )
        .pipe( gulpif( rtl, rtlcss() ) )
        .pipe( gulpif( rtl, rename( {
            suffix: ".rtl"
        } ) ) )
        .pipe( gulpif( style == "compressed", rename( {
            suffix: ".min"
        } ) ) )
        .pipe( gulp.dest( "dist" ) )
}

gulp.task( "compile:main:dev", () => {
    return compile( "expanded" )
} )
gulp.task( "compile:main:min", () => {
    return compile( "compressed" )
} )

gulp.task( "compile:main", gulp.series( "compile:main:dev", "compile:main:min" ) )

gulp.task( "compile:rtl:dev", () => {
    return compile( "expanded", true )
} )
gulp.task( "compile:rtl:min", () => {
    return compile( "compressed", true )
} )

gulp.task( "compile:rtl", gulp.series( "compile:rtl:dev", "compile:rtl:min" ) )

gulp.task( "compile", gulp.series( "clean", "lint", "compile:main", "compile:rtl", "docs:compile" ) )

gulp.task( "watch", ( done ) => {
    gulp.watch( "src/*.scss", gulp.series( "compile" ) )
    done()
} )

gulp.task( "default", gulp.series( "compile", "watch" ) )

gulp.task( "docs", gulp.series( "docs:compile", "docs:watch" ) )