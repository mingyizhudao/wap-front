SET CWD=%~dp0

ECHO 'init...'

RD /s /q ./node_modules

ECHO 'install gulp...'
CALL cnpm install gulp --save-dev

ECHO 'install gulp-rimraf...'
CALL cnpm install gulp-rimraf --save-dev

ECHO 'install gulp-uglify...'
CALL cnpm install gulp-uglify --save-dev

ECHO 'install gulp-concat...'
CALL cnpm install gulp-concat --save-dev

ECHO 'install gulp-connect...'
CALL cnpm install gulp-connect --save-dev

ECHO 'install gulp-template...'
CALL cnpm install gulp-template --save-dev

ECHO 'install gulp-sourcemaps...'
CALL cnpm install gulp-sourcemaps --save-dev

ECHO 'install gulp-sass...'
CALL cnpm install gulp-sass --save-dev
