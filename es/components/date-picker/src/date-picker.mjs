import { defineComponent, provide, reactive, toRef, ref, computed, createVNode, mergeProps, Fragment, isVNode } from 'vue';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
import localeData from 'dayjs/plugin/localeData.js';
import weekOfYear from 'dayjs/plugin/weekOfYear.js';
import weekYear from 'dayjs/plugin/weekYear.js';
import dayOfYear from 'dayjs/plugin/dayOfYear.js';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js';
import { ElRadioGroup, ElRadioButton } from '../../radio/index.mjs';
import '../../time-picker/index.mjs';
import { ROOT_PICKER_INJECTION_KEY } from './constants.mjs';
import { datePickerProps } from './props/date-picker.mjs';
import { getPanel } from './panel-utils.mjs';
import { DEFAULT_FORMATS_DATEPICKER, DEFAULT_FORMATS_DATE } from '../../time-picker/src/constants.mjs';
import CommonPicker from '../../time-picker/src/common/picker.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(dayOfYear);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
var DatePicker = defineComponent({
  name: "ElDatePicker",
  install: null,
  props: datePickerProps,
  emits: ["update:modelValue"],
  setup(props, {
    expose,
    emit,
    slots
  }) {
    var _a;
    const ns = useNamespace("picker-panel");
    provide("ElPopperOptions", reactive(toRef(props, "popperOptions")));
    provide(ROOT_PICKER_INJECTION_KEY, {
      slots,
      pickerNs: ns
    });
    const selectType = ref((_a = props.typeList) == null ? void 0 : _a[0]);
    const handleRadioChange = (value) => {
      selectType.value = value;
    };
    const commonPicker = ref();
    const refProps = {
      selectType,
      focus: () => {
        var _a2;
        (_a2 = commonPicker.value) == null ? void 0 : _a2.focus();
      },
      blur: () => {
        var _a2;
        (_a2 = commonPicker.value) == null ? void 0 : _a2.blur();
      },
      handleOpen: () => {
        var _a2;
        (_a2 = commonPicker.value) == null ? void 0 : _a2.handleOpen();
      },
      handleClose: () => {
        var _a2;
        (_a2 = commonPicker.value) == null ? void 0 : _a2.handleClose();
      }
    };
    expose(refProps);
    const onModelValueUpdated = (val) => {
      emit("update:modelValue", val);
    };
    const componentType = computed(() => {
      return selectType.value || props.type;
    });
    return () => {
      var _a2;
      const format = (_a2 = props.format) != null ? _a2 : DEFAULT_FORMATS_DATEPICKER[componentType.value] || DEFAULT_FORMATS_DATE;
      const Component = getPanel(componentType.value);
      return createVNode(CommonPicker, mergeProps(props, {
        "format": format,
        "type": componentType.value,
        "ref": commonPicker,
        "onUpdate:modelValue": onModelValueUpdated
      }), {
        default: (scopedProps) => {
          var _a3;
          let _slot;
          return createVNode(Fragment, null, [((_a3 = props.typeList) == null ? void 0 : _a3.length) > 0 && createVNode(ElRadioGroup, {
            "modelValue": selectType.value,
            "onChange": handleRadioChange,
            "size": "small"
          }, _isSlot(_slot = props.typeList.map((type) => createVNode(ElRadioButton, {
            "key": type,
            "value": type,
            "label": type,
            "class": {
              "is-active": selectType.value === type
            }
          }, null))) ? _slot : {
            default: () => [_slot]
          }), createVNode(Component, scopedProps, {
            "prev-month": slots["prev-month"],
            "next-month": slots["next-month"],
            "prev-year": slots["prev-year"],
            "next-year": slots["next-year"]
          })]);
        },
        "range-separator": slots["range-separator"],
        open: slots["open"]
      });
    };
  }
});

export { DatePicker as default };
//# sourceMappingURL=date-picker.mjs.map
