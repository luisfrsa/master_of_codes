"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _HumanoAbstract2 = require("./HumanoAbstract.class");

var _HumanoAbstract3 = _interopRequireDefault(_HumanoAbstract2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homem = function (_HumanoAbstract) {
        _inherits(Homem, _HumanoAbstract);

        function Homem(nome, calorias) {
                _classCallCheck(this, Homem);

                var _this = _possibleConstructorReturn(this, (Homem.__proto__ || Object.getPrototypeOf(Homem)).call(this, nome, calorias));

                _get(Homem.prototype.__proto__ || Object.getPrototypeOf(Homem.prototype), "setSexo", _this).call(_this, "H");
                _get(Homem.prototype.__proto__ || Object.getPrototypeOf(Homem.prototype), "setGastoPorHora", _this).call(_this, 15);
                return _this;
        }

        return Homem;
}(_HumanoAbstract3.default);

exports.default = Homem;
//# sourceMappingURL=Homem.class.js.map