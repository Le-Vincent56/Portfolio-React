// Imports
const controllers = require('./controllers');

// Route pages
const router = (app) => 
{
    app.get('/', controllers.index);
    app.get('/*', controllers.notFound);
}

module.exports = router;