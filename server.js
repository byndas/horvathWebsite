const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon','favicon.ico')));

app.get('/', function(req, res){
			res.sendFile(process.cwd() + '/public/about.html');
		});
		
app.get('/drafting', function(req, res){
			res.sendFile(process.cwd() + '/public/drafting.html');
		});
		
app.get('/contact', function(req, res){
			res.sendFile(process.cwd() + '/public/contact.html');
		});

const port = process.env.PORT;
app.listen(port, function() {
	console.log('Node.js listening on port ' + port + '...');
});
