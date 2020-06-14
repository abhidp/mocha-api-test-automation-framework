"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.userURL = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const qs_1 = __importDefault(require("qs"));
let url;
exports.userURL = (path) => {
    process.env.NODE_ENV === 'LOCAL'
        ? (url = `${process.env.LOCAL_URL}`)
        : (url = `${process.env.BASE_URL}`);
    return `${url}${path}`;
};
const headers = {
    Authorization: `Bearer ${process.env.TOKEN}`,
};
function options(method, path, data = '') {
    return {
        method,
        url: exports.userURL(path),
        headers,
        data: qs_1.default.stringify(data),
    };
}
exports.options = options;
//# sourceMappingURL=options.js.map