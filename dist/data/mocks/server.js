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
Object.defineProperty(exports, "__esModule", { value: true });
const jsonServer = require('json-server');
const server = jsonServer.create();
const path = __importStar(require("path"));
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
server.use(middlewares);
server.use((req, res, next) => {
    next();
});
router.render = (req, res) => {
    if (req.method === 'POST') {
        res.statusCode = 200;
    }
    if (req.method === 'DELETE') {
        res.locals.data = null;
    }
    res.jsonp({
        result: res.locals.data,
    });
};
server.use(router);
server.listen(port, () => {
    console.log('\x1b[42m\x1b[30m%s\x1b[0m', `Mock GoREST API is Online on http://localhost:${port}`);
    console.log('');
});
//# sourceMappingURL=server.js.map