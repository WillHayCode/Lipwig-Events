module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        exec: {
            lint: 'yarn eslint . --ext .ts',
            tsc: './node_modules/typescript/bin/tsc'
        }
    });

    grunt.loadNpmTasks('grunt-exec');

    // Default task(s).
    grunt.registerTask('quick', ['exec:tsc']);
    grunt.registerTask('default', ['exec']);
  };
