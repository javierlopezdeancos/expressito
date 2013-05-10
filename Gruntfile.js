'use strict';
module.exports = function (grunt) {

  var path = require('path'),
    snippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
    folderMount;

  folderMount = function (connect, point) {
    return connect.static(path.resolve(point));
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    server: {
      script: 'app.js'
    },

    regarde: {
      server: {
        files:  ['../app.js', '../routes/index.js'],
        tasks:  [ 'jshint', 'express-server', 'livereload' ]
      },
      js: {
        files: ['scripts/**/*.js', '../test/**/*.js'],
        tasks: ['jslint', 'uglify', 'livereload'],
        events: true
      },
      web: {
        files: ['scripts/templates/**/*.html', 'styles/**/*.css'],
        tasks: ['livereload'],
        events: true
      }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-regarde');

  // Register tasks
  grunt.registerTask('default', [
    'express-server',
    'livereload-start',
    'regarde'
  ]);
};
