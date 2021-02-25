// Core dependencies
const gulp = require( "gulp" )

// External dependencies
const gulpif = require( "gulp-if" )
const plumber = require( "gulp-plumber" )
const rename = require( "gulp-rename" )
const sass = require( "gulp-sass" )

const compile = ( style ) => {
    return gulp.src( "src/select2-bootstrap-5-theme.scss" )
        .pipe( plumber() )
        .pipe( sass( {
            precision: 6,
            outputStyle: style,
            errLogToConsole: true,
        } ) )
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

gulp.task( "watch", ( done ) => {
    gulp.watch( "src/*.scss", gulp.series( "compile" ) )

    done()
} )

gulp.task( "compile", gulp.series( "compile:dev", "compile:min" ) )
gulp.task( "default", gulp.series( "compile", "watch" ) )
