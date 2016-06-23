'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = require('./color');

Object.keys(_color).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _color[key];
    }
  });
});