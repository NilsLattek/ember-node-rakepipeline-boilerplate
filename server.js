var application_root = __dirname,
  express = require("express"),
  path = require("path");

var app = express.createServer();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  //app.set('views', path.join(application_root, "views"));
  //app.set('view engine', 'jade')
});

app.get('/api/todos', function(req, res){
  // TODO: get todos from database, for example mongoose...
  res.send([{title: "Todo 1"}, {title: "Todo 2"}]);
});

app.listen(3000);