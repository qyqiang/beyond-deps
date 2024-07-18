'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../../hooks/index.js');
var index$1 = require('../../../icon/index.js');
var prev = require('./prev2.js');
var pluginVue_exportHelper = require('../../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../../hooks/use-locale/index.js');

const _hoisted_1 = ["disabled", "aria-label", "aria-disabled"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "13",
  height: "12",
  viewBox: "0 0 13 12"
}, [
  /* @__PURE__ */ vue.createElementVNode("g", { "clip-path": "url(#clip0_1345_15785)" }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M8.52052 12L3.76702 7.24C3.43996 6.91139 3.25634 6.46663 3.25634 6.003C3.25634 5.53937 3.43996 5.09461 3.76702 4.766L8.52602 0L9.58502 1.0605L4.82602 5.826C4.77916 5.87288 4.75283 5.93646 4.75283 6.00275C4.75283 6.06904 4.77916 6.13262 4.82602 6.1795L9.57902 10.9395L8.52052 12Z" })
  ]),
  /* @__PURE__ */ vue.createElementVNode("defs", null, [
    /* @__PURE__ */ vue.createElementVNode("clipPath", { id: "clip0_1345_15785" }, [
      /* @__PURE__ */ vue.createElementVNode("rect", {
        width: "12",
        height: "12",
        transform: "translate(0.5)"
      })
    ])
  ])
], -1);
const __default__ = vue.defineComponent({
  name: "ElPaginationPrev"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: prev.paginationPrevProps,
  emits: prev.paginationPrevEmits,
  setup(__props) {
    const props = __props;
    const { t } = index.useLocale();
    const internalDisabled = vue.computed(() => props.disabled || props.currentPage <= 1);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        type: "button",
        class: "btn-prev",
        disabled: vue.unref(internalDisabled),
        "aria-label": _ctx.prevText || vue.unref(t)("el.pagination.prev"),
        "aria-disabled": vue.unref(internalDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.prevText ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(_ctx.prevText), 1)) : (vue.openBlock(), vue.createBlock(vue.unref(index$1.ElIcon), { key: 1 }, {
          default: vue.withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }))
      ], 8, _hoisted_1);
    };
  }
});
var Prev = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "prev.vue"]]);

exports["default"] = Prev;
//# sourceMappingURL=prev.js.map
