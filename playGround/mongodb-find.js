const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology:true}, (err,database) => {
    if (err) {
        return console.log('Unable to connect with database');
    }
    console.log('Conntected to Mongo server');
    const db = database.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5fc26bd638d251204e4fa017')
    // }).toArray().then((doc) => {
    //     console.log(JSON.stringify(doc, undefined, 2));
    // }).then(() => {
    //     database.close();
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos Count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to count notes',err);
    // }).then(() => {
    //     database.close();
    // })

    db.collection('Users').find({name:'Rohan'}).toArray().then((doc) => {
        console.log(JSON.stringify(doc, undefined, 2));
    }, (err) => {
        console.log('Unable to find User',err);
    }).then(() => {
        database.close();
    })

    // database.close();
})