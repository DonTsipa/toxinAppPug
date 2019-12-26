const models = require('../models');
Rooom = models.Room;
createRooms = function(){
  Rooom.create({
    replies:18,
    stars:5,
    number:1,
    bedrooms:2,
    beds:2,
    price:5000,
    bathrooms:1,
    children:0,
    babies:0,
    smoking:true,
    friends:true,
    pets:true,
    wide_coridor:true,
    disabled_assistant:false,
})
.then(room => console.log(room.number))
.catch((e) => {
  console.error('Unable to connect to Add Room');
  console.log(e);
  process.exit(1);
});
Rooom.create({
  replies:10,
  stars:3,
  number:2,
  bedrooms:3,
  beds:6,
  price:8000,
  bathrooms:2,
  children:3,
  babies:1,
  smoking:false,
  friends:true,
  pets:false,
  wide_coridor:false,
  disabled_assistant:false,
})
.then(room => console.log(room.number))
.catch((e) => {
console.error('Unable to connect to Add Room');
console.log(e);
process.exit(1);
});
Rooom.create({
  replies:15,
  stars:4,
  number:3,
  bedrooms:4,
  beds:4,
  price:7000,
  bathrooms:1,
  children:2,
  babies:0,
  smoking:false,
  friends:false,
  pets:true,
  wide_coridor:true,
  disabled_assistant:false,
})
.then(room => console.log(room.number))
.catch((e) => {
console.error('Unable to connect to Add Room');
console.log(e);
process.exit(1);
});
Rooom.create({
  replies:17,
  stars:5,
  number:4,
  bedrooms:1,
  beds:1,
  price:1000,
  bathrooms:1,
  children:0,
  babies:0,
  smoking:true,
  friends:true,
  pets:true,
  wide_coridor:false,
  disabled_assistant:false,
})
.then(room => console.log(room.number))
.catch((e) => {
console.error('Unable to connect to Add Room');
console.log(e);
process.exit(1);
});
Rooom.create({
  replies:5,
  stars:4,
  number:5,
  bedrooms:2,
  beds:4,
  price:9000,
  bathrooms:2,
  children:1,
  babies:2,
  smoking:false,
  friends:false,
  pets:false,
  wide_coridor:true,
  disabled_assistant:true,
})
.then(room => console.log(room.number))
.catch((e) => {
console.error('Unable to connect to Add Room');
console.log(e);
process.exit(1);
});
Rooom.create({
  replies:14,
  stars:2,
  number:6,
  bedrooms:3,
  beds:6,
  price:15700,
  bathrooms:2,
  children:2,
  babies:2,
  smoking:true,
  friends:true,
  pets:true,
  wide_coridor:true,
  disabled_assistant:true,
})
.then(room => console.log(room.number))
.catch((e) => {
console.error('Unable to connect to Add Room');
console.log(e);
process.exit(1);
});
Rooom.create({
  replies:10,
  stars:5,
  number:7,
  bedrooms:2,
  beds:4,
  price:6000,
  bathrooms:1,
  children:2,
  babies:0,
  smoking:true,
  friends:true,
  pets:true,
  wide_coridor:false,
  disabled_assistant:false,
})
.then(room => console.log(room.number))
.catch((e) => {
console.error('Unable to connect to Add Room');
console.log(e);
process.exit(1);
});

  Rooom.create({
    replies:20,
    stars:5,
    number:8,
    bedrooms:2,
    beds:4,
    price:10000,
    bathrooms:1,
    children:2,
    babies:0,
    smoking:false,
    friends:true,
    pets:true,
    wide_coridor:true,
    disabled_assistant:false,
})
.then(room => console.log(room.number))
.catch((e) => {
  console.error('Unable to connect to Add Room');
  console.log(e);
  process.exit(1);
});  Rooom.create({
  replies:15,
  stars:3,
  number:9,
  bedrooms:1,
  beds:2,
  price:3000,
  bathrooms:1,
  children:0,
  babies:0,
  smoking:true,
  friends:true,
  pets:true,
  wide_coridor:true,
  disabled_assistant:true,
})
.then(room => console.log(room.number))
.catch((e) => {
console.error('Unable to connect to Add Room');
console.log(e);
process.exit(1);
});
Rooom.create({
  replies:12,
  stars:2,
  number:10,
  bedrooms:3,
  beds:4,
  price:7000,
  bathrooms:2,
  children:0,
  babies:0,
  smoking:true,
  friends:true,
  pets:true,
  wide_coridor:true,
  disabled_assistant:true,
})
.then(room => console.log(room.number))
.catch((e) => {
console.error('Unable to connect to Add Room');
console.log(e);
process.exit(1);
});
Rooom.create({
  replies:6,
  stars:3,
  number:11,
  bedrooms:2,
  beds:2,
  price:4000,
  bathrooms:1,
  children:0,
  babies:0,
  smoking:false,
  friends:false,
  pets:false,
  wide_coridor:true,
  disabled_assistant:false,
})
.then(room => console.log(room.number))
.catch((e) => {
console.error('Unable to connect to Add Room');
console.log(e);
process.exit(1);
});
Rooom.create({
  replies:22,
  stars:3,
  number:12,
  bedrooms:2,
  beds:4,
  price:8000,
  bathrooms:2,
  children:2,
  babies:1,
  smoking:true,
  friends:true,
  pets:true,
  wide_coridor:true,
  disabled_assistant:false,
})
.then(room => console.log(room.number))
.catch((e) => {
console.error('Unable to connect to Add Room');
console.log(e);
process.exit(1);
});
}
module.exports = createRooms;