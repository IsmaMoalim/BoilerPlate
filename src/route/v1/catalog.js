let express =  require('express');
let router = express.Router();
let authroute = require('./auth.root');
let useroute = require('./user.root');

const routePath = [
    {
        path: '/auth',
        route: authroute
    },
    
    {
        path: '/user',
        route: useroute
    }
];

routePath.forEach(d => {

    router.use(d.path,d.route);
});

module.exports = router;
