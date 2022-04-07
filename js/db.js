const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const port = 3005;
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  const uri = "mongodb+srv://sasha:111111qw@cluster0.35ad4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect((err) => {
    const collection = client.db("interview-questions").collection("list");
    collection.find({}).toArray().then((data) => {
      res.send(data);
      client.close();
    });    
  });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});