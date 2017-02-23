/*
    Gulpfile.js
    -----------

    Imports tasks from ./gulp/tasks
    Config is stored from ./gulp/config.js
----------------------------------------------------------------------------- */

import gulp from 'gulp'
import config from './gulp/config'

// set NODE_ENV to production/development
process.env.NODE_ENV = config.production ? 'production' : 'development'


/*
    Tasks imports
------------------------------------------ */
import './gulp/tasks/sass'
import './gulp/tasks/yaml'
import './gulp/tasks/browserify'
import './gulp/tasks/browser-sync'

/*
    Combine gulp tasks
------------------------------------------ */
gulp.task('serve', [
    'sass',
    'yaml',
    'browserify',
    'sass:watch',
    'yaml:watch',
    'browserify:watch',
    'server',
])

gulp.task('bundle', [
    'sass',
    'yaml',
    'browserify',
])
