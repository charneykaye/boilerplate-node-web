module.exports = function (grunt) {
    //Configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            jshint: {
                options: {
                    smarttabs: false,
                    immed: true,
                    latedef: true,
                    noarg: true,
                    quotmark: 'single',
                    unused: true,
                    strict: true,
                    trailing: true,
                    globals: {
                        jQuery: true,
                        window: true,
                        document: true,
                        navigator: true
                    }
                },
                all: [
                    'frontend/js/**/*.js'
                ]
            },
            /*
             qunit: {
             all: ['4_test/index.html']
             },
             */
            uglify: {
                options: {
                    banner: '/* <%= pkg.name %> <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) | OutrightMental Web - https://app.outrightmental.com/ */\n'
                },
                prod: {
                    files: [
                        {expand: true, cwd: 'frontend/js/', src: ['**/*.js'], dest: 'public/js/', ext: '.min.js'},
                        // Require.js loads main.js which contains all dependencies
                        {"public/main.min.js": "frontend/js/main.js"}
                    ]
                }
            },
            less: {
                prod: {
                    options: {
                        paths: ["frontend/less"],
                        yuicompress: true
                    },
                    files: {
                        "public/css/main.min.css": "frontend/less/main.less"
                    }
                },
                dev: {
                    options: {
                        paths: ["frontend/less"]
                    },
                    files: {
                        "public/css/main.min.css": "frontend/less/main.less"
                    }
                }
            },
            copy: {
                prod: {
                    files: [
                        // Copy img
                        {expand: true, cwd: 'frontend/img/', src: ['**'], dest: 'public/img/', overwrite: true}
                    ]
                },
                dev: {
                    files: [
                        // Copy img
                        {expand: true, cwd: 'frontend/img/', src: ['**'], dest: 'public/img/', overwrite: true},
                        // Copy js libraries
                        {expand: true, cwd: 'frontend/js/', src: ['**/*.js'], dest: 'public/js/', ext: '.min.js', overwrite: true},
                        // Require.js loads main.js which contains all dependencies
                        {"public/main.min.js": "frontend/js/main.js"}
                    ]
                }
            },
            bower: {
                install: {
                    options: {
                        copy: false
                    }
                }
            },
            watch: {
                bower: {
                    files: [
                        'bower.json'
                    ],
                    tasks: ['bower:install'],
                    options: {
                        nospawn: true
                    }
                },
                less: {
                    files: [
                        'frontend/less/**/*.less'
                    ],
                    tasks: ['less:dev'],
                    options: {
                        nospawn: true
                    }
                },
                copy: {
                    files: [
                        'frontend/js/**',
                        'frontend/img/**'
                    ],
                    tasks: ['copy:dev'],
                    options: {
                        nospawn: true
                    }
                }
            }
        }
    )
    ;

    //Dependencies
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Tasks
    grunt.registerTask('default', [/* 'jshint', */ /* 'qunit', */ 'uglify:prod', 'less:prod', 'bower:install' /* , 'copy:prod' */ ]);
    grunt.registerTask('dev', ['copy:dev', 'less:dev', 'bower:install', 'watch']);
}
;