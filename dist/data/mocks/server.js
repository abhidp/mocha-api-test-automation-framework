const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
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