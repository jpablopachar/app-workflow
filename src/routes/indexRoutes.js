const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('../public/index.html');
});

module.exports = router;
