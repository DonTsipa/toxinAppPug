const express = require('express');
const router = express.Router();

router.all('/', (req, res) => {
  const id = req.session.userId;
  const name = req.session.Name;
  const login = req.session.userLogin;
  res.render('index.pug', {
    user: {
      name,
      id,
      login
    }
  })
});

module.exports =router;
