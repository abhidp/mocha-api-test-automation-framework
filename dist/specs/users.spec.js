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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("regenerator-runtime/runtime.js");
const axios = require('axios').default;
const chai_1 = __importDefault(require("chai"));
const chai_2 = require("chai");
const data = __importStar(require("../data/test_data/users"));
const options = __importStar(require("../data/api_config/options"));
const users_1 = require("../data/schemas/users");
chai_1.default.use(require('chai-json-schema-ajv'));
describe('Test Users Endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
    var userId;
    it('GET all users', () => __awaiter(void 0, void 0, void 0, function* () {
        const config = options.options('GET', '/users');
        const response = yield axios(config);
        chai_2.expect(response.status).to.equal(200);
        chai_2.expect(response.data).to.be.an('object');
        chai_2.expect(response.headers['content-type']).to.contain('application/json');
        chai_2.expect(response.data.result).to.be.jsonSchema(users_1.getAllUsersResponseSchema);
    }));
    it('POST user', () => __awaiter(void 0, void 0, void 0, function* () {
        const config = options.options('POST', '/users', data.POST_user_body);
        const response = yield axios(config);
        userId = response.data.result.id;
        chai_2.expect(response.status).to.equal(200);
        chai_2.expect(response.data).to.be.an('object');
        chai_2.expect(response.headers['content-type']).to.contain('application/json');
        chai_2.expect(response.data.result).to.be.jsonSchema(users_1.postUserResponseSchema);
    }));
    it('GET user by Id', () => __awaiter(void 0, void 0, void 0, function* () {
        const config = options.options('GET', `/users/${userId}`);
        const response = yield axios(config);
        chai_2.expect(response.status).to.equal(200);
        chai_2.expect(response.data).to.be.an('object');
        chai_2.expect(response.headers['content-type']).to.contain('application/json');
        chai_2.expect(response.data.result).to.include(data.POST_user_body);
        chai_2.expect(response.data.result).to.be.jsonSchema(users_1.getUserByIdResponseSchema);
    }));
    it('PUT user by Id', () => __awaiter(void 0, void 0, void 0, function* () {
        const config = options.options('PUT', `/users/${userId}`, data.PUT_user_body);
        const response = yield axios(config);
        chai_2.expect(response.status).to.equal(200);
        chai_2.expect(response.data).to.be.an('object');
        chai_2.expect(response.headers['content-type']).to.contain('application/json');
        chai_2.expect(response.data.result).to.include(data.PUT_user_body);
        chai_2.expect(response.data.result).to.be.jsonSchema(users_1.postUserResponseSchema);
    }));
    it('DELETE user by Id', () => __awaiter(void 0, void 0, void 0, function* () {
        const config = options.options('DELETE', `/users/${userId}`);
        const response = yield axios(config);
        chai_2.expect(response.status).to.equal(200);
        chai_2.expect(response.data).to.be.an('object');
        chai_2.expect(response.headers['content-type']).to.contain('application/json');
        chai_2.expect(response.data.result).to.be.null;
    }));
}));
//# sourceMappingURL=users.spec.js.map