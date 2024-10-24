// Imports
const controllers = require('./controllers');

// Route pages
const router = (app) => 
{
    app.get('/', controllers.Home.index);
    //app.get('/*', controllers.Home.notFound);

    app.get('/getAudioProjects', controllers.Audio.getAudioProjects);
    app.get('/getCodeProjects', controllers.Code.getCodeProjects);
}

module.exports = router;