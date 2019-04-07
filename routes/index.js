var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {    products: [
          {

              name: "МИЛОКО",
              price: 320+" "+"тг",
              description: [
                "вкусное молоко",
                "что-то еще"
               ],
              photos: [
                "q.jpg",
                "w.jpg",
                "e.jpg",
                "r.jpg"
              ]
          },
          {
            name: "LeBleu",
              price: 550+" "+"тг",
            description: [
              "вкусное молоко",
              "что-то еще"
             ],
            photos: [
              "t.jpg",
              "y.jpg",
              "u.jpg",
              "i.jpg"
            ]
          },
          {

            name: "Эмиль",
              price: 320+" "+"тг",
            description: [
              "вкусное молоко",
              "что-то еще"
             ],
            photos: [
              "o.png",
              "p.jpg",
              "a.jpg",
              "s.jpg"
            ]
          }
      ],
      category:[
        {
          category: "Молоко",
          e: "Молоко"
         }]
     },);
});

router.get('/cheese', function(req, res,next) {
  res.render('index', { products: [
          {
            category: "Сыр",
            e: "Сыр",
              name: "LeBlue",
              price: 7800+" "+"тг/кг",
            description: [
              "вкусный сыр",
              "что-то еще"
             ],
             photos: [
                "1.jpg",
                "2.jpg",
                "3.jpg",
                "4.jpg"
              ]

          },

          {
              name: "AA",
              price: 7800+" "+"тг/кг",
            description: [
              "вкусный сыр",
              "что-то еще"
             ],
             photos: [
                "5.jpg",
                "6.png",
                "7.jpeg",
                "8.jpg"
              ]
          },
      ],
      category:[
        {
          category: "Сыр",
          e: "Сыр"
         }] });
})
router.get('/icecream', function(req, res, next) {
  res.render('index', { products: [
          {
            category: "Мороженое",
            e: "Мороженое",
              name: "Bambino",
              price: '1800 тг',
              description: [
                "вкусное мороженое",
                "что-то еще"
               ],

              photos: [
                 "9.png",
                 "10.jpg",
                 "11.jpg",
                 "12.jpg"
               ]
          },
          {
              name: "Tutti-frutti",
              price: '600 тг',
              description: [
                "вкусное мороженое",
                "что-то еще"
               ],
              photos: [
                 "13.png",
                 "14.jpg",
                 "15.jpg",
                 "16.jpg"
               ]
          },
          

        ],
        category:[
          {
            category: "мороженое",
            e: "мороженое"
           }] });

});
router.get('/yogurt', function(req, res, next) {
  res.render('index', { products: [
          {
            name: "Йогурт ЧУДо",
            price: '350тг',
            description: [
                "Объем 0,5л",
                "Еще что-то"
            ],
            photos: [
            "17.jpeg",
            "18.jpg",
            "19.jpg",
              "20.png"
            ]
          },
        {
            name: "Йогурт Chobani",
            price: '350тг',
            description: [
                "Объем 0,5л",
                "Еще что-то"
            ],
            photos: [
              "21.jpg",
              "22.jpg",
              "23.jpg",
              "22.jpg"
            ]
        }
      ],
      category:[
        {
          category: "Йогурты",
          e: "Йогурты"
         }] });
});
router.get('/milkshake', function(req, res, next) {
  res.render('index', { products: [
        {
            name: "Коктейль Молочный",
            price: '350тг',
            description: [
                "Объем 0,5л",
                "Еще что-то"
            ],
            photos: [
            "25.jpg",
            "26.jpg",
            "27.jpg",
            "28.jpg"
            ]
        },
      ],
      category:[
        {
          category: "Коктейли",
          e: "Коктейли"
         }] });
});
router.get('/chocolate', function(req, res, next) {
  res.render('index', { products: [
          {
              name: "Шоколад Wonka",
              price: '500тг',
              description: [
                "вкусный шоколад",
                "Еще что-то"
            ],
            photos: [
            "wonka3.jpg",
            "wonka.jpg",
            "wonka2.jpg",
            "wonka3.jpg",
            ]
          },
          {
              name: "Шоколад AlpenGold Oreo",
              price: '300тг',
                 description: [
                  "вкусный шоколад",
                "Еще что-то"
            ],
            photos: [
            "alpen.jpg",
            "alpen3.jpg",
            "alpen2.jpg",
            "alpen.jpg",
            ]
          },
        ],
        category:[
          {
            category: "Шоколад",
            e: "Шоколад"
           }] });
});
router.get('/cookie', function(req, res, next) {
  res.render('index', { products: [
         		   {
              name: "Печенье TUC ",
              price: '430тг',
                 description: [
                "вкусное печенье",
                "Еще что-то"
            ],
            photos: [
            "tuc3.png",
            "tuc2.jpg",
            "tuc.jpg",
            "tuc3.png",
            ]
          },
		   		   {
              name: "Печенье Oreo ",
              price: '430тг',
                 description: [
                "вкусное печенье",
                "Еще что-то"
            ],
            photos: [
            "oreo.jpg",
            "oreo2.jpg",
            "oreo3.jpg",
            "oreo.jpg",
            ]
          }
        ],
        category:[
          {
            category: "Печенье",
            e: "Печенье"
           }] });
});

module.exports = router;
