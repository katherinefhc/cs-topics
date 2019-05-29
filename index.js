const express = require('express');
const app = express();
const path = require('path');

// Express Middleware
// ===========================================================

app.set('views', __dirname);
app.set('view engine', 'ejs');

// Route
// ===========================================================

const list = require('./list.json');
app.get('/', function(req, res){
	res.render('view', { title: 'CS Topics', list });
});

// Listener
// ===========================================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
