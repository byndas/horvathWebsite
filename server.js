const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const app = express();

app.use('/Public', express.static(process.cwd() + '/Public'));
app.use(favicon(path.join(__dirname, 'Public', 'Images','favicon.ico')));

app.get('/', function(req, res){
			res.sendFile(process.cwd() + '/Public/main.html');
		});

const port = process.env.PORT;
app.listen(port, function() {
	console.log('Node.js listening on port ' + port + '...');
});
