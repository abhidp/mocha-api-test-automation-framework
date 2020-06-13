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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUT_post_body = exports.POST_post_body = void 0;
const axios = require('axios').default;
const options = __importStar(require("../api_config/options"));
const config = options.options('GET', '/users');
exports.POST_post_body = () => __awaiter(void 0, void 0, void 0, function* () {
    return {
        user_id: (yield axios(config)).data.result[0].id,
        title: 'Create a new New Post',
        body: 'This endpoint creates a new post using the POST method',
    };
});
exports.PUT_post_body = () => __awaiter(void 0, void 0, void 0, function* () {
    return {
        user_id: (yield axios(config)).data.result[0].id,
        title: 'Edit the newly created Post',
        body: 'This endpoint edits the post using the PUT method',
    };
});
module.exports = {
    POST_post_body: exports.POST_post_body,
    PUT_post_body: exports.PUT_post_body,
};
//# sourceMappingURL=posts.js.map