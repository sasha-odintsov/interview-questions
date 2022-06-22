const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3005;
const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://sasha:111111qw@cluster0.35ad4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection = client.db("interview-questions").collection("list");

app.get('/', (req, res) => {
  client.connect((err) => {
    collection.find({}).toArray().then((data) => {
      res.send(data);
      // client.close();
    });    
  });
});

app.patch('/status', (req, res) => {  
  client.connect(async (err) => {
    const data = req.body;
    const updateResult = await collection.updateOne(
      { _id: ObjectId(data._id) },
      { $set: { status: data.status}}
      );
      res.send(updateResult);
      // client.close();
    });
});

app.patch('/reset', (req, res) => {  
  client.connect(async (err) => {
    const data = req.body;
    const updateResult = await collection.updateMany(
      { status: { $gt : 0 } },
      { $set: { status: data.status}}
      );
      res.send(updateResult);
      // client.close();
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});