'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../../hooks/index.js');
var index$1 = require('../../../icon/index.js');
var next = require('./next2.js');
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
  /* @__PURE__ */ vue.createElementVNode("g", { "clip-path": "url(#clip0_1345_15810)" }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M4.5635 12L9.317 7.24C9.64407 6.91139 9.82768 6.46663 9.82768 6.003C9.82768 5.53937 9.64407 5.09461 9.317 4.766L4.558 0L3.5 1.0605L8.259 5.826C8.30587 5.87288 8.3322 5.93646 8.3322 6.00275C8.3322 6.06904 8.30587 6.13262 8.259 6.1795L3.505 10.9395L4.5635 12Z" })
  ]),
  /* @__PURE__ */ vue.createElementVNode("defs", null, [
    /* @__PURE__ */ vue.createElementVNode("clipPath", { id: "clip0_1345_15810" }, [
      /* @__PURE__ */ vue.createElementVNode("rect", {
        width: "12",
        height: "12",
        transform: "translate(0.5)"
      })
    ])
  ])
], -1);
const __default__ = vue.defineComponent({
  name: "ElPaginationNext"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: next.paginationNextProps,
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const { t } = index.useLocale();
    const internalDisabled = vue.computed(() => props.disabled || props.currentPage === props.pageCount || props.pageCount === 0);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        type: "button",
        class: "btn-next",
        disabled: vue.unref(internalDisabled),
        "aria-label": _ctx.nextText || vue.unref(t)("el.pagination.next"),
        "aria-disabled": vue.unref(internalDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.nextText ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(_ctx.nextText), 1)) : (vue.openBlock(), vue.createBlock(vue.unref(index$1.ElIcon), { key: 1 }, {
          default: vue.withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }))
      ], 8, _hoisted_1);
    };
  }
});
var Next = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "next.vue"]]);

exports["default"] = Next;
//# sourceMappingURL=next.js.map
