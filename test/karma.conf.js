module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    reporters: ['mocha'],
    plugins: [
        'karma-mocha',
        'karma-mocha-reporter',
        'karma-chrome-launcher'
    ],
    files: [
      'https://unpkg.com/chai@3.5.0/chai.js',
      '*.js'
    ],
    colors: true,
    browsers: [
        'Chrome'
    ]
  });
};
