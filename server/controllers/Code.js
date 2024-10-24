// Imports
const models = require('../models');
const { Code } = models;

const getCodeProjects = async (req, res) => 
{
    try 
    {
        const docs = await Code.find({}).select('title roles imageURL id').lean().exec();
        
        return res.json({projects: docs});
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: 'Error retrieving code projects!'});
    }
};

module.exports = {
    getCodeProjects
};