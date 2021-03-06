const express = require ("express");
const redis = require ("redis");
const process=require("process");

const app = express();
const client = redis.createClient({
    host: "redis-server",
    port: 6379
});

client.set('visitskey', 1);

app.get('/', (req, res) =>{
    // process.exit(0);
    client.get('visitskey', (err, visitsval) => {
        res.send("Number of visits is: " + visitsval);
        client.set('visitskey', parseInt(visitsval) + 1);
    });
});


app.listen(8080, () => {
    console.log("Listenning on port 8080");
});