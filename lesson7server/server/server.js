// модуль для работы с http запросами
const express = require('express');

// модуль для работы с файловой системой
const fs = require('fs');




const app = express();
app.use(express.json());
app.use('/', express.static('public'));

// http://localhost:3000/

app.get('/api/products', (request, response) => {
    // имитация запроса к базе данных -- обращение к файлу JSON (хотя в реальности бд все равно отдаст JSON
    fs.readFile('server/db/products.json','utf-8', (error, data) => {
       if (error) {
           // имитация ответа на запроса к БД -- файл JSON с {"result" : 0}
           response.sendStatus(404, JSON.stringify({result: 0, text: error}));
       }
       else {
           response.send(data);
       }
    });
});

app.get('/api/cart', (request, response) => {
    // имитация запроса к базе данных -- обращение к файлу JSON (хотя в реальности бд все равно отдаст JSON
    fs.readFile('server/db/userCart.json','utf-8', (error, data) => {
        if (error) {
            // имитация ответа на запроса к БД -- файл JSON с {"result" : 0}
            response.sendStatus(404, JSON.stringify({result: 0, text: error}));
        }
        else {
            response.send(data);
        }
    });
});

const handler = require ('./handler');


app.post ('/api/cart', (req, res) => {
    handler (req, res, 'add', 'server/db/userCart.json');
});

app.put ('/api/cart/:id', (req, res) => {
    //console.log('req.body.action: ' + req.body.action);
    //console.dir(req.body);
    handler (req, res, req.body.action, 'server/db/userCart.json');
});

app.delete ('/api/cart', (req, res) => {
    handler (req, res, 'del', 'server/db/userCart.json');
});


app.listen( 3000 , () => {
    console .log( 'server is running on port 3000!' );
});

//app.get();
//app.post();
//app.put();
//app.delete();

