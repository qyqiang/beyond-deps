import { createElementVNode, defineComponent, inject, computed, openBlock, createElementBlock, unref, normalizeClass, normalizeStyle, renderSlot, toDisplayString, createVNode, withCtx, createCommentVNode } from 'vue';
import { ElIcon } from '../../icon/index.mjs';
import '../../focus-trap/index.mjs';
import '../../../hooks/index.mjs';
import '../../../utils/index.mjs';
import { dialogInjectionKey } from './constants.mjs';
import { dialogContentProps, dialogContentEmits } from './dialog-content2.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { FOCUS_TRAP_INJECTION_KEY } from '../../focus-trap/src/tokens.mjs';
import { composeRefs } from '../../../utils/vue/refs.mjs';
import { useDraggable } from '../../../hooks/use-draggable/index.mjs';

const _hoisted_1 = ["aria-level"];
const _hoisted_2 = ["aria-label"];
const _hoisted_3 = /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "25",
  height: "24",
  viewBox: "0 0 25 24"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M19.2068 6.70685L17.7928 5.29285L12.4998 10.5858L7.20685 5.29285L5.79285 6.70685L11.0858 11.9998L5.79285 17.2928L7.20685 18.7068L12.4998 13.4138L17.7928 18.7068L19.2068 17.2928L13.9138 11.9998L19.2068 6.70685Z" })
], -1);
const _hoisted_4 = ["id"];
const __default__ = defineComponent({ name: "ElDialogContent" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey);
    const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY);
    const dialogKls = computed(() => [
      ns.b(),
      ns.is("fullscreen", props.fullscreen),
      ns.is("draggable", props.draggable),
      ns.is("align-center", props.alignCenter),
      { [ns.m("center")]: props.center }
    ]);
    const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
    const draggable = computed(() => props.draggable);
    const overflow = computed(() => props.overflow);
    useDraggable(dialogRef, headerRef, draggable, overflow);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: unref(composedDialogRef),
        class: normalizeClass(unref(dialogKls)),
        style: normalizeStyle(unref(style)),
        tabindex: "-1"
      }, [
        createElementVNode("header", {
          ref_key: "headerRef",
          ref: headerRef,
          style: normalizeStyle({ backgroundColor: _ctx.headerBackgroundColor }),
          class: normalizeClass([unref(ns).e("header"), { "show-close": _ctx.showClose }])
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createElementVNode("span", {
              role: "heading",
              "aria-level": _ctx.ariaLevel,
              class: normalizeClass(unref(ns).e("title"))
            }, toDisplayString(_ctx.title), 11, _hoisted_1)
          ]),
          _ctx.showClose ? (openBlock(), createElementBlock("button", {
            key: 0,
            "aria-label": unref(t)("el.dialog.close"),
            class: normalizeClass(unref(ns).e("headerbtn")),
            type: "button",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
          }, [
            createVNode(unref(ElIcon), {
              class: normalizeClass(unref(ns).e("close")),
              size: "24px"
            }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            }, 8, ["class"])
          ], 10, _hoisted_2)) : createCommentVNode("v-if", true)
        ], 6),
        createElementVNode("div", {
          id: unref(bodyId),
          class: normalizeClass(unref(ns).e("body"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10, _hoisted_4),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("footer", {
          key: 0,
          class: normalizeClass(unref(ns).e("footer"))
        }, [
          renderSlot(_ctx.$slots, "footer")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var ElDialogContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "dialog-content.vue"]]);

export { ElDialogContent as default };
//# sourceMappingURL=dialog-content.mjs.map
