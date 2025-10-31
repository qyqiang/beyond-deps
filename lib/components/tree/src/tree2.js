'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var types = require('../../../utils/types.js');

const treeEmits = {
  "check-change": (data, checked, indeterminate) => data && types.isBoolean(checked) && types.isBoolean(indeterminate),
  "current-change": (data, node) => true,
  "node-click": (data, node, nodeInstance, evt) => data && node && evt instanceof Event,
  "node-contextmenu": (evt, data, node, nodeInstance) => evt instanceof Event && data && node,
  "node-collapse": (data, node, nodeInstance) => data && node,
  "node-expand": (data, node, nodeInstance) => data && node,
  check: (data, checkedInfo) => data && checkedInfo,
  "node-drag-start": (node, evt) => node && evt,
  "node-drag-end": (draggingNode, dropNode, dropType, evt) => draggingNode && evt,
  "node-drop": (draggingNode, dropNode, dropType, evt) => draggingNode && dropNode && evt,
  "node-drag-leave": (draggingNode, oldDropNode, evt) => draggingNode && oldDropNode && evt,
  "node-drag-enter": (draggingNode, dropNode, evt) => draggingNode && dropNode && evt,
  "node-drag-over": (draggingNode, dropNode, evt) => draggingNode && dropNode && evt
};

exports.treeEmits = treeEmits;
//# sourceMappingURL=tree2.js.map
