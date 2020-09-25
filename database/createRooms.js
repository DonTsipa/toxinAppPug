const models = require('../models');
Room = models.Room;
rooms = [{
  replies: 145,
  stars: 5,
  number: 888,
  bedrooms: 2,
  beds: 2,
  price: 9990,
  bathrooms: 1,
  children: 0,
  babies: 0,
  smoking: true,
  friends: true,
  pets: true,
  wide_coridor: true,
  disabled_assistant: false,
  luxe: true,
  images: ['roomcard_image-888.png', 'roomcard_image-888.png'],
},
{
  replies: 65,
  stars: 4,
  number: 840,
  bedrooms: 3,
  beds: 6,
  price: 9990,
  bathrooms: 2,
  children: 3,
  babies: 1,
  smoking: false,
  friends: true,
  pets: false,
  wide_coridor: false,
  disabled_assistant: false,
  images: ['roomcard_image-840.png', 'roomcard_image-840.png'],
},
{
  replies: 35,
  stars: 3,
  number: 980,
  bedrooms: 4,
  beds: 4,
  price: 8500,
  bathrooms: 1,
  children: 2,
  babies: 0,
  smoking: false,
  friends: false,
  pets: true,
  wide_coridor: true,
  disabled_assistant: false,
  images: ['roomcard_image-980.png', 'roomcard_image-980.png'],
},
{
  replies: 19,
  stars: 5,
  number: 856,
  bedrooms: 1,
  beds: 1,
  price: 7300,
  bathrooms: 1,
  children: 0,
  babies: 0,
  smoking: true,
  friends: true,
  pets: true,
  wide_coridor: false,
  disabled_assistant: false,
  images: ['roomcard_image-856.png', 'roomcard_image-856.png'],
},
{
  replies: 44,
  stars: 4,
  number: 740,
  bedrooms: 2,
  beds: 4,
  price: 6600,
  bathrooms: 2,
  children: 1,
  babies: 2,
  smoking: false,
  friends: false,
  pets: false,
  wide_coridor: true,
  disabled_assistant: true,
  images: ['roomcard_image-740.png', 'roomcard_image-740.png'],
},
{
  replies: 56,
  stars: 3,
  number: 982,
  bedrooms: 3,
  beds: 6,
  price: 5800,
  bathrooms: 2,
  children: 2,
  babies: 2,
  smoking: true,
  friends: true,
  pets: true,
  wide_coridor: true,
  disabled_assistant: true,
  images: ['roomcard_image-982.png', 'roomcard_image-982.png'],
},
{
  replies: 45,
  stars: 5,
  number: 678,
  bedrooms: 2,
  beds: 4,
  price: 5500,
  bathrooms: 1,
  children: 2,
  babies: 0,
  smoking: true,
  friends: true,
  pets: true,
  wide_coridor: false,
  disabled_assistant: false,
  images: ['roomcard_image-678.png', 'roomcard_image-678.png'],
},
{
  replies: 39,
  stars: 4,
  number: 450,
  bedrooms: 2,
  beds: 4,
  price: 5300,
  bathrooms: 1,
  children: 2,
  babies: 0,
  smoking: false,
  friends: true,
  pets: true,
  wide_coridor: true,
  disabled_assistant: false,
  images: ['roomcard_image-450.png', 'roomcard_image-450.png'],
},
{
  replies: 77,
  stars: 3,
  number: 350,
  bedrooms: 1,
  beds: 2,
  price: 5000,
  bathrooms: 1,
  children: 0,
  babies: 0,
  smoking: true,
  friends: true,
  pets: true,
  wide_coridor: true,
  disabled_assistant: true,
  images: ['roomcard_image-350.png', 'roomcard_image-350.png'],
},
{
  replies: 25,
  stars: 5,
  number: 666,
  bedrooms: 3,
  beds: 4,
  price: 5000,
  bathrooms: 2,
  children: 0,
  babies: 0,
  smoking: true,
  friends: true,
  pets: true,
  wide_coridor: true,
  disabled_assistant: true,
  images: ['roomcard_image-666.png', 'roomcard_image-666.png'],
},
{
  replies: 15,
  stars: 3,
  number: 444,
  bedrooms: 2,
  beds: 2,
  price: 5000,
  bathrooms: 1,
  children: 0,
  babies: 0,
  smoking: false,
  friends: false,
  pets: false,
  wide_coridor: true,
  disabled_assistant: false,
  images: ['roomcard_image-444.png', 'roomcard_image-444.png'],
},
{
  replies: 55,
  stars: 3,
  number: 352,
  bedrooms: 2,
  beds: 4,
  price: 5000,
  bathrooms: 2,
  children: 2,
  babies: 1,
  smoking: true,
  friends: true,
  pets: true,
  wide_coridor: true,
  disabled_assistant: false,
  images: ['roomcard_image-352.png', 'roomcard_image-352.png'],
},
]
i = 0;
createRooms = function () {
  rooms.forEach((room) => {
    Room.create(room)
      .then(addedRoom => {
        console.log(addedRoom.number)
      }).catch((e) => {
        console.error('Unable to connect to Add Room');
        console.log(e);
        process.exit(1);
      });
  })

};
module.exports = createRooms;