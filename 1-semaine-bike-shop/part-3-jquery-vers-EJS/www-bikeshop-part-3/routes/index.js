var express = require('express');
var router = express.Router();
// objet [databike] le tableau d'objets HOME
var databike = [
    {
        model: 'Model BIKO45',
        price: 679,
        img: 'images/bike-1.jpg',
        
    },
    {
        model: 'Model ZOOK7',
        price: 799,
        img: 'images/bike-2.jpg'
    },
    {
        model: 'Model LIKO89',
        price: 839,
        img: 'images/bike-3.jpg'
    },
    {
        model: 'Model GEWO',
        price: 1206,
        img: 'images/bike-4.jpg'
    },
    {
        model: 'Model TITAN5',
        price: 989,
        img: 'images/bike-5.jpg'
    },
    {
        model: 'Model AMIG39',
        price: 599,
        img: 'images/bike-6.jpg'
    }
]


// objet [dataCardBike] le tableau d'objets SHOP
var dataCardBike = [
//    {
//        img: null,
//        model: null,
//        quantity: null,
//        pu: null
//    }, 
//    {
//        img: null,
//        model: null,
//        quantity: null,
//        pu: null
//    }
]
//var pu = dataCardBike
//var totalCmd = 


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
module.exports = router;

// browser-sync start --server --files "**/*.html, **/*.css, **/*.js"
// > https://www.browsersync.io/#install
