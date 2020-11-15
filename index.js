const express = require ("express");
const redis = require ("redis");

const app = express();
const client = redis.createClient()

client.set('visitskey', 0);

app.get('/', (req, res) =>{
    client.get('visitskey', (err, visitsval) => {
        res.send("Number of visits is: " + visitsval);
        client.set('visitskey', parseInt(visitsval) + 1);
    });
});


app.listen(8080, () => {
    console.log("Listenning on port 8080");
});