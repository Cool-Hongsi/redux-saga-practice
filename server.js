const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const bodyParser = require('body-parser');
const database = require('./database');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const dataAPI = [
    {
        "id" : 0,
        "name" : "Banana",
        "price" : 200
    },
    {
        "id" : 1,
        "name" : "Apple",
        "price" : 300
    }
];

app.get('/api/getData', (req, res) => {
    database.getDB().then((success) => {
        console.log(success);

        res.json(dataAPI);

    }).catch((fail) => {
        console.log(fail);
    })
});

app.post('/api/postData/:id', (req, res) => {
    database.postDB(parseInt(req.params.id), req.body.name, parseInt(req.body.price)).then((success) => {
        console.log(success);

        let checkDuplicateId = dataAPI.find(item => item.id === parseInt(req.params.id));

        if(checkDuplicateId === undefined) // There is NO duplicate value
        {
            dataAPI.push({
                id : parseInt(req.params.id),
                name : req.body.name,
                price : parseInt(req.body.price)
            });
        };

        res.json(dataAPI);

    }).catch((fail) => {
        console.log(fail);
    })
});

app.put('/api/putData/:id', (req, res) => {
    database.putDB(parseInt(req.params.id), req.body.name, parseInt(req.body.price)).then((success) => {
        console.log(success);

        dataAPI.map((el) => {
            if(el.id === parseInt(req.params.id)){
                el.name = req.body.name;
                el.price = parseInt(req.body.price);
            }
        });

        res.json(dataAPI);

    }).catch((fail) => {
        console.log(fail);
    })
});

app.delete('/api/deleteData/:id', (req, res) => {
    database.deleteDB(parseInt(req.params.id)).then((success) => {
        console.log(success);

        let deleteIndex = dataAPI.findIndex(item => item.id === parseInt(req.params.id));
        dataAPI.splice(deleteIndex, 1);

        res.json(dataAPI);

    }).catch((fail) => {
        console.log(fail);
    })
});

app.listen(port, () => {
    console.log(`Connected ${port}`);
});