const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology:true}, (err, database) => {
    if (err) {
        return console.log('Unable to connect to database');
    } 
    console.log('Connected to MongoDB server');

    const db = database.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Walk the Dog',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo',err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     database.close();
    // }); 

    // db.collection('Users').insertOne({
    //     name: 'Rohan',
    //     age: 23,
    //     Location: 'India'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user',err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     database.close();
    // })
})