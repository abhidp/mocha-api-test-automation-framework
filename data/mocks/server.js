const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    res.sendStatus(200);
  }
  next();
});

router.render = (req, res) => {
  res.jsonp({
    result: res.locals.data,
  });
};

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
