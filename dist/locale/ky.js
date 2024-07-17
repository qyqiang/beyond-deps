/*! Element Plus v1.01 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ElementPlusLocaleKy = factory());
})(this, (function () { 'use strict';

  var ky = {
    name: "ky",
    el: {
      breadcrumb: {
        label: "Breadcrumb"
      },
      colorpicker: {
        confirm: "\u041C\u0443\u0440\u0443\u043D\u043A\u0443",
        clear: "\u0430\u0447\u044B\u043A"
      },
      datepicker: {
        now: "\u0430\u0437\u044B\u0440",
        today: "\u0431\u04AF\u0433\u04AF\u043D",
        cancel: "\u0436\u043E\u043A\u043A\u043E \u0447\u044B\u0433\u0430\u0440\u044B\u043B\u0434\u044B",
        clear: "\u0430\u0447\u044B\u043A",
        confirm: "\u0431\u0435\u043B\u0433\u0438\u043B\u04E9\u04E9",
        selectDate: "\u0434\u0430\u0442\u0430",
        selectTime: "\u0442\u0430\u043D\u0434\u043E\u043E \u0443\u0431\u0430\u043A\u0442\u044B\u0441\u044B",
        startDate: "\u0411\u0430\u0448\u0442\u0430\u043B\u0433\u0430\u043D \u0434\u0430\u0442\u0430\u0441\u044B",
        startTime: "Start \u0443\u0431\u0430\u043A\u044B\u0442",
        endDate: "\u0411\u04AF\u0442\u043A\u04E9\u043D \u0434\u0430\u0442\u0430\u0441\u044B",
        endTime: "End \u0443\u0431\u0430\u043A\u044B\u0442",
        prevYear: "\u04E9\u0442\u043A\u04E9\u043D \u0436\u044B\u043B\u044B",
        nextYear: "\u0431\u0438\u0440 \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0438\u0439\u0438\u043D",
        prevMonth: "\u04E8\u0442\u043A\u04E9\u043D \u0430\u0439\u0434\u0430",
        nextMonth: "\u041A\u0438\u0439\u0438\u043D\u043A\u0438 \u0430\u0439",
        year: "\u0436\u044B\u043B",
        month1: "\u0431\u0438\u0440\u0438\u043D\u0447\u0438 \u0430\u0439",
        month2: "\u042D\u043A\u0438\u043D\u0447\u0438 \u0430\u0439\u0434\u0430",
        month3: "\u04AE\u0447\u04AF\u043D\u0447\u04AF \u0430\u0439\u0434\u0430",
        month4: "\u0422\u04E9\u0440\u0442\u04AF\u043D\u0447\u04AF \u0430\u0439\u0434\u0430",
        month5: "\u0431\u0435\u0448\u0438\u043D\u0447\u0438 \u0430\u0439\u0434\u0430",
        month6: "\u0410\u043B\u0433\u0430\u0447\u043A\u044B \u0430\u043B\u0442\u044B \u0430\u0439",
        month7: "\u0436\u0435\u0442\u0438\u043D\u0447\u0438 \u0430\u0439\u0434\u0430",
        month8: "\u0441\u0435\u0433\u0438\u0437\u0438\u043D\u0447\u0438 \u0430\u0439",
        month9: "\u0410\u043B\u0433\u0430\u0447\u043A\u044B \u0442\u043E\u0433\u0443\u0437 \u0430\u0439",
        month10: "\u043E\u043D\u0443\u043D\u0447\u0443 \u0430\u0439\u0434\u0430",
        month11: "\u043E\u043D \u0431\u0438\u0440\u0438\u043D\u0447\u0438 \u0430\u0439",
        month12: "\u043E\u043D \u044D\u043A\u0438\u043D\u0447\u0438 \u0430\u0439\u0434\u0430",
        weeks: {
          sun: "\u0436\u0435\u0442\u0438 \u0436\u0443\u043C\u0430",
          mon: "\u0434\u04AF\u0439\u0448\u04E9\u043C\u0431\u04AF",
          tue: "\u0448\u0435\u0439\u0448\u0435\u043C\u0431\u0438",
          wed: "\u0448\u0430\u0440\u0448\u0435\u043C\u0431\u0438",
          thu: "\u0431\u0435\u0439\u0448\u0435\u043C\u0431\u0438",
          fri: "\u0436\u0443\u043C\u0430",
          sat: "\u0438\u0448\u0435\u043C\u0431\u0438"
        },
        months: {
          jan: "\u0431\u0438\u0440\u0438\u043D\u0447\u0438 \u0430\u0439",
          feb: "\u042D\u043A\u0438\u043D\u0447\u0438 \u0430\u0439\u0434\u0430",
          mar: "\u04AE\u0447\u04AF\u043D\u0447\u04AF \u0430\u0439\u0434\u0430",
          apr: "\u0422\u04E9\u0440\u0442\u04AF\u043D\u0447\u04AF \u0430\u0439\u0434\u0430",
          may: "\u0431\u0435\u0448\u0438\u043D\u0447\u0438 \u0430\u0439\u0434\u0430",
          jun: "\u0410\u043B\u0433\u0430\u0447\u043A\u044B \u0430\u043B\u0442\u044B \u0430\u0439",
          jul: "\u0436\u0435\u0442\u0438\u043D\u0447\u0438 \u0430\u0439\u0434\u0430",
          aug: "\u0441\u0435\u0433\u0438\u0437\u0438\u043D\u0447\u0438 \u0430\u0439",
          sep: "\u0410\u043B\u0433\u0430\u0447\u043A\u044B \u0442\u043E\u0433\u0443\u0437 \u0430\u0439",
          oct: "\u043E\u043D\u0443\u043D\u0447\u0443 \u0430\u0439\u0434\u0430",
          nov: "\u043E\u043D \u0431\u0438\u0440\u0438\u043D\u0447\u0438 \u0430\u0439",
          dec: "\u043E\u043D \u044D\u043A\u0438\u043D\u0447\u0438 \u0430\u0439\u0434\u0430"
        }
      },
      select: {
        loading: "\u0416\u04AF\u043A\u0442\u04E9\u043B\u04AF\u04AF\u0434\u04E9",
        noMatch: "\u0414\u0430\u043B \u043A\u0435\u043B\u0433\u0435\u043D \u043C\u0430\u0430\u043B\u044B\u043C\u0430\u0442\u0442\u0430\u0440",
        noData: "\u043C\u0430\u0430\u043B\u044B\u043C\u0430\u0442 \u0436\u043E\u043A",
        placeholder: "\u0442\u0430\u043D\u0434\u043E\u043E"
      },
      cascader: {
        noMatch: "\u0414\u0430\u043B \u043A\u0435\u043B\u0433\u0435\u043D \u043C\u0430\u0430\u043B\u044B\u043C\u0430\u0442\u0442\u0430\u0440",
        loading: "\u0416\u04AF\u043A\u0442\u04E9\u043B\u04AF\u04AF\u0434\u04E9",
        placeholder: "\u0442\u0430\u043D\u0434\u043E\u043E",
        noData: "\u043C\u0430\u0430\u043B\u044B\u043C\u0430\u0442 \u0436\u043E\u043A"
      },
      pagination: {
        goto: "\u041C\u0443\u0440\u0443\u043D\u043A\u0443",
        pagesize: "\u0431\u0438\u0440",
        total: "\u0431\u04AF\u0442\u04AF\u043D\u0434\u04E9\u0439 {total} \u0441\u0430\u043D ",
        pageClassifier: "\u0431\u0435\u0442",
        page: "Page",
        prev: "Go to previous page",
        next: "Go to next page",
        currentPage: "page {pager}",
        prevPages: "Previous {pager} pages",
        nextPages: "Next {pager} pages"
      },
      messagebox: {
        title: "\u0442\u0435\u0437",
        confirm: "\u0431\u0435\u043B\u0433\u0438\u043B\u04E9\u04E9",
        cancel: "\u0436\u043E\u043A\u043A\u043E \u0447\u044B\u0433\u0430\u0440\u044B\u043B\u0434\u044B",
        error: "\u041C\u0430\u0430\u043B\u044B\u043C\u0430\u0442\u0442\u0430\u0440\u0434\u044B \u043A\u0438\u0440\u0433\u0438\u0437\u04AF\u04AF \u043C\u044B\u0439\u0437\u0430\u043C\u0434\u0443\u0443 \u044D\u043C\u0435\u0441!"
      },
      upload: {
        deleteTip: "\u0416\u043E\u043A \u043A\u044B\u043B\u0443\u0443 \u0431\u0430\u0441\u043A\u044B\u0447\u044B\u043D \u0431\u0430\u0441\u0443\u0443 \u0436\u043E\u043A",
        delete: "\u0436\u043E\u043A \u043A\u044B\u043B\u0443\u0443",
        preview: "\u0416\u041C\u041A\u043D\u044B\u043D \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438",
        continue: "\u0436\u04AF\u043A\u0442\u04E9\u043F \u0431\u0435\u0440"
      },
      table: {
        emptyText: "\u043C\u0430\u0430\u043B\u044B\u043C\u0430\u0442 \u0436\u043E\u043A",
        confirmFilter: "\u0447\u044B\u043F\u043A\u0430",
        resetFilter: "\u043A\u0430\u0439\u0440\u0430 \u043E\u0440\u043D\u043E\u0442\u0443\u0443",
        clearFilter: "\u0431\u04AF\u0442\u043A\u04E9\u043D",
        sumText: "\u0411\u0430\u0440\u0434\u044B\u0433\u044B \u0431\u043E\u043B\u0443\u043F"
      },
      tree: {
        emptyText: "\u043C\u0430\u0430\u043B\u044B\u043C\u0430\u0442 \u0436\u043E\u043A"
      },
      transfer: {
        noMatch: "\u0414\u0430\u043B \u043A\u0435\u043B\u0433\u0435\u043D \u043C\u0430\u0430\u043B\u044B\u043C\u0430\u0442\u0442\u0430\u0440",
        noData: "\u043C\u0430\u0430\u043B\u044B\u043C\u0430\u0442 \u0436\u043E\u043A",
        titles: ["1 \u0442\u0438\u0437\u043C\u0435\u0441\u0438", "2 \u0442\u0438\u0437\u043C\u0435\u0441\u0438"],
        filterPlaceholder: "\u0421\u0443\u0440\u0430\u043D\u044B\u0447, \u0438\u0437\u0434\u04E9\u04E9 \u043A\u0438\u0440\u0435\u0442",
        noCheckedFormat: "\u0431\u04AF\u0442\u04AF\u043D\u0434\u04E9\u0439 {total} \u0441\u0430\u043D",
        hasCheckedFormat: "\u0422\u0430\u043D\u0434\u0430\u043B\u0433\u0430\u043D {checked}/{total} \u0441\u0430\u043D"
      },
      image: {
        error: "FAILED"
      },
      pageHeader: {
        title: "Back"
      },
      popconfirm: {
        confirmButtonText: "Yes",
        cancelButtonText: "No"
      },
      carousel: {
        leftArrow: "Carousel arrow left",
        rightArrow: "Carousel arrow right",
        indicator: "Carousel switch to index {index}"
      }
    }
  };

  return ky;

}));
