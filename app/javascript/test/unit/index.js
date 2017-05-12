import Vue from 'vue';

Vue.config.productionTip = false;

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs/', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all src files except index.js for coverage.
const srcContext = require.context('../../packs', true, /^\.\/(?!index(\.js)?$)/);
srcContext.keys().forEach(srcContext);
