/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			files: ['Gruntfile.js', 'src/app/**/*.js', 'tests/app/**/*.js'],
			options: {
				curly: false,
				expr: true,
				smarttabs: true,
				globals: {
					require: true,
					define: true,
					requirejs: true,
					describe: true,
					expect: true,
					it: true,
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},

		watch: {
			files: ['src/**/*', 'test/**/*.js'],
			tasks: ['build']
		},

		requirejs: {
			compile: {
				options: {
					optimize : 'none',
					appDir : 'src',
					baseUrl : 'app',
					mainConfigFile : 'src/config.js',
					removeCombined : true,
					findNestedDependencies : true,
					stubModules : ['text', 'tpl'], //don't need plugins after compile
					modules : [
						{ name : 'main' }
					],
					dir: 'build'
				}
			}
		},
		
		mocha: {
			test: {
				options: {
					reporter : 'XUnit',
					run : false
				},
				src : ['test/index.html'],
				dest : './test/output/xunit.out'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mocha');
	
	grunt.registerTask('test', 'mocha');
	grunt.registerTask('build', ['jshint', 'test', 'requirejs']);

	// Default task.
	grunt.registerTask('default', 'build');

};
