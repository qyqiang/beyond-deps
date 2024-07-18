import { createElementVNode, defineComponent, computed, openBlock, createElementBlock, unref, toDisplayString, createBlock, withCtx } from 'vue';
import '../../../../hooks/index.mjs';
import { ElIcon } from '../../../icon/index.mjs';
import { paginationNextProps } from './next2.mjs';
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
  /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_1345_15810)" }, [
    /* @__PURE__ */ createElementVNode("path", { d: "M4.5635 12L9.317 7.24C9.64407 6.91139 9.82768 6.46663 9.82768 6.003C9.82768 5.53937 9.64407 5.09461 9.317 4.766L4.558 0L3.5 1.0605L8.259 5.826C8.30587 5.87288 8.3322 5.93646 8.3322 6.00275C8.3322 6.06904 8.30587 6.13262 8.259 6.1795L3.505 10.9395L4.5635 12Z" })
  ]),
  /* @__PURE__ */ createElementVNode("defs", null, [
    /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_1345_15810" }, [
      /* @__PURE__ */ createElementVNode("rect", {
        width: "12",
        height: "12",
        transform: "translate(0.5)"
      })
    ])
  ])
], -1);
const __default__ = defineComponent({
  name: "ElPaginationNext"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: paginationNextProps,
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const internalDisabled = computed(() => props.disabled || props.currentPage === props.pageCount || props.pageCount === 0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-next",
        disabled: unref(internalDisabled),
        "aria-label": _ctx.nextText || unref(t)("el.pagination.next"),
        "aria-disabled": unref(internalDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.nextText ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.nextText), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }))
      ], 8, _hoisted_1);
    };
  }
});
var Next = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "next.vue"]]);

export { Next as default };
//# sourceMappingURL=next.mjs.map
