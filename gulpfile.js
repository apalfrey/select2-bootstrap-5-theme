// Core dependencies
const gulp = require( "gulp" )

// External dependencies
const autoprefixer = require( "autoprefixer" )
const del = require( "del" )
const gulpif = require( "gulp-if" )
const postcss = require( "gulp-postcss" )
const rename = require( "gulp-rename" )
const sass = require( "gulp-sass" )
const stylelint = require( "gulp-stylelint" )

const compile = ( style ) => {
    return gulp.src( "src/select2-bootstrap-5-theme.scss" )
        .pipe( sass( {
            precision: 6,
            outputStyle: style,
            errLogToConsole: true,
        } ) )
        .pipe( postcss( [
            autoprefixer( {
                cascade: true
            } )
        ] ) )
        .pipe( gulpif( style == "compressed", rename( {
            suffix: ".min"
        } ) ) )
        .pipe( gulp.dest( "dist" ) )
}

gulp.task( "compile:dev", () => {
    return compile( "expanded" )
} )
gulp.task( "compile:min", () => {
    return compile( "compressed" )
} )

gulp.task( "lint", () => {
    return gulp.src( "src/**/*.scss" )
        .pipe( stylelint( {
            failAfterError: true,
            reporters: [
                { formatter: 'verbose', console: true },
            ]
        } ) )
} )

gulp.task( "watch", ( done ) => {
    gulp.watch( "src/*.scss", gulp.series( "compile" ) )

    done()
} )

gulp.task( "clean", () => {
    return del( [
        "dist"
    ] )
} )

gulp.task( "compile", gulp.series( "clean", "lint", "compile:dev", "compile:min" ) )
gulp.task( "default", gulp.series( "compile", "watch" ) )
