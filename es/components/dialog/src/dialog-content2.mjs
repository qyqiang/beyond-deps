import { buildProps } from '../../../utils/vue/props/runtime.mjs';
import { iconPropType } from '../../../utils/vue/icon.mjs';

var HeaderType = /* @__PURE__ */ ((HeaderType2) => {
  HeaderType2["Error"] = "error";
  HeaderType2["Warning"] = "warning";
  return HeaderType2;
})(HeaderType || {});
const dialogContentProps = buildProps({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: iconPropType
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  showClose: {
    type: Boolean,
    default: true
  },
  headerBackgroundColor: {
    type: String,
    default: ""
  },
  headerType: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
});
const dialogContentEmits = {
  close: () => true
};

export { HeaderType, dialogContentEmits, dialogContentProps };
//# sourceMappingURL=dialog-content2.mjs.map
