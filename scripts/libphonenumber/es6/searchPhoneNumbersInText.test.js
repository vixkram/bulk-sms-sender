function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import searchPhoneNumbersInText from './searchPhoneNumbersInText.js';
import metadata from '../metadata.min.json';
describe('searchPhoneNumbersInText', function () {
  it('should find phone numbers (with default country)', function () {
    var NUMBERS = ['+78005553535', '+12133734253'];

    for (var _iterator = _createForOfIteratorHelperLoose(searchPhoneNumbersInText('The number is +7 (800) 555-35-35 and not (213) 373-4253 as written in the document.', 'US', metadata)), _step; !(_step = _iterator()).done;) {
      var number = _step.value;
      number.number.number.should.equal(NUMBERS[0]);
      NUMBERS.shift();
    }
  });
  it('should find phone numbers', function () {
    var NUMBERS = ['+78005553535', '+12133734253'];

    for (var _iterator2 = _createForOfIteratorHelperLoose(searchPhoneNumbersInText('The number is +7 (800) 555-35-35 and not (213) 373-4253 as written in the document.', metadata)), _step2; !(_step2 = _iterator2()).done;) {
      var number = _step2.value;
      number.number.number.should.equal(NUMBERS[0]);
      NUMBERS.shift();
    }
  });
});
//# sourceMappingURL=searchPhoneNumbersInText.test.js.map