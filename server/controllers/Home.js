const hostIndex = (req, res) => {
    res.render('index', {
        title: 'HOME'
    });
}
    
const notFound = (req, res) => {
    res.status(404).render('notFound', {
        title: 'NOT FOUND'
    });
}

module.exports = 
{
    index: hostIndex,
    notFound
}