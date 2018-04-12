var db = require('mongoskin').db('mongodb://localhost:27017/microblog');



db.collection('dfdfd').find().toArray(function (mongoError,res) {
    if(mongoError) throw mongoError;
    console.log(res);
});
