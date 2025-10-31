'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../../../hooks/use-locale/index.js');
var svPanel = require('../props/sv-panel.js');
var useSvPanel = require('../composables/use-sv-panel.js');
var pluginVue_exportHelper = require('../../../../_virtual/plugin-vue_export-helper.js');

const __default__ = vue.defineComponent({
  name: "ElSvPanel"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: svPanel.svPanelProps,
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
    } = useSvPanel.useSvPanel(props);
    const { rootKls, cursorKls, rootStyle, cursorStyle, update } = useSvPanel.useSvPanelDOM(props, {
      cursorTop,
      cursorLeft,
      background,
      handleDrag
    });
    const { t } = index.useLocale();
    const ariaLabel = vue.computed(() => t("el.colorpicker.svLabel"));
    const ariaValuetext = vue.computed(() => {
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
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(rootKls)),
        style: vue.normalizeStyle(vue.unref(rootStyle)),
        onClick: vue.unref(handleClick)
      }, [
        vue.createElementVNode("div", {
          ref_key: "cursorRef",
          ref: cursorRef,
          class: vue.normalizeClass(vue.unref(cursorKls)),
          style: vue.normalizeStyle(vue.unref(cursorStyle)),
          tabindex: "0",
          role: "slider",
          "aria-valuemin": "0,0",
          "aria-valuemax": "100,100",
          "aria-label": vue.unref(ariaLabel),
          "aria-valuenow": `${vue.unref(saturation)},${vue.unref(brightness)}`,
          "aria-valuetext": vue.unref(ariaValuetext),
          onKeydown: vue.unref(handleKeydown)
        }, null, 46, ["aria-label", "aria-valuenow", "aria-valuetext", "onKeydown"])
      ], 14, ["onClick"]);
    };
  }
});
var SvPanel = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "sv-panel.vue"]]);

exports["default"] = SvPanel;
//# sourceMappingURL=sv-panel.js.map
