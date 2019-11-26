//need to use some kind of a database...maybe firebase? 

const SHOP_DATA = [
  {
    id: 1,
    title: 'Laptops',
    routeName: 'laptops',
    items: [
      {
        id: 1,
        name: 'Dell One',
        imageUrl: require('../../img/shop-images/laptops/dell1.jpg'),
        price: 850
      },
      {
        id: 2,
        name: 'Dell Two',
        imageUrl: require('../../img/shop-images/laptops/dell2.jpg'),
        price: 360
      },
      {
        id: 3,
        name: 'Dell Three',
        imageUrl: require('../../img/shop-images/laptops/dell3.jpg'),
        price: 450
      },
      {
        id: 4,
        name: 'Dell Four',
        imageUrl: require('../../img/shop-images/laptops/dell4.jpg'),
        price: 654
      },
      {
        id: 5,
        name: 'Dell Five',
        imageUrl: require('../../img/shop-images/laptops/dell5.jpg'),
        price: 254
      },
      {
        id: 6,
        name: 'Dell Six',
        imageUrl: require('../../img/shop-images/laptops/dell6.jpg'),
        price: 452
      },
      {
        id: 7,
        name: 'Dell Seven',
        imageUrl: require('../../img/shop-images/laptops/dell7.jpg'),
        price: 896
      },
      {
        id: 8,
        name: 'Dell Eight',
        imageUrl: require('../../img/shop-images/laptops/dell8.jpg'),
        price: 1256
      },
      {
        id: 9,
        name: 'Blue Dell',
        imageUrl: require('../../img/shop-images/laptops/dell9.jpg'),
        price: 1256
      },
      {
        id: 10,
        name: 'Dell 10',
        imageUrl: require('../../img/shop-images/laptops/dell10.jpg'),
        price: 1254
      }
    ]
  },
  {
    id: 2,
    title: 'Desktops',
    routeName: 'desktops',
    items: [
      {
        id: 11,
        name: 'Desktop One',
        imageUrl: require('../../img/shop-images/desktops/desktop1.jpg'),
        price: 500
      },
      {
        id: 12,
        name: 'Desktop Two',
        imageUrl: require('../../img/shop-images/desktops/desktop2.jpeg'),
        price: 550
      },
      {
        id: 13,
        name: 'Desktop Three',
        imageUrl: require('../../img/shop-images/desktops/desktop3.jpg'),
        price: 600
      },
      {
        id: 14,
        name: 'Desktop Four',
        imageUrl: require('../../img/shop-images/desktops/desktop4.jpeg'),
        price: 650
      },
      {
        id: 15,
        name: 'Desktop Five',
        imageUrl: require('../../img/shop-images/desktops/desktop5.jpg'),
        price: 700
      },
      {
        id: 16,
        name: 'Desktop Six',
        imageUrl: require('../../img/shop-images/desktops/desktop6.jpg'),
        price: 750
      },
      {
        id: 17,
        name: 'Desktop Seven',
        imageUrl: require('../../img/shop-images/desktops/desktop7.jpg'),
        price: 800
      },
      {
        id: 18,
        name: 'Desktop Eight',
        imageUrl: require('../../img/shop-images/desktops/desktop8.jpg'),
        price: 850
      },
      {
        id: 19,
        name: 'Desktop Nine',
        imageUrl: require('../../img/shop-images/desktops/desktop9.jpg'),
        price: 900
      },
      {
        id: 20,
        name: 'Desktop Ten',
        imageUrl: require('../../img/shop-images/desktops/desktop10.png'),
        price: 950
      }
    ]
  },
  {
    id: 3,
    title: 'Consoles',
    routeName: 'consoles',
    items: [
      {
        id: 21,
        name: 'Fat PS3',
        imageUrl: require('../../img/shop-images/consoles/console1.jpg'),
        price: 400
      },
      {
        id: 22,
        name: 'PS3 Slim',
        imageUrl: require('../../img/shop-images/consoles/console2.jpg'),
        price: 450
      },
      {
        id: 23,
        name: 'X-Box 360',
        imageUrl: require('../../img/shop-images/consoles/console3.jpg'),
        price: 500
      },
      {
        id: 24,
        name: 'X-Box One',
        imageUrl: require('../../img/shop-images/consoles/console4.jpg'),
        price: 550
      },
      {
        id: 25,
        name: 'X-Box 361',
        imageUrl: require('../../img/shop-images/consoles/console5.jpg'),
        price: 452
      },
      {
        id: 26,
        name: 'Nintendo Switch',
        imageUrl: require('../../img/shop-images/consoles/console6.jpg'),
        price: 236
      },
      {
        id: 27,
        name: 'Nintendo Wii',
        imageUrl: require('../../img/shop-images/consoles/console7.jpg'),
        price: 423
      },
      {
        id: 28,
        name: 'Nintendo Game Cube',
        imageUrl: require('../../img/shop-images/consoles/console8.jpg'),
        price: 354
      },
      {
        id: 29,
        name: 'Nintendo Wii U',
        imageUrl: require('../../img/shop-images/consoles/console9.png'),
        price: 412
      },
      {
        id: 30,
        name: 'Google Cube',
        imageUrl: require('../../img/shop-images/consoles/console10.jpg'),
        price: 999
      }
    ]
  },
  {
    id: 4,
    title: 'Hardwares',
    routeName: 'hardwares',
    items: [
      {
        id: 31,
        name: 'Ram',
        imageUrl: require('../../img/shop-images/hardwares/hw1.jpg'),
        price: 100
      },
      {
        id: 32,
        name: 'Video Card',
        imageUrl: require('../../img/shop-images/hardwares/hw2.jpg'),
        price: 199
      },
      {
        id: 33,
        name: 'MotherBoard',
        imageUrl: require('../../img/shop-images/hardwares/hw3.jpg'),
        price: 500
      },
      {
        id: 34,
        name: 'Hard Drive',
        imageUrl: require('../../img/shop-images/hardwares/hw4.png'),
        price: 85
      },
      {
        id: 35,
        name: 'Solid State Drive',
        imageUrl: require('../../img/shop-images/hardwares/hw5.jpg'),
        price: 250
      },
      {
        id: 36,
        name: 'Flashy KeyBoard',
        imageUrl: require('../../img/shop-images/hardwares/hw6.jpg'),
        price: 299
      },
      {
        id: 37,
        name: 'Flashy Mouse',
        imageUrl: require('../../img/shop-images/hardwares/hw7.jpg'),
        price: 59
      },
      {
        id: 38,
        name: 'Power Supply',
        imageUrl: require('../../img/shop-images/hardwares/hw8.jpg'),
        price: 70
      },
      {
        id: 39,
        name: 'Speakers',
        imageUrl: require('../../img/shop-images/hardwares/hw9.jpg'),
        price: 125
      },
      {
        id: 40,
        name: 'Speakers',
        imageUrl: require('../../img/shop-images/hardwares/hw10.jpg'),
        price: 400
      }
    ]
  },
  {
    id: 5,
    title: 'Appliances',
    routeName: 'appliances',
    items: [
      {
        id: 41,
        name: 'Refrigerator',
        imageUrl: require('../../img/shop-images/appliances/app1.jpg'),
        price: 850
      },
      {
        id: 42,
        name: 'Fancy Refrigerator',
        imageUrl: require('../../img/shop-images/appliances/app2.jpg'),
        price: 900
      },
      {
        id: 43,
        name: 'Not That Fancy Fridge',
        imageUrl: require('../../img/shop-images/appliances/app3.jpg'),
        price: 500
      },
      {
        id: 44,
        name: 'Really Fancy Fridge',
        imageUrl: require('../../img/shop-images/appliances/app4.jpg'),
        price: 565
      },
      {
        id: 45,
        name: 'Stove',
        imageUrl: require('../../img/shop-images/appliances/app5.jpg'),
        price: 600
      },
      {
        id: 46,
        name: 'Really Fancy Stove',
        imageUrl: require('../../img/shop-images/appliances/app6.jpg'),
        price: 754
      },
      {
        id: 47,
        name: 'Washer',
        imageUrl: require('../../img/shop-images/appliances/app7.jpg'),
        price: 400
      },
      {
        id: 48,
        name: 'White Washer',
        imageUrl: require('../../img/shop-images/appliances/app8.jpg'),
        price: 599
      },
      {
        id: 49,
        name: 'White Dryer',
        imageUrl: require('../../img/shop-images/appliances/app9.jpg'),
        price: 587
      },
      {
        id: 50,
        name: 'Fancy Dryer',
        imageUrl: require('../../img/shop-images/appliances/app10.jpg'),
        price: 999
      }
    ]
  },
  {
    id: 6,
    title: 'Weird Toys',
    routeName: 'weird-toys',
    items: [
      {
        id: 51,
        name: 'Toy Poop',
        imageUrl: require('../../img/shop-images/toys/wt1.jpg'),
        price: 29
      },
      {
        id: 52,
        name: 'Infinity Gauntlet',
        imageUrl: require('../../img/shop-images/toys/wt2.jpeg'),
        price: 500
      },
      {
        id: 53,
        name: 'Blue Monkey',
        imageUrl: require('../../img/shop-images/toys/wt3.jpg'),
        price: 89
      },
      {
        id: 54,
        name: 'Weird Animals',
        imageUrl: require('../../img/shop-images/toys/wt4.jpg'),
        price: 25
      },
      {
        id: 55,
        name: 'Not sure what this is',
        imageUrl: require('../../img/shop-images/toys/wt5.jpg'),
        price: 24
      },
      {
        id: 56,
        name: 'Ugly Rabbit',
        imageUrl: require('../../img/shop-images/toys/wt6.jpg'),
        price: 45
      },
      {
        id: 57,
        name: 'Robot',
        imageUrl: require('../../img/shop-images/toys/wt7.jpg'),
        price: 45
      },
      {
        id: 58,
        name: 'high looking minion',
        imageUrl: require('../../img/shop-images/toys/wt8.jpg'),
        price: 64
      }
    ]
  }
];

export default SHOP_DATA;


//Desktops
//https://i5.walmartimages.com/asr/e27dbbe9-d43c-4ed6-9199-e41e0245beee_1.ed3810851d074bbdcb8d19288248ed63.jpeg

