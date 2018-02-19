"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = BoardingPass;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function BoardingPass(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M5 28.444V4l1.833 1.833L8.667 4 10.5 5.833 12.333 4l1.834 1.833L16 4l1.833 1.833L19.667 4 21.5 5.833 23.333 4l1.834 1.833L27 4v24.444l-1.833-1.833-1.834 1.833-1.833-1.833-1.833 1.833-1.834-1.833L16 28.444l-1.833-1.833-1.834 1.833-1.833-1.833-1.833 1.833-1.834-1.833L5 28.444zm18.332-10.293l-6.11-4.373v-3.731c-.065-.641-.582-1.158-1.223-1.158-.64 0-1.158.517-1.221 1.158v3.73l-6.111 4.374v1.544l6.11-1.93v3.48l-1.48.538v1.773L16 22.822l2.702.734v-1.65l-1.479-.66v-3.481l6.11 1.93V18.15z" })
  );
}