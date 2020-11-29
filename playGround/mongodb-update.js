const {MongoClient, ObjectId, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology:true} , (err,database) => {
    if (err) {
        return console.log('Unable to connect to server');
    }

    console.log('Connected to Mongodb server');

    const db = database.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5fc26bd638d251204e4fa017')
    // }, {
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
        _id: new ObjectID('5fc281ab8fa4842c8d01b208')
    }, {
        $set: {
            name: 'Rocky'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
})