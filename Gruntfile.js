// Generated on 2013-10-19 using generator-angular 0.5.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-connect');

    var yeomanConfig = {
            app: 'ts_app',
            dist: 'scripts',
        };

    try {
        yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
    }
    catch (e) {}

    grunt.initConfig({
        yeoman: yeomanConfig,
        connect: {
            server: {
                port: 3030,
                protocol: 'http',
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: true // Greenhorn already moved off of the default port
            },
        },
        livereload: {
                options: {
                    open: true,
                }
            },
        // Typescript
        ts: {

            server: {

                src: [
                    '<%= yeoman.app %>/module_tasks/**/*.ts',
                    '!<%= yeoman.app %>/module_tasks/**/*.test.ts',
                    '<%= yeoman.app %>/scripts/config/*.ts',
                    '<%= yeoman.app %>/scripts/controllers/*.ts',
                    '<%= yeoman.app %>/scripts/services/*.ts',
                    '<%= yeoman.app %>/scripts/app.ts',
                    '<%= yeoman.app %>/typings/tsd.d.ts'
                ],

                outDir: '.tmp',

                options: {
                    compile: true,
                    declaration: false,
                    failOnTypeErrors: true,
                    noImplicitAny: false,
                    noResolve: false,
                    removeComments: true,
                    sourceMap: false,
                    target: 'es6',
                    fast: 'never',
                    module: 'amd'
                }
            },

            dist: {

                src: [
                    '<%= yeoman.app %>/modules/**/*.ts',
                    '!<%= yeoman.app %>/modules/**/*.test.ts',
                    '<%= yeoman.app %>/typings/tsd.d.ts'
                ],

                outDir: 'dist',

                options: {
                    compile: true,
                    declaration: false,
                    failOnTypeErrors: true,
                    noImplicitAny: false,
                    noResolve: false,
                    removeComments: true,
                    sourceMap: false,
                    target: 'es6',
                    fast: 'never',
                    module: 'amd'
                }
            },

            test: {
                src: [
                    '<%= yeoman.app %>/modules/**/*.ts',
                    '<%= yeoman.app %>/typings/tsd.d.ts',
                    '<%= yeoman.app %>/typings/jasmine/jasmine.d.ts',
                ],

                outDir: 'test',

                options: {
                    compile: true,
                    declaration: false,
                    failOnTypeErrors: true,
                    noImplicitAny: false,
                    noResolve: false,
                    removeComments: true,
                    sourceMap: false,
                    target: 'es6',
                    fast: 'never',
                    module: 'amd'
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                // Commented as the property overwrites karma.conf.js

                // if true, Karma captures browsers, runs the tests and exits
                //singleRun: true
            }
        },
    });

    /*grunt.registerTask('serve', function() {
        grunt.task.run(['server']);
    });
*/
   /* grunt.registerTask('server', function () {

        grunt.task.run([
            'ts:server',   
            'connect:livereload',
        ]);
    });

*/
    

    /*grunt.registerTask('default', function () {
        grunt.task.run(['server']);
    });
*/
    grunt.registerTask('server', 'connect:server');

    grunt.registerTask('test', [
        'ts:test',
        'karma'
    ]);
};
