var express = require('express');
var router = express.Router();
// objet [databike] le tableau d'objets HOME
var databike = [
    {
        name: 'Model BIKO45',
        price: 679,
        url: 'images/bike-1.jpg'
    },
    {
        name: 'Model ZOOK7',
        price: 799,
        url: 'images/bike-2.jpg'
    },
    {
        name: 'Model LIKO89',
        price: 839,
        url: 'images/bike-3.jpg'
    },
    {
        name: 'Model GEWO',
        price: 1206,
        url: 'images/bike-4.jpg'
    },
    {
        name: 'Model TITAN5',
        price: 989,
        url: 'images/bike-5.jpg'
    },
    {
        name: 'Model AMIG39',
        price: 599,
        url: 'images/bike-6.jpg'
    }
]


// objet [dataCardBike] le tableau d'objets SHOP
var dataCardBike = [
    {
        img: 'images/bike-1.jpg',
        model: 'Model BIKO45',
        quantity: 2,
        pu: 679
    },
    {
        img: 'images/bike-2.jpg',
        model: 'Model ZOOK7',
        quantity: 3,
        pu: 799
    }
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
