import { createElementVNode, defineComponent, computed, openBlock, createElementBlock, unref, toDisplayString, createBlock, withCtx } from 'vue';
import '../../../../hooks/index.mjs';
import { ElIcon } from '../../../icon/index.mjs';
import { paginationPrevProps, paginationPrevEmits } from './prev.mjs';
import _export_sfc from '../../../../_virtual/plugin-vue_export-helper.mjs';
import { useLocale } from '../../../../hooks/use-locale/index.mjs';

const _hoisted_1 = ["disabled", "aria-label", "aria-disabled"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "13",
  height: "12",
  viewBox: "0 0 13 12"
}, [
  /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_1345_15785)" }, [
    /* @__PURE__ */ createElementVNode("path", { d: "M8.52052 12L3.76702 7.24C3.43996 6.91139 3.25634 6.46663 3.25634 6.003C3.25634 5.53937 3.43996 5.09461 3.76702 4.766L8.52602 0L9.58502 1.0605L4.82602 5.826C4.77916 5.87288 4.75283 5.93646 4.75283 6.00275C4.75283 6.06904 4.77916 6.13262 4.82602 6.1795L9.57902 10.9395L8.52052 12Z" })
  ]),
  /* @__PURE__ */ createElementVNode("defs", null, [
    /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_1345_15785" }, [
      /* @__PURE__ */ createElementVNode("rect", {
        width: "12",
        height: "12",
        transform: "translate(0.5)"
      })
    ])
  ])
], -1);
const __default__ = defineComponent({
  name: "ElPaginationPrev"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: paginationPrevProps,
  emits: paginationPrevEmits,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const internalDisabled = computed(() => props.disabled || props.currentPage <= 1);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-prev",
        disabled: unref(internalDisabled),
        "aria-label": _ctx.prevText || unref(t)("el.pagination.prev"),
        "aria-disabled": unref(internalDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.prevText ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.prevText), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }))
      ], 8, _hoisted_1);
    };
  }
});
var Prev = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "prev.vue"]]);

export { Prev as default };
//# sourceMappingURL=prev2.mjs.map
