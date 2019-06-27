const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var uri = 'mongodb+srv://admin:<Your_Password_here>@cluster0-8empy.mongodb.net/test?retryWrites=true&w=majority';


function iterateFunc(doc) {
    //console.log(JSON.stringify(doc, null, 4));
    console.log("ITR");
    console.log(doc._id);
 }
 
 function errorFunc(error) {
    console.log("ERROR");
    console.log(error);
 }
 
 
 const client = new MongoClient(uri, { useNewUrlParser: true });

 client.connect(err => {
    assert.equal(null, err);
    var cursor = client.db("dummy").collection('user').find({});
    cursor.forEach(iterateFunc, errorFunc);
    client.close();
  });
