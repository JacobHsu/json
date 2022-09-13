const router = require('express').Router();
const goodsController = require('./controllers/goodsController');

router.get('/', (req, res) => {
    res.send('Server is running')
})

router.use('/goods', goodsController);

module.exports = router;