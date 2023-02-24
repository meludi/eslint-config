require('./patch/modern-module-resolution');

module.exports = {
  extends: ['./base'].map(require.resolve),
  rules: {},
};
