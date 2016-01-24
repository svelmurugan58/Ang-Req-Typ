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
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-karma');

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

        clean: {
            init: ['.tmp'],
            serve: ['.tmp/.baseDir.js', '.tmp/**/*.map*'],
            dist: ['dist'],
            test: ['test'],
            scripts: [
                '<%= yeoman.app %>/modules/**/*.js',
                '<%= yeoman.app %>/**/scripts/**/*.js',
                '<%= yeoman.app %>/modules/**/*.js.map',
                '<%= yeoman.app %>/**/scripts/**/*.js.map'
            ],
            css: ['<%= yeoman.app %>/styles/**/*.css', '<%= yeoman.app %>/modues/**/*.css']
        },

        watch: {

            sass: {
                files: ['<%= yeoman.app %>/styles/*.scss', '<%= yeoman.app %>/modules/**/*.scss'],
                tasks: ['sass:server', 'htmlbuild:default']
            },

            ts: {
                files: [
                    '<%= yeoman.app %>/scripts/*.ts',
                    '<%= yeoman.app %>/scripts/**/*.ts',
                    '<%= yeoman.app %>/modules/**/*.ts'
                ],
                tasks: ['ts:server', 'htmlbuild:default']
            },

            views: {
                files: [
                    '<%= yeoman.app %>/modules/**/*.html'
                ],
                tasks: ['ngtemplates:server']
            },

            mockData: {
                files: [
                    '<%= yeoman.app %>/data/*.json',
                    '<%= yeoman.app %>/data/**/*.json'
                ],
                tasks: ['copy:mockDataServe']
            },

            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    // Styles
                    '<%= yeoman.app %>/styles/*.scss',
                    '<%= yeoman.app %>/modules/**/*.scss',

                    // Scripts
                    '<%= yeoman.app %>/scripts/*.ts',
                    '<%= yeoman.app %>/scripts/**/*.ts',
                    '<%= yeoman.app %>/modules/**/*.ts',

                    // Views
                    '<%= yeoman.app %>/index.html',
                    '<%= yeoman.app %>/modules/**/*.html',
                    '<%= yeoman.app %>/views/**/*.html',

                    // Mock data
                    '<%= yeoman.app %>/data/*.json',
                    '<%= yeoman.app %>/data/**/*.json'
                ]
            }
        },

        connect: {
            options: {
                port: 3030,
                protocol: 'http',
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: '0.0.0.0',
                livereload: 35729 // Greenhorn already moved off of the default port
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            }
        },

        // Typescript
        ts: {

            server: {

                src: [
                    '<%= yeoman.app %>/modules/**/*.ts',
                    '!<%= yeoman.app %>/modules/**/*.test.ts',
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

        sass: {
            server: {

                files: [
                {
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: ['modules/**/*.scss', 'styles/*.scss'],
                    dest: '.tmp',
                    ext: '.css'
                }],

                options: {
                    sourcemap: 'none',
                    loadPath: ['<%= yeoman.app %>/modules/core/styles']
                }
            },

            dist: {

                files: [
                {
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: ['modules/**/*.scss'],
                    dest: '<%= yeoman.dist %>',
                    ext: '.css'
                }],

                options: {
                    sourcemap: 'none',
                    loadPath: ['<%= yeoman.app %>/modules/core/styles']
                }

            }
        },

        htmlbuild: {
            default: {

                src: 'app/index.html',
                dest: '.tmp/',

                options: {

                    styles: {
                        app: [
                            '.tmp/modules/**/*.css',
                            '.tmp/styles/*.css'
                        ]
                    },

                    scripts: {
                        app: [
                            '.tmp/**/*.js',
                            '!.tmp/scripts/app.js',
                            '!.tmp/modules/assignmentArea/app.js',
                            '!.tmp/modules/core/app.js',
                            '!.tmp/modules/performanceArea/app.js',
                        ]
                    }
                }
            }
        },

// Don't need any of this minification stuff....for now.....
/**
        // Minification of javascript
        uglify: {
            dist: {
                src: ['<%= yeoman.dist %>/scripts/sumatra.annotated.js'],
                dest: '<%= yeoman.dist %>/scripts/sumatra.min.js',

                options: {
                    mangle: true
                }
            }
        },
**/

/**
 // Minification of CSS
         cssmin: {
            dist: {
                src: ['<%= yeoman.app %>/styles/main.css'],
                dest: '<%= yeoman.dist %>/styles/sumatra.css'
            }
        },
**/

        // Transforming the Angular code into a format that can be readily minified
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            dist: {
                files: [{
                    expand: true,
                    src: ['<%= yeoman.dist %>/modules/*.js', '<%= yeoman.dist %>/modules/**/*.js']
                }]
            }
        },

        htmlmin: {
            dist: {
                src: ['<%= yeoman.app %>/views/*.html', '<%= yeoman.app %>/views/**/*.html'],
                dest: '<%= yeoman.dist %>/views/sumatra.html',

                options: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }
        },

        // Copies various assets over to other places
        copy: {
            imagesDist: {
                files: [
                    {
                        cwd: '<%= yeoman.app %>',
                        src: ['images/**', '!images/ajax-loader.gif', '!images/pearson_logo.png', '!images/sumatra.jpg'],
                        dest: '<%= yeoman.dist %>/images/',

                        flatten: true,
                        expand: true,
                        filter: 'isFile'
                    },
                    {
                        cwd: '<%= yeoman.app %>',
                        src: ['modules/assignmentArea/images/**'],
                        dest: '<%= yeoman.dist %>/images/assignmentArea',

                        flatten: true,
                        expand: true,
                        filter: 'isFile'
                    },
                    {
                        cwd: '<%= yeoman.app %>',
                        src: ['modules/performanceArea/images/**'],
                        dest: '<%= yeoman.dist %>/images/performanceArea',

                        flatten: true,
                        expand: true,
                        filter: 'isFile'
                    },
                    {
                        cwd: '<%= yeoman.app %>',
                        src: ['modules/core/images/**'],
                        dest: '<%= yeoman.dist %>/images/core',

                        flatten: true,
                        expand: true,
                        filter: 'isFile'
                    },
                ],
            },

            imagesServe: {

                files: [
                    {
                        cwd: '<%= yeoman.app %>',
                        src: ['images/**'],
                        dest: '.tmp/images/',

                        flatten: true,
                        expand: true,
                        filter: 'isFile'
                    },
                    {
                        cwd: '<%= yeoman.app %>',
                        src: ['modules/assignmentArea/images/**'],
                        dest: '.tmp/images/assignmentArea',

                        flatten: true,
                        expand: true,
                        filter: 'isFile'
                    },
                    {
                        cwd: '<%= yeoman.app %>',
                        src: ['modules/performanceArea/images/**'],
                        dest: '.tmp/images/performanceArea',

                        flatten: true,
                        expand: true,
                        filter: 'isFile'
                    },
                    {
                        cwd: '<%= yeoman.app %>',
                        src: ['modules/core/images/**'],
                        dest: '.tmp/images/core',

                        flatten: true,
                        expand: true,
                        filter: 'isFile'
                    },
                ],
            },

            resources: {
                src: ['resources/*.json'],
                cwd: '<%= yeoman.app %>',
                dest: '<%= yeoman.dist %>',

                flatten: false,
                expand: true
            },

            mockData: {
                src: ['data/*.json', 'data/**/*.json'],
                cwd: '<%= yeoman.app %>',
                dest: '<%= yeoman.dist %>',

                flatten: false,
                expand: true
            },

            mockDataServe: {
                src: ['data/*.json', 'data/**/*.json'],
                cwd: '<%= yeoman.app %>',
                dest: '.tmp/',

                flatten: false,
                expand: true
            },

            deploy: {
                src: ['<%= yeoman.dist %>/**/*', '<%= yeoman.dist %>/*'],
                dest: '<%= yeoman.greenhorn %><%= yeoman.sumatraPath %>',

                flatten: false,
                expand: true
            }
        },

        ngtemplates: {

            options: {
                module: 'SumatraCore',
                htmlmin: {
                    collapseBooleanAttributes:      true,
                    collapseWhitespace:             true,
                    removeAttributeQuotes:          true,
                    removeComments:                 true,
                    removeEmptyAttributes:          true,
                    removeRedundantAttributes:      true,
                    removeScriptTypeAttributes:     true,
                    removeStyleLinkTypeAttributes:  true
                }

            },

            server: {
                cwd: '<%= yeoman.app %>',
                src: 'modules/**/*.html',
                dest: '.tmp/modules/core/scripts/templates.js',
            },

            dist: {
                cwd: '<%= yeoman.app %>',
                src: 'modules/**/*.html',
                dest: '<%= yeoman.dist %>/modules/core/scripts/templates.js',
            }

        }
    });

    grunt.registerTask('serve', function() {
        grunt.task.run(['server']);
    });

    grunt.registerTask('server', function () {

        grunt.task.run([
            'clean:init',
            'ts:server',
            'sass:server',
            'ngtemplates:server',
            'htmlbuild:default',
            'connect:livereload',
            'copy:imagesServe',
            'copy:mockDataServe',
            'watch'
        ]);
    });

    grunt.registerTask('build', function() {

        grunt.task.run([
            'clean:dist',
            'ts:dist',
            'sass:dist',
            'ngAnnotate:dist',
            'ngtemplates:dist',
            'copy:resources',
            'copy:imagesDist',
            'copy:mockData'
        ]);
    });

    grunt.registerTask('deploy', function() {
        grunt.task.run(['build']);

        grunt.task.run([
            'copy:deploy',
            'clean:dist'
        ]);
    });

    grunt.registerTask('devLaunch', function() {


        grunt.task.run([
            'clean:init',
            'ts:server',
            'sass:server',
            'htmlbuild:server',
            // No watch needed here
        ]);
    });

    grunt.registerTask('default', function () {
        grunt.task.run(['server']);
    });

    grunt.registerTask('serve', function() {
        grunt.task.run(['server']);
    });

    grunt.registerTask('test', [
        'clean:test',
        'ts:test',
        'karma'
    ]);
};
