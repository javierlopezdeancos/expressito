'use strict';
module.exports = function (grunt) {

  var path = require('path')
   , snippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet
   , folderMount;

  folderMount = function (connect, point) {
    return connect.static(path.resolve(point));
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    server: {
      script: 'server.js'
    },
    open: {
      dev : {
        path: 'http://localhost:3000/'
      }
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
      },
      livereload: {
        files: [
          '../app/*.html',
          '../app/*/*.html',
          '../app/styles/*.css',
          '../app/images/*.{png,jpg,jpeg}'
        ],
        tasks: ['livereload']
      }
    },
    simplemocha: {
      options: {
        globals: ['chai', 'chai-http', 'sinon', 'chai-sinon', 'chai-changes', 'chai-backbone'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'spec'
      },
      all: {
        src: [
          // require should...
          'node_modules/chai/lib/chai',
          'node_modules/chai/lib/chai-changes',
          'node_modules/chai/lib/chai-backbone',
          'node_modules/chai/lib/chai-http',
          'node_modules/chai/lib/chai-sinon',
          'node_modules/chai/lib/sinon',

          // This are the test that we will use!
          'test/models-test.js',
          'test/templates-test.js'
        ]
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js']
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-devtools');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-open');

  // Register tasks
  grunt.registerTask('server', 'express-server');
  grunt.registerTask('devtools','grunt-devtools');
  grunt.registerTask('test', 'simplemocha');
  grunt.registerTask('default', [
    'express-server',
    'open:dev',
    'livereload-start',
    'regarde'
  ]);

  // dev enviroment
  grunt.registerTask('developer', [
    'express-server',
    'open:dev',
    'livereload-start',
    'regarde'
  ]);

  // pro enviroment
  grunt.registerTask('production', [
    'express-server',
    'livereload-start',
    'regarde',
    'jshint',
    'simplemocha'
  ]);
};
