const express = require ('express');
const handler = require ('./handler');
const fs = require ('fs');

const router = express.Router ();

// путь к файлу json
const cartJsonPath = 'dist/server/db/userCart.json';

router.get ('/', (req, res) => {
    fs.readFile (cartJsonPath, 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus (404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send (data);
        }
    })
});

router.post ('/', (req, res) => {
    handler (req, res, 'add', cartJsonPath);
});

router.put ('/:id', (req, res) => {
    //console.log('req.body.action: ' + req.body.action);
    //console.dir(req.body);
    handler (req, res, req.body.action, cartJsonPath);
});

router.delete ('/', (req, res) => {
    handler (req, res, 'del', cartJsonPath);
});




//app.get();
//app.post();
//app.put();
//app.delete();


module.exports = router;