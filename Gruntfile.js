module.exports = function(grunt) {
  grunt.initConfig({
    babel: {
      scripts: {
        files: [{
          expand: true,
          cwd: 'lib',
          src: '**/*.js',
          dest: 'build/'
        }]
      }
    },
    eslint: {
      scripts: ['lib/**/*.js']
    },
    copy: {
      classes: {
        files: [{
          expand: true,
          cwd: 'build/types',
          src: '*',
          dest: 'types'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['lib/**/*.js'],
        tasks: ['babel']
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['babel', 'copy', 'eslint']);
};
