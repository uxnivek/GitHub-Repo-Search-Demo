// Generated on 2014-10-05 using generator-angular 0.9.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            jsTest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['newer:jshint:test', 'karma']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },

            livereload: {
                options: {
                    open: true,
                    middleware: function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },

            test: {
                options: {
                    port: 9001,
                    middleware: function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },

            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },

            all: {
                src: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/scripts/{,*/}*.js'
                ]
            },

            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/{,*/}*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },

            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= yeoman.app %>/index.html'],
                ignorePath: /\.\.\//
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/styles/{,*/}*.css',
                    '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= yeoman.dist %>/styles/fonts/*'
                ]
            }
        },


        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css'
                    ]
                }
            }
        },

        concat: {
            dist: {}
        },

        // imagemin: {
        //     dist: {
        //         files: [{
        //             expand: true,
        //             cwd: '<%= yeoman.app %>/images',
        //             src: '{,*/}*.{png,jpg,jpeg,gif}',
        //             dest: '<%= yeoman.dist %>/images'
        //         }]
        //     }
        // },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: ['*.js', '!oldieshim.js'],
                    dest: '.tmp/concat/scripts'
                }]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'images/{,*/}*.{webp}',
                        'fonts/*'
                    ]
                }, {
                    src: [
                        '<%= yeoman.app %>/styles/main.css'
                    ],

                    dest: '<%= yeoman.dist %>/styles/main.css'
                }, {
                    src: [
                        'bower_components/bootstrap/dist/css/bootstrap.css'
                    ],

                    dest: '<%= yeoman.dist %>/styles/bootstrap.css'
                }, {
                    src: [
                        'bower_components/nvd3/src/nv.d3.css'
                    ],

                    dest: '<%= yeoman.dist %>/styles/nv.d3.css'
                }]
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'copy:styles'
            ]
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        },

        ngtemplates:  {
            app: {
                cwd: '<%= yeoman.app %>/scripts',
                src: '{,*/}*.html',
                dest: '.tmp/scripts/app.templates.js',
                options: {
                    module: 'app'
                }
            }
        },

        browserify: {
            dist: {
                files: {
                    // '.tmp/scripts/vendor.js': [
                    '<%= yeoman.dist %>/scripts/vendor.js': [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/angular/angular.js',
                        'bower_components/angular-resource/angular-resource.js',
                        'bower_components/angular-animate/angular-animate.js',
                        'bower_components/angular-route/angular-route.js',
                        'bower_components/d3/d3.js',
                        'bower_components/nvd3/nv.d3.js',
                        'bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.js',
                        'bower_components/lodash/dist/lodash.compat.js'
                    ],
                    
                    // '.tmp/scripts/app.js': [
                    '<%= yeoman.dist %>/scripts/app.js': [
                        '<%= yeoman.app %>/app.js',
                        '.tmp/scripts/app.templates.js'
                    ]
                },
                options: {
                    // transform: ['coffeeify']
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/scripts/vendor.js': [
                        '.tmp/scripts/vendor.js'
                    ],

                    '<%= yeoman.dist %>/scripts/app.js': [
                        '.tmp/scripts/app.js'
                    ]
                }
            }
        }
    });


    grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'wiredep',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function(target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        // 'wiredep',
        // 'concurrent:dist',
        // 'autoprefixer',
        // 'concat',
        // 'ngAnnotate',
        'ngtemplates',
        'browserify:dist',
        'copy:dist',
        // 'cssmin',
        // 'uglify',
        // 'filerev',
    ]);

    grunt.registerTask('default', [
        // 'newer:jshint',
        // 'test',
        'build'
    ]);
};