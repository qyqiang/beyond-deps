'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useOption = require('./useOption.js');
var option = require('./option.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index.js');
var index$1 = require('../../../hooks/use-id/index.js');

const _sfc_main = vue.defineComponent({
  name: option.COMPONENT_NAME,
  componentName: option.COMPONENT_NAME,
  props: option.optionProps,
  setup(props) {
    const ns = index.useNamespace("select");
    const id = index$1.useId();
    const containerKls = vue.computed(() => [
      ns.be("dropdown", "item"),
      ns.is("disabled", vue.unref(isDisabled)),
      ns.is("selected", vue.unref(itemSelected)),
      ns.is("hovering", vue.unref(hover))
    ]);
    const states = vue.reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hover: false
    });
    const {
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      updateOption
    } = useOption.useOption(props, states);
    const { visible, hover } = vue.toRefs(states);
    const vm = vue.getCurrentInstance().proxy;
    select.onOptionCreate(vm);
    vue.onBeforeUnmount(() => {
      const key = vm.value;
      vue.nextTick(() => {
        const { selected: selectedOptions } = select.states;
        const doesSelected = selectedOptions.some((item) => {
          return item.value === vm.value;
        });
        if (select.states.cachedOptions.get(key) === vm && !doesSelected) {
          select.states.cachedOptions.delete(key);
        }
      });
      select.onOptionDestroy(key, vm);
    });
    function selectOptionClick() {
      if (!isDisabled.value) {
        select.handleOptionSelect(vm);
      }
    }
    return {
      ns,
      id,
      containerKls,
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      visible,
      hover,
      states,
      hoverItem,
      updateOption,
      selectOptionClick
    };
  }
});
function _sfc_render(_ctx, _cache) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("li", {
    id: _ctx.id,
    class: vue.normalizeClass(_ctx.containerKls),
    role: "option",
    "aria-disabled": _ctx.isDisabled || void 0,
    "aria-selected": _ctx.itemSelected,
    onMousemove: _ctx.hoverItem,
    onClick: vue.withModifiers(_ctx.selectOptionClick, ["stop"])
  }, [
    vue.renderSlot(_ctx.$slots, "default", {}, () => [
      vue.createElementVNode("div", { class: "option-wrap" }, [
        vue.createElementVNode("div", { class: "option-wrap-content" }, vue.toDisplayString(_ctx.currentLabel), 1),
        vue.withDirectives(vue.createElementVNode("div", { class: "option-wrap-icon" }, [
          vue.createVNode(_component_el_icon, { size: "16px" }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createElementBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none"
              }, [
                vue.createElementVNode("path", {
                  d: "M5.20006 14.2833C4.97716 14.2834 4.75643 14.2395 4.55052 14.1542C4.3446 14.0688 4.15754 13.9437 4.00006 13.786L0.292725 10.0807L1.70739 8.66665L5.20006 12.1593L14.2927 3.06665L15.7074 4.48065L6.40006 13.786C6.24257 13.9437 6.05552 14.0688 5.8496 14.1542C5.64369 14.2395 5.42296 14.2834 5.20006 14.2833Z",
                  fill: "#2A3F4D"
                })
              ]))
            ]),
            _: 1
          })
        ], 512), [
          [vue.vShow, _ctx.itemSelected]
        ])
      ])
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [vue.vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "option.vue"]]);

exports["default"] = Option;
//# sourceMappingURL=option2.js.map
