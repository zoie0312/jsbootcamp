module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
     files: ['Gruntfile.js',
             'public/contactlist.js',
           //  'views/contactlist.hbs',
             'reporter.js',
             'app.js'
            ],
      options: {
        reporter: 'reporter.js'
      }
    },
    copy: {
      main: {
        files: [
          {src: ['bower_components/**/*'], dest: 'public/'}

        ]
      },
    },
    githooks: {
      all: {'pre-commit': 'copy_bower'}
    },
    mocha_phantomjs: {
      all: ["test/**/*.html"],
      options: {
        reporter: "xunit",
        output: "./mocha_result.xml"
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-githooks');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('copy_bower', ['copy']);
  grunt.registerTask('test', ['mocha_phantomjs'])
};