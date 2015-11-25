var express = require('express'),
	app = express();

app.set('views', './build');
app.use(express.static('./build'));

app.get('/', function(req, res) {
	res.render('index', {});
});

console.log('server is running at localhost:7000...');
app.listen(7000);
