var express = require('express');
var app = require('../app');
const path = require('path');
const { Room } = require('../models');
const router = express.Router();

//получение формы

router.get(['/'], (req, res) => {
  //объект по дефолту, для дополнения "урезанного" полученного объекта с индекса
  const number = 12;
  try {
    let defaultobj = {
      DateFrom: '',
      DateTo: '',
      smoking: false,
      pets: false,
      friends: false,
      wide_coridor: false,
      disabled_assistant: false,
      numberFacilities: false,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
      numberGuests: 0,
      adults: 0,
      children: 0,
      babies: 0,
      priceMin: 0,
      priceMax: 20000,
      numberFacilities: "Удобства",
      numberGuests: "Сколько гостей"
    }

    //параметры сессии
    let user = {
      id: req.session.userId,
      name: req.session.Name,
      login: req.session.userLogin
    }
    if (!req.session.userId) {
      user = {
        id: '',
        name: '',
        login: '',
      }
    }
    //дополняем (меняем прототип) req.query.
    Object.setPrototypeOf(req.query, defaultobj)

    if (req.query.dateRange) {
      req.query.DateFrom = req.query.dateRange.split('-')[0].trim();
      req.query.DateTo = req.query.dateRange.split('-')[1].trim();
    }
    //находим подходящие комнаты и рендерим ответ

    const {
      priceMax,
      priceMin,
      babies,
      children,
      bedrooms,
      beds,
      bathrooms,
      page,
    } = req.query;
    const options = {
      price: { $gte: parseInt(priceMin), $lte: parseInt(priceMax) },
      babies: { $gte: parseInt(babies) },
      children: { $gte: parseInt(children) },
      bedrooms: { $gte: parseInt(bedrooms) },
      beds: { $gte: parseInt(beds) },
      bathrooms: { $gte: parseInt(bathrooms) },
    }
    for (field in req.query) {
      if (req.query[field] === 'true') {
        options[field] = true
      }
    }
    Room.find(options, (err, rooms) => {
      if (err) {
        console.log(err);
        res.status(500);
      }
      res.render('search',
        {
          page,
          rooms: rooms.splice((page - 1) * number, number),
          filters: req.query,
          link: 'DateFrom=' + req.query.DateFrom + '&DateTo=' + req.query.DateTo,
          user: user,
        });
    })
  } catch (e) {
    console.log(e)
    res.status(500)
  }
})

module.exports = router;
