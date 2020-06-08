const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// server.use(middlewares);
server.use((req, res, next) => {
  // if (isAuthorized(req)) {
  //   // add your authorization logic here
  //   next(); // continue to JSON Server router
  // } else {
  //   res.sendStatus(401)
  // }

  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

// In this example, returned resources will be wrapped in a body property
router.render = (req, res) => {
  res.jsonp({
    result: res.locals.data,
  });
};

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
