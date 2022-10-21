module.exports.getAllTools = (req, res, next) => {
    const { ip, query, params, body, headers } = req;
    console.log('ip', ip, 'query', query, '3', params, '4', body, '5',headers);
    // res.download(__dirname + '/tools.controllers.js');
    // res.json({"name": "Sakib"});
    // res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    // res.status(201).cookie('tests', 'tests');
    res.send('Got it');


}

module.exports.saveATool = (req, res, next) => {
    
}

module.exports.getToolDetails = (req, res, next) => {
    res.send('Tool detaiols found');
}