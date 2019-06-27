var app = require('express')();
//var app = exp();

app.route('/param/:x').get(function(req,res){
    res.send('Param = ' + req.params.x);
});

app.route('/query/').get(function(req,res){
    res.send('Query = ' + req.query.x + ' and ' + req.query.y + ' and ' + req.query.z);
});

app.route('/foo').get(function(req,res){
    res.send('express me');
});

app.route('/doo').get(function(req,res){
    res.send('express doo');
});

app.listen(3000,function(){});