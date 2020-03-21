var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');

gulp.task('sass',function(){
    return gulp.src('./sass/**/*.scss')//コンパイル前のファイルを指定
        .pipe(sassGlob())//ディレクトリ毎に全ファイルをインポートしてくれる
        .pipe(sass({outputStyle: 'expanded'}))//コンパイル実行
        .pipe(gulp.dest('css'));//コンパイルした出力ファイルを指定
});

gulp.task('sass:watch',() =>{
    gulp.watch('./sass/**/*.scss',gulp.series('sass'));//scssファイルが変更される旅にコンパイル
});