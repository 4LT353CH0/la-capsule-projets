var express = require('express');
var router = express.Router();
// objet [databike] le tableau d'objets HOME
var databike = [
    {
        model: 'Model BIKO45',
        pu: 679,
        img: 'images/bike-1.jpg',

    },
    {
        model: 'Model ZOOK7',
        pu: 799,
        img: 'images/bike-2.jpg'
    },
    {
        model: 'Model LIKO89',
        pu: 839,
        img: 'images/bike-3.jpg'
    },
    {
        model: 'Model GEWO',
        pu: 1206,
        img: 'images/bike-4.jpg'
    },
    {
        model: 'Model TITAN5',
        pu: 989,
        img: 'images/bike-5.jpg'
    },
    {
        model: 'Model AMIG39',
        pu: 599,
        img: 'images/bike-6.jpg'
    }
]


// objet [dataCardBike] le tableau d'objets SHOP
var dataCardBike = [
//    {
//        img: 'images/bike-1.jpg',
//        model: 'Model BIKO45',
//        quantity: 2,
//        pu: 679
//    },
//    {
//        img: 'images/bike-2.jpg',
//        model: 'Model ZOOK7',
//        quantity: 3,
//        pu: 799
//    }
]



/* GET index page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'tworks'
    });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
    // déclarer variable dans routage vers page
    res.render('home', {
        databike
    });
});
/* GET shop page. */
router.get('/shop', function (req, res, next) {
    res.render('shop', {
        dataCardBike
    });
});

/* POST bikes to shop page. */
router.post("/shop", function (req, res, next) {
    console.log(req.body);
    // console.log( dataCardBike[0]);
    dataCardBike.push(req.body);
    res.render('shop', {
        dataCardBike
    });
});

/* DELETE Bike object from shop page. */
router.get('/shop', function (req, res, next) {
    res.render('shop', {
        dataCardBike
    });
});

module.exports = router;

// browser-sync start --server --files "**/*.html, **/*.css, **/*.js"
// > https://www.browsersync.io/#install
