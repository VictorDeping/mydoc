var express = require('express');
var router = express.Router();
var db = require('mongoskin').db('mongodb://localhost:27017/microblog');



router.get('/test', function (req, res, next) {
    db.collection('microblog').find().toArray(function (mongoError,res) {

        if(mongoError) throw mongoError;
        console.log(res);
    });
    //return res.render('index', {title: 'Hellow World', layout:'layout.ejs'});
})

router.get('/reg', function (req, res, next) {
    return res.render('hello');
})


router.get('/', function (req, res, next) {
    return res.render('test',{title:"test",item:['1','2','3']});
})

router.get('/', function (req, res, next) {

})

router.get('/', function (req, res, next) {

})

router.get('/', function (req, res, next) {

})

router.get('/', function (req, res, next) {

})


module.exports = router;
