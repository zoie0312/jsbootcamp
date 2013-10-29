module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
     files: ['Gruntfile.js', 
             'public/contactlist.js',
           //  'views/contactlist.hbs',
             'app.js'
            ]
    },
    copy: {
      main: {
        files: [
          {src: ['bower_components/**/*'], dest: 'public/'}

        ]
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('copy22', ['copy']);
};