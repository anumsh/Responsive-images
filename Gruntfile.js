module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
        suffix: '_large_2x',
        quality: 30
      },{
        width: 800,
        suffix: '_large_1x',
        quality: 30
      },{
          width: 500,
          suffix:'_medium',
          quality:30
      },{
        width: 250,
          suffix:'_small',
          quality:30

      }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
