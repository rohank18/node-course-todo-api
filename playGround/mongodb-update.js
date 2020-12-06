const {MongoClient, ObjectId, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology:true} , (err,database) => {
    if (err) {
        return console.log('Unable to connect to server');
    }

    console.log('Connected to Mongodb server');

    const db = database.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({text: 'Walk the Dog'}, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    //     database.close();
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5fc281f6ae5faf2cb914bf48')
    }, {
        $set: {
            name: 'Jackie'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
        database.close();
    })
})