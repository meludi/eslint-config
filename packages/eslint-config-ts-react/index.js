require('./patch/modern-module-resolution');

module.exports = {
  extends: ['./base', './react'].map(require.resolve),
  rules: {},
};
