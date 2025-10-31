import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode } from 'vue';
import { useLocale } from '../../../../hooks/use-locale/index.mjs';
import { svPanelProps } from '../props/sv-panel.mjs';
import { useSvPanel, useSvPanelDOM } from '../composables/use-sv-panel.mjs';
import _export_sfc from '../../../../_virtual/plugin-vue_export-helper.mjs';

const __default__ = defineComponent({
  name: "ElSvPanel"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: svPanelProps,
  setup(__props, { expose }) {
    const props = __props;
    const {
      cursorRef,
      cursorTop,
      cursorLeft,
      background,
      saturation,
      brightness,
      handleClick,
      handleDrag,
      handleKeydown
    } = useSvPanel(props);
    const { rootKls, cursorKls, rootStyle, cursorStyle, update } = useSvPanelDOM(props, {
      cursorTop,
      cursorLeft,
      background,
      handleDrag
    });
    const { t } = useLocale();
    const ariaLabel = computed(() => t("el.colorpicker.svLabel"));
    const ariaValuetext = computed(() => {
      return t("el.colorpicker.svDescription", {
        saturation: saturation.value,
        brightness: brightness.value,
        color: props.color.value
      });
    });
    expose({
      update
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls)),
        style: normalizeStyle(unref(rootStyle)),
        onClick: unref(handleClick)
      }, [
        createElementVNode("div", {
          ref_key: "cursorRef",
          ref: cursorRef,
          class: normalizeClass(unref(cursorKls)),
          style: normalizeStyle(unref(cursorStyle)),
          tabindex: "0",
          role: "slider",
          "aria-valuemin": "0,0",
          "aria-valuemax": "100,100",
          "aria-label": unref(ariaLabel),
          "aria-valuenow": `${unref(saturation)},${unref(brightness)}`,
          "aria-valuetext": unref(ariaValuetext),
          onKeydown: unref(handleKeydown)
        }, null, 46, ["aria-label", "aria-valuenow", "aria-valuetext", "onKeydown"])
      ], 14, ["onClick"]);
    };
  }
});
var SvPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "sv-panel.vue"]]);

export { SvPanel as default };
//# sourceMappingURL=sv-panel.mjs.map
