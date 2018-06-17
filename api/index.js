const Config = require('./config.js');  
const Router = require('restify-router').Router;
const router = new Router();
const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const logger = require('./Logger.js');
const controllers = require('./services/service.js');

const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins: ['*'],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry']
})

var server = restify.createServer();
server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.queryParser());
server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.bodyParser());

router.get("/test", controllers.test);

router.applyRoutes(server, Config.appname);

server.listen(8080, function() {
    logger.info('%s listening at %s', server.name, server.url);
});