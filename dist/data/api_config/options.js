"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.userURL = void 0;
require('dotenv').config();
const qs_1 = __importDefault(require("qs"));
var url, data;
exports.userURL = (path) => {
    process.env.NODE_ENV == 'LOCAL'
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